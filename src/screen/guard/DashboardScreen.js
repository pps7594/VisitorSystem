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
                <MyContainer conRow spacebetween alignstretch>
                <GuardCard MC iconName="truck-delivery" title="Register Delivery Service"  func={() => navigation.navigate('Register Delivery Service')}/>                
                <GuardCard FA iconName="ambulance" title="Register Emergency Service"  func={() => navigation.navigate('Register Emergency')}/>                
                </MyContainer>
                <Spacer m20/>
                <MyText title="Visitor List"  h4P style={styles.date}/>
                <MyContainer conRow flexstart>
                <GuardCard FA iconName="list-ul" title="Current Visitor List"  func={() => navigation.navigate('Current Visitor List')}/>               
                </MyContainer>
                <Spacer m20/>
                <MyText title={`Check In & Check Out`}  h4P style={styles.date}/>
                <MyContainer conRow spacebetween alignstretch>
                <GuardCard IO iconName="log-in-outline" title="Visitor Check-in"  func={() => navigation.navigate('Visitor Check-in')}/>
                <GuardCard IO iconName="log-out-outline" title="Visitor Check-out"  func={() => navigation.navigate('Visitor Check-out')}/>              
                </MyContainer>
            </MyContainer>
};

 const styles = StyleSheet.create({
    date:{
        alignSelf: "flex-start",
    }
 });

 export default DashboardScreen;