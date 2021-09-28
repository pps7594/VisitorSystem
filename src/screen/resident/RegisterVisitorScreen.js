//import library
import React, { useState, useEffect} from 'react';
import {View,Text} from 'react-native';
import { useDispatch, useSelector } from "react-redux";

//import function
import residentFunction from '../../functions/residentFunction';

const RegisterVisitorScreen = ({navigation}) => {
    const {residentWalkInAllowed} = residentFunction();
    const walkInAllowed = useSelector((state) => state.resident.walkInAllowed); 

    // Helper Function
    const errCallback = ({msg}) => {
        // Some refinement should be done? Like header of this alert should not only be "alert"?
        alert(msg)
    }

    useEffect(() => {
        // Trigger the API call every time we navigate to this screen, as a Event listener
        navigation.addListener('focus', () => residentWalkInAllowed({errCallback}));
    }, []);

    // Console log here to show what it returns
    console.log(walkInAllowed)

    return (
        <View>
            <Text>RegisterVisitorScreen</Text>
        </View>
    )
};

export default RegisterVisitorScreen;
