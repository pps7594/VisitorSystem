import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationDrawerStructure } from './DrawerStructure';

import CountScreen from '../screen/lab/CountScreen';
import PhotoScreen from '../screen/lab/PhotoScreen';
import DisplayPhotoScreen from '../screen/lab/DisplayPhotoScreen';
import ScanScreen from '../screen/lab/ScanScreen';

const Stack = createStackNavigator();

function labCount({ navigation }){
    return (
        <Stack.Navigator
        screenOptions={{
            headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
            ),
            headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
            },
        }}>
        <Stack.Screen
            name="Count in Redux"
            component={CountScreen}
        />
        </Stack.Navigator>
    ) 
}
function labPhoto({ navigation }){
    return (
        <Stack.Navigator
        screenOptions={{
            headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
            ),
            headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
            },
        }}>
        <Stack.Screen
            name="Photo Capture"
            component={PhotoScreen}
        />
        </Stack.Navigator>
    ) 
}
function labShow({ navigation }){
    return (
        <Stack.Navigator
        screenOptions={{
            headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
            ),
            headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
            },
        }}>
        <Stack.Screen
            name="ShowPhoto"
            component={DisplayPhotoScreen}
        />
        </Stack.Navigator>
    ) 
}
function labScan({ navigation }){
    return (
        <Stack.Navigator
        screenOptions={{
            headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
            ),
            headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
            },
        }}>
        <Stack.Screen
            name="Scan"
            component={ScanScreen}
        />
        </Stack.Navigator>
    ) 
}

export {labCount,labPhoto,labShow,labScan}