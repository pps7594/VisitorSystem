import React from 'react'
import { View, Text, Button} from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import {NavigationEvents} from 'react-navigation'


const VisitRequestScreen = () => {
    const credential = useSelector((state) => state.credential.userWithAddress);
    return (
        
        <View>
            <Text>AdminVisitRequestScreen</Text>
        </View>
    )
};

export default VisitRequestScreen;
