import React, { useState, useEffect, useContext } from 'react';
import {View, StyleSheet} from 'react-native';

//import component
import Spacer from '../../components/Spacer';
import MyText from '../../components/MyText';
import {MyContainer,GuardCard} from '../../components/MyCard';

import space from '../../config/space';

const DashboardScreen = ({navigation}) => {
    
    return <MyContainer screencontainer>
                <Spacer spacer/>
                <MyText title="Registration"  h4P style={styles.date}/>
                <MyContainer conRow spacebetween>
                <GuardCard MC iconName="truck-delivery" title="Register Delivery Service" />                
                <GuardCard FA iconName="ambulance" title="Register Emergency Service"/>                
                </MyContainer>
                <Spacer m20/>
                <MyText title="Visitor List"  h4P style={styles.date}/>
                <MyContainer screencontainer>
                <GuardCard FA iconName="list-ul" title="Current Visitor List" />               
                </MyContainer>
                <Spacer m20/>
                <MyText title={`Check In & Check Out`}  h4P style={styles.date}/>
                <MyContainer screencontainer>
                <GuardCard IO iconName="log-in-outline" title="Visitor Check-in" />
                <GuardCard IO iconName="log-out-outline" title="Visitor Check-out" />              
                </MyContainer>
            </MyContainer>
};

 const styles = StyleSheet.create({
    date:{
        alignSelf: "flex-start",
    }
 });

 export default DashboardScreen;