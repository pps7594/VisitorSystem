import React from 'react';
import { View, Image, Text, Stylesheet } from 'react-native';


const imageUrl = 'http://192.168.1.14:8080/QR/QR2.png'
const DisplayPhotoScreen = () => {
    
    return (
      <View>
        <Image style={{width:100, height:100}} source={{ uri: imageUrl }} />
      </View>
    );
  };
  
  export default DisplayPhotoScreen;
  