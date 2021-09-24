import React, { useState, useEffect} from 'react';;
import {View, Text, ScrollView} from 'react-native';
import { useDispatch, useSelector } from "react-redux";

//import function
import adminFunction from '../../functions/adminFunction';

const ReportScreen = ({navigation}) => {
    const {adminReport} = adminFunction();
    const adminReportArray = useSelector((state) => state.admindashboardSlice.adminreportarray); 

    // Helper Function
    const errCallback = ({msg}) => {
        // Some refinement should be done? Like header of this alert should not only be "alert"?
        alert(msg)
    }

    useEffect(() => {
        // Trigger the API call every time we navigate to this screen, as a Event listener
        navigation.addListener('focus', () => adminReport({errCallback}));
    }, []);

    return (
        <View>
            <Text>AdminReportScreen</Text>
        </View>
    )
};

export default ReportScreen;
