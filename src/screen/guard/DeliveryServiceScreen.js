//import library
import React, { useState, useEffect} from 'react';
import {View,Text} from 'react-native';
import { useDispatch, useSelector } from "react-redux";

//import function
import guardFunction from '../../functions/guardFunction';

const DeliveryServiceScreen = ({navigation}) => {
    const {guardWalkInAllowed} = guardFunction();
    const walkInAllowed = useSelector((state) => state.guard.walkinallowed); 

    // Helper Function
    const errCallback = ({msg}) => {
        alert(msg)
    }

    useEffect(() => {
        // Trigger the API call every time we navigate to this screen, as a Event listener
        navigation.addListener('focus', () => guardWalkInAllowed({errCallback}));
    }, []);

    // Console log here to show what it returns
    console.log(walkInAllowed)

    return (
        <View>
            <Text>DeliveryServiceScreen</Text>
        </View>
    )
};

export default DeliveryServiceScreen;
