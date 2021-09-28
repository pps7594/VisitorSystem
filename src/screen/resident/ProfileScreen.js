import React, { useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import { useDispatch, useSelector } from "react-redux";

//import function
import residentFunction from '../../functions/residentFunction';

const ProfileScreen = ({navigation}) => {
    const {residentProfile} = residentFunction();
    const userWithAddress = useSelector((state) => state.credential.userWithAddress);

    // Helper Function
    const errCallback = ({msg}) => {
        // Some refinement should be done? Like header of this alert should not only be "alert"?
        alert(msg)
    }

    useEffect(() => {
        // Trigger the API call every time we navigate to this screen, as a Event listener
        navigation.addListener('focus', () => residentProfile({errCallback}));
    }, []);

    return (
        <View>
            <Text>ResidentProfileScreen</Text>
        </View>
    )
};

export default ProfileScreen;
