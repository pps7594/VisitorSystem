import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Image, FlatList, Text } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import conn from '../../api/connection';

export default function Add() {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState(null);

  const [camera, setCamera] = useState(null);
  const [imageUri, setImageUri] = useState([]);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [imageArray, setImageArray] = useState([]);

  const permisionFunction = async () => {
    // here is how you can get the camera permission
    const cameraPermission = await Camera.requestPermissionsAsync();

    setCameraPermission(cameraPermission.status === 'granted');

    const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
    console.log(imagePermission.status);

    setGalleryPermission(imagePermission.status === 'granted');

    if (
      imagePermission.status !== 'granted' &&
      cameraPermission.status !== 'granted'
    ) {
      alert('Permission for media access needed.');
    }
  };

  useEffect(() => {
    permisionFunction();
  }, []);

  const createFormData = (photo, id = {}) =>{
    const data = new FormData();

    data.append('file',{
        uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
        type: 'image/jpeg'
    });
    data.append('visitRequestId', {id} )

    return data;
  }

  const takePicture = async () => {
    if (camera) {
        const photo = await camera.takePictureAsync({quality:0.7, base64:true});
        // Can get { uri, width, height, exif, base64 }
        // console.log(photo.uri);

        setImageUri(photo.uri);
        setImageArray([...imageArray, photo.uri]);

        // ISPREVIEW is inbuild in expo camera, make sure to check that
       
        // const data = createFormData(photo, 1000);
        const photoBase64 = photo.base64;
        const id = 1000;
        
        try{
            // make API request to sign up at the track-server with our credential
            // await conn.get('/getPhotoInfo',{headers: {
            //     'Content-Type': 'application/json'
            // }});
            await conn.post('/fileUpload',
                // This will become something inside 'req.body' parameter, note that we extract this from 'req.body' in server
                {photoBase64, id}
            )
        } catch (err) {
            console.log(err)
            // dispatch({type: 'add_error', payload: 'Something went wrong with Sign Up'})
        }   
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    console.log(result.uri);
    if (!result.cancelled) {
      setImageArray([...imageArray, result.uri]);
    }
  };

  

  return (
    <View style={styles.container}>
      <Camera
        ref={(ref) => setCamera(ref)}
        style={styles.fixedRatio}
        type={type}
      />

      {imageArray.length > 0 && (
        <View style={{ height: 110 }}>
          <FlatList
            horizontal
            data={imageArray}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item }}
                style={{ width: 100, height: 100, borderRadius: 10, margin: 5 }}
              />
            )}
          />
        </View>
      )}
      <Button title={'Take Picture'} onPress={takePicture} />
      <Button title={'Gallery'} onPress={pickImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  fixedRatio: {
    flex: 1,
  },
});
