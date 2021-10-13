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
    const {adminProfile} = adminFunction();
    const userWithAddress = useSelector((state) => state.credential.userWithAddress);

    // Helper Function
    const errCallback = ({msg}) => {
        // Some refinement should be done? Like header of this alert should not only be "alert"?
        alert(msg)
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
    const [confirmerror, setConfirmerror] = useState('');

    const profileValidation =  () => {
      let errorFlag = false;
      const nameRegex = /^[a-z ,.'-]+$/i;
      const emailRegex = /^\S+@\S+\.\S+$/;
      // input validation
      if (name.length == 0) {
        errorFlag = true;
        setNameerror("Name is required feild") 
      } else if (!nameRegex.test(name)) {
        errorFlag = true;
        setNameerror( "Please type your name correctly")
      }
      else{
        setNameerror("")
      }

      if (email.length == 0) {
        errorFlag = true;
        setEmailerror("Email is required feild") 
      } else if (!emailRegex.test(email)) {
        errorFlag = true;
        setEmailerror("Please check your email format")
      }
      else{
        setEmailerror("")
      }

     /** Call Your API */
      if (!errorFlag) {
          console.log("Profile Okay");
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
        
        
        if (confirm.length == 0) {
          errorFlag = true;
          setConfirmerror("Confirm Password is required feild")
        } else if (confirm.length < 8 ||  confirm.length > 20) {
          errorFlag = true;
          setConfirmerror("Password should be min 8 char and max 20 char")
        }
        else{
          setConfirmerror("")
        }

       /** Call Your API */
        if (!errorFlag) {
            console.log("Okay");
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
                {confirmerror.length > 0 && <Text style={styles.errorMessage}>{confirmerror}</Text>}
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
