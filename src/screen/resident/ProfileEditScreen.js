import React, { useState, useEffect} from 'react';
import {View, Text, ScrollView,StyleSheet} from 'react-native';
import { useDispatch, useSelector } from "react-redux";

//import function
import residentFunction from '../../functions/residentFunction';

//import component
import { MyContainer } from '../../components/MyCard';
import MyText from '../../components/MyText';
import {MyTextInput} from '../../components/MyTextInput';
import Spacer from '../../components/Spacer';
import {MyButton} from '../../components/MyButton';

import colors from '../../config/colors';

const ProfileEditScreen = ({navigation}) => {
    const {residentProfile, postResidentInfo,postResidentPass} = residentFunction();
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
        navigation.addListener('focus', () => residentProfile({errCallback}));
    }, []);

    const [name, setName] = useState(userWithAddress.userObj.userName);
    const [nameerror, setNameerror] = useState('');
    const [email, setEmail] = useState(userWithAddress.userObj.userEmail);
    const [emailerror, setEmailerror] = useState('');
    const [phone, setPhone] = useState(userWithAddress.residentObj.residentsTel);
    const [phoneerror, setPhoneerror] = useState('');
    const [newpwd, setNewpwd] = useState('');
    const [confirm, setConfirm] = useState('');
    const [newerror, setNewerror] = useState('');

    const profileValidation =  () => {
      let errorFlag = false;
      const nameRegex = /^[a-z ,.'-]+$/i;
      const emailRegex = /^\S+@\S+\.\S+$/;
      const phoneRegex = /^(?:\d{3}-\d{7}|\d{4}-\d{7}|\d{10}|\d{11})$/;
      // input validation
      if (name.length  != 0 && name.length <=50 && !nameRegex.test(name)) {
        errorFlag = true;
        setNameerror( "Invalid Character for Name field")
      }
      else{
        setNameerror("")
      }

      if (email.length  != 0 && email.length <= 100 && !emailRegex.test(email)) {
        errorFlag = true;
        setEmailerror("Invalid Email Format")
      }
      else{
        setEmailerror("")
      }

      if (phone.length  != 0 && !phoneRegex.test(phone)) {
        errorFlag = true;
        setPhoneerror("Invalid Phone Format")
      }
      else{
        setPhoneerror("")
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
            },
            residentObj : {
              ...userWithAddress.residentObj,
              residentsTel: phone != '' ? phone : userWithAddress.residentObj.residentsTel
            }
          }
          postResidentInfo(userInputObj,errCallback,callback)
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
        } else if (newpwd.length < 8 ||  newpwd.length > 20) {
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
            postResidentPass(userInputObj,errCallback,callback)
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
              value={name} 
              onChangeText={setName}
              />
              {nameerror.length > 0 && <Text style={styles.errorMessage}>{nameerror}</Text>}
              <Spacer space10/>
              <MyTextInput  
              label="Email: *"
              value={email} 
              onChangeText={setEmail}
              />
              {emailerror.length > 0 && <Text style={styles.errorMessage}>{emailerror}</Text>}
              <Spacer space10/>
              <MyTextInput  
              label="Phone Number: *"
              value={phone} 
              onChangeText={setPhone}
              />
              {phoneerror.length > 0 && <Text style={styles.errorMessage}>{phoneerror}</Text>}
              <Spacer space10/>
              <MyTextInput  
              label="House Number: "
              placeholder={"No." + userWithAddress.residentObj.houseNumber}
              uneditable
              />
              <Spacer space10/>
              <MyTextInput  
              label="House Street: "
              placeholder={userWithAddress.residentObj.houseStreet}
              uneditable
              />
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
