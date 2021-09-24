import React, { useState, useEffect} from 'react';;
import {View, Text, ScrollView} from 'react-native';
import { useDispatch, useSelector } from "react-redux"

//import function
import adminFunction from '../../functions/adminFunction';

/* 
    Format of the return
    {
    "setup": {
      "walkInAllowed": 1,
      "themeID": 1000,
      "dataRetention": 12,
      "generalSetupID": 1
    },
    "permission": {
      "carAllowed": "Lorry",
      "dat2": 1,
      "dat1": 1,
      "incomerSetupID": 1
    }
  }
*/ 

const DefaultSettingScreen = ({navigation}) => {
    const {adminDefaultSetting} = adminFunction();
    const defaultSetting = useSelector((state) => state.admindashboardSlice.defaultsetting); 

    const setup = defaultSetting.setup;
    const permission = defaultSetting.permission;
    
    // Helper Function
    const errCallback = ({msg}) => {
        // Some refinement should be done? Like header of this alert should not only be "alert"?
        alert(msg)
    }

    useEffect(() => {
        // Trigger the API call every time we navigate to this screen, as a Event listener
        navigation.addListener('focus', () => adminDefaultSetting({errCallback}));
    }, []);

    return (
        <View>
            <Text>{setup.dataRetention}</Text>
        </View>
    )
};

export default DefaultSettingScreen;
