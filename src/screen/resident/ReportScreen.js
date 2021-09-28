//import library
import React, { useState, useEffect} from 'react';
import {View,Text} from 'react-native';
import { useDispatch, useSelector } from "react-redux";

//import function
import residentFunction from '../../functions/residentFunction';

const ReportScreen = ({navigation}) => {
    const {residentReport} = residentFunction();
    const [currentDate, setCurrentDate] = useState('');
    const residentReportArray = useSelector((state) => state.resident.residentreportarray); 

    // Helper Function
    const errCallback = ({msg}) => {
        // Some refinement should be done? Like header of this alert should not only be "alert"?
        alert(msg)
    }

    useEffect(() => {
        // Trigger the API call every time we navigate to this screen, as a Event listener
        navigation.addListener('focus', () => residentReport({errCallback}));
    }, []);

    console.log(residentReportArray.length)
    return (
        <View>
            <Text>ResidentReportScreen</Text>
        </View>
    )
};

export default ReportScreen;