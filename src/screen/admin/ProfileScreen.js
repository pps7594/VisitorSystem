import React, { useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import {Image} from 'react-native'

//import function
import adminFunction from '../../functions/adminFunction';

import {MyContainer} from '../../components/MyCard';
import MyText from '../../components/MyText';
import Spacer from '../../components/Spacer';
import {MyButton} from '../../components/MyButton';

const ProfileScreen = ({navigation}) => {
    const {adminProfile} = adminFunction();
    const userObj = useSelector((state) => state.credential.userWithAddress);

    // Helper Function
    const errCallback = ({msg}) => {
        // Some refinement should be done? Like header of this alert should not only be "alert"?
        alert(msg)
    }

    useEffect(() => {
        // Trigger the API call every time we navigate to this screen, as a Event listener
        navigation.addListener('focus', () => adminProfile({errCallback}));
    }, []);

    return (
        <MyContainer screencontainer>
            <MyContainer cardcontainer borderRadius5>
            <Spacer m20/>
                <MyContainer conCol>
                    <Image 
                        style={{height:100,width:100}}
                        source={require("../../assets/logo.png")}/>
                    <Spacer spacer/>
                </MyContainer>
                <MyContainer conCol alignstart paddingleft>
                    <MyText title="User ID: " pP3 grey/>
                    <MyText title={userObj.userObj.userRole+userObj.userObj.userID} pP2/>
                    <Spacer space10/>
                    <MyText title="Username: " pP3 grey/>
                    <MyText title={userObj.userObj.userName} pP2/>
                    <Spacer space10/>
                    <MyText title="Email: " pP3 grey/>
                    <MyText title={userObj.userObj.userEmail} pP2/>
                </MyContainer>
            <Spacer m20/>
                <MyButton title="Edit Profile" active h4/>
            <Spacer m20/>
            </MyContainer>
        </MyContainer>
    )
};

export default ProfileScreen;
