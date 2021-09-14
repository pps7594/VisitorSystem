import React, { useState, useContext } from 'react';
import {Image,View, StyleSheet} from 'react-native';
import {Text,Input} from 'react-native-elements';
import { useDispatch, useSelector } from "react-redux";

//import NavLink from '../components/NavLink';
import Spacer from '../components/Spacer';
import MyText from '../components/MyText';
import {MyButton} from '../components/MyButton';
import colors from '../config/colors';


//import function
import signinFunction from '../functions/signinFunction';

const SignInScreen = ({navigation}) => {
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const errorMsg = useSelector((state) => state.credential.errorMsg);
    const [signin] = signinFunction();
    
    return <View style={styles.container}>
                <Image 
                    style={styles.background}
                    source={require("../assets/home.png")}/>
                
                <View style={styles.logoContainer}>
                <Image 
                    style={styles.logo}
                    source={require("../assets/logo.png")}/>
                <MyText title="JMJ HILLS" h1P/>
                </View>
                
                <View style={styles.formContainer}>
                <MyText title="Login" h1P/>
                <Spacer />
                <Input
                    label="User ID"
                    value={userID}
                    onChangeText={setUserID}
                
                    //Property config
                    autoCapitalize="none"
                    autoCorrect = {false} />
                <Input
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                
                    //Property config
                    autoCapitalize="none"
                    autoCorrect = {false}
                    //password masking (ex.***)
                    secureTextEntry />
                {errorMsg ? <Text style={styles.errorMessage}>{errorMsg}</Text> : null}
                <MyButton title="SIGN IN" userID={userID} password={password} callback={({path}) => {
                    navigation.navigate(path)
                }} func={signin} h3/> 
                </View>

                </View>

};

SignInScreen.navigationOptions =() => {
    return{
        headerShown:false,
    };
};

 const styles = StyleSheet.create({
    container:{
        paddingBottom:15,
        flex:1,
        alignItems: "center",
    },

    background:{
        resizeMode:"cover",
        width:"100%",
        height:"40%",
        opacity:0.3,       
    },
    logo:{
        width:100,
        height:100,
    },

    logoContainer:{
        position:"absolute",
        top:"8%",
        alignItems: "center",

    },
    formContainer:{
        backgroundColor: colors.white,
        position:"absolute",
        top:"35%",
        width:"100%",
        height:"80%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
        padding:15,
    },
    errorMessage:{
        fontSize:16,
        color:colors.rejected,
        marginBottom:15
    },
    
 });

 export default SignInScreen;
