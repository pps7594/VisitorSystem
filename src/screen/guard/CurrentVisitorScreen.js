//import library
import React, { useState, useEffect} from 'react';
import {View,Text} from 'react-native';
import { useDispatch, useSelector } from "react-redux";

//import function
import guardFunction from '../../functions/guardFunction';

const CurrentVisitorScreen = ({navigation}) => {
    const {guardCurrentVisitorlist} = guardFunction();
    const currentVisitorlistArray = useSelector((state) => state.guard.currentvisitorlistarray); 

    // Helper Function
    const errCallback = ({msg}) => {
        alert(msg)
    }

    useEffect(() => {
        // Trigger the API call every time we navigate to this screen, as a Event listener
        navigation.addListener('focus', () => guardCurrentVisitorlist({errCallback}));
    }, []);

    // Console log here to show what it returns
    console.log(currentVisitorlistArray)

    return (
        <View>
            <Text>CurrentVisitorScreen</Text>
        </View>
    )
};

export default CurrentVisitorScreen;
