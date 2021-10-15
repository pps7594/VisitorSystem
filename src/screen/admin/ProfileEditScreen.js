import React, { useState, useEffect} from 'react';
import {View, Text, ScrollView,StyleSheet} from 'react-native';
import { useDispatch, useSelector } from "react-redux";

//import function
import adminFunction from '../../functions/adminFunction';

//import component
import { MyContainer } from '../../components/MyCard';
import MyText from '../../components/MyText';
import {MyTextInput} from '../../components/MyTextInput';
import Spacer from '../../components/Spacer';
import {MyButton} from '../../components/MyButton';

import colors from '../../config/colors';

const ProfileEditScreen = ({navigation}) => {
    const {adminProfile, postInfo, postPass} = adminFunction();
    const userWithAddress = useSelector((state) => state.credential.userWithAddress);

    // Helper Function
    const errCallback = ({msg}) => {
        // Some refinement should be done? Like header of this alert should not only be "alert"?
        alert(msg)
    }
    const callback = ({path}) => {
      navigation.navigate(path)
  }

    useEffect(() => {
        // Trigger the API call every time we navigate to this screen, as a Event listener
        navigation.addListener('focus', () => adminProfile({errCallback}));
    }, []);

    const [input, setInput] = React.useState([
        { uname: '' },
        { email: ''},
      ]);

    const [name, setName] = useState('');
    const [nameerror, setNameerror] = useState('');
    const [email, setEmail] = useState('');
    const [emailerror, setEmailerror] = useState('');
    const [newpwd, setNewpwd] = useState('');
    const [confirm, setConfirm] = useState('');
    const [newerror, setNewerror] = useState('');

    const profileValidation =  () => {
      let errorFlag = false;
      const nameRegex = /^[a-z ,.'-]+$/i;
      const emailRegex = /^\S+@\S+\.\S+$/;
      // input validation
      if (name.length  != 0 && !nameRegex.test(name)) {
        errorFlag = true;
        setNameerror( "Invalid Character for Name field")
      }
      else{
        setNameerror("")
      }

      if (email.length  != 0 && !emailRegex.test(email)) {
        errorFlag = true;
        setEmailerror("Invalid Email Format")
      }
      else{
        setEmailerror("")
      }
      
      /** Call Your API */    
      if (!errorFlag) {
          console.log("Profile Okay");
          let userInputObj = {
            ...userWithAddress, 
            userObj :{
              ...userWithAddress.userObj, 
              userName: name != '' ? name : userWithAddress.userObj.userName ,
              userEmail: email != '' ? email : userWithAddress.userObj.userEmail
            }
          }
          postInfo(userInputObj,errCallback,callback)
      }
  }
    
    const pwdValidation =  () => {
        let errorFlag = false;
        // input validation
        if (newpwd.length == 0) {
          errorFlag = true;
          setNewerror("Password is required feild") 
        }
        if (newpwd.length == 0) {
          errorFlag = true;
          setNewerror("Password is required feild") 
        } else if (newpwd.length < 5 ||  newpwd.length > 20) {
          errorFlag = true;
          setNewerror( "Password should be min 8 char and max 20 char")
        } else if (newpwd !==  confirm ) {
          errorFlag = true;
          setNewerror( "Password and confirm password should be same.")
        }
        else{
          setNewerror("")
        }
        
       /** Call Your API */
        if (!errorFlag) {
            console.log("Password Valid");
            let userInputObj = {
              ...userWithAddress, 
              userObj :{
                ...userWithAddress.userObj, 
                // We confirm have data in this field as after our validation
                userPassword: newpwd
              }
            }
            postPass(userInputObj,errCallback,callback)
        }
    }

    return (
      <MyContainer screencontainer>
          <ScrollView showsVerticalScrollIndicator={false}>
          <MyContainer cardcontainer borderRadius5>
              <MyText title="Fields marked with an asterisk (*) are required."  pR3I/>
              <Spacer space10/>
              <MyTextInput  
              label="User ID: "
              placeholder={userWithAddress.userObj.userRole+userWithAddress.userObj.userID}
              uneditable
              />
              <Spacer space10/>
              <MyTextInput  
              label="Username: *"
              placeholder={userWithAddress.userObj.userName}
              value={name} 
              onChangeText={setName}
              />
              {nameerror.length > 0 && <Text style={styles.errorMessage}>{nameerror}</Text>}
              <Spacer space10/>
              <MyTextInput  
              label="Email: *"
              placeholder={userWithAddress.userObj.userEmail}
              value={email} 
              onChangeText={setEmail}
              />
              {emailerror.length > 0 && <Text style={styles.errorMessage}>{emailerror}</Text>}
              <Spacer m20/>
              <MyButton title="Save Profile" height40 borderradius30 row pP2 func={() =>profileValidation()} selected/>
              <Spacer m20/>

              <MyContainer conRow>
                  <MyText title="Change Password" h3P/>
              </MyContainer>
              <Spacer space10/>
              <MyTextInput  
                label="New Password: *"
                value={newpwd} 
                onChangeText={setNewpwd}
                secureTextEntry
              />
              {newerror.length > 0 && <Text style={styles.errorMessage}>{newerror}</Text>}
              <Spacer space10/>
              <MyTextInput  
                label="Confirm Password: *"
                value={confirm} 
                onChangeText={setConfirm}
                secureTextEntry
              />
              <Spacer m20/>
              <MyButton title="Change Password" height40 borderradius30 row pP2 func={() =>pwdValidation()} selected/>
              <Spacer m20/>
          </MyContainer>
          </ScrollView>
      </MyContainer>
    )
};

const styles = StyleSheet.create({
  errorMessage:{
      fontSize:14,
      color:colors.rejected,
  },
});


export default ProfileEditScreen;
