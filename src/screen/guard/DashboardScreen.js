import React, { useState, useEffect, useContext } from 'react';
import {View, StyleSheet} from 'react-native';

//import component
import Spacer from '../../components/Spacer';
import MyText from '../../components/MyText';
import {GuardCard} from '../../components/MyCard';

import space from '../../config/space';

const DashboardScreen = ({navigation}) => {
    
    return <View style={styles.container}>
                <Spacer/>
                <MyText title="Registration"  h4P style={styles.date}/>
                <View style={styles.row}>
                <GuardCard MC iconName="truck-delivery" title="Register Delivery Service" />                
                <GuardCard FA iconName="ambulance" title="Register Emergency Service"/>                
                </View>
                <Spacer/>
                <Spacer/>
                <MyText title="Visitor List"  h4P style={styles.date}/>
                <View style={styles.row}>
                <GuardCard FA iconName="list-ul" title="Current Visitor List" />               
                </View>
                <Spacer/>
                <Spacer/>
                <MyText title={`Check In & Check Out`}  h4P style={styles.date}/>
                <View style={styles.row}>
                <GuardCard IO iconName="log-in-outline" title="Visitor Check-in" />
                <GuardCard IO iconName="log-out-outline" title="Visitor Check-out" />              
                </View>
            </View>
};

 const styles = StyleSheet.create({
    date:{
        alignSelf: "flex-start",
    },
    container:{
        flex:1,
        padding:space.screenpadding,
    },
    row:{
        flexDirection: "row",
        justifyContent:"space-between"
    },
 });

 export default DashboardScreen;