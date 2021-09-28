//import library
import React, { useState, useEffect} from 'react';
import {View,Text} from 'react-native';
import { useDispatch, useSelector } from "react-redux";

//import function
import residentFunction from '../../functions/residentFunction';

const VisitRequestScreen = ({navigation}) => {
    const {residentVisitRequest} = residentFunction();
    const [currentDate, setCurrentDate] = useState('');
    const residentVisitRequestArray = useSelector((state) => state.resident.residentvisitrequestarray); 
    const userWithAddress = useSelector((state) => state.credential.userWithAddress); 

    // Helper Function
    const errCallback = ({msg}) => {
        // Some refinement should be done? Like header of this alert should not only be "alert"?
        alert(msg)
    }

    useEffect(() => {
        // Trigger the API call every time we navigate to this screen, as a Event listener
        navigation.addListener('focus', () => residentVisitRequest({errCallback}));
    }, []);

    // Console log here to show what it returns
    console.log(userWithAddress.userObj.userName)
    console.log(residentVisitRequestArray)
    return (
        <View>
            <Text>ResidentVisitRequestScreen</Text>
        </View>
    )
};

export default VisitRequestScreen;
