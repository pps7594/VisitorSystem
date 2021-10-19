import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationDrawerStructure } from './DrawerStructure';

import CountScreen from '../screen/lab/CountScreen';
import PhotoScreen from '../screen/lab/PhotoScreen';
import DisplayPhotoScreen from '../screen/lab/DisplayPhotoScreen';
import ScanScreen from '../screen/lab/ScanScreen';
import RequestScreen from '../screen/lab/RequestScreen';
import RegisterScreen from '../screen/lab/RegisterScreen';
import ReportScreen from '../screen/lab/ReportScreen';
import AdminProfileScreen from '../screen/lab/AdminProfileScreen';
import ResidentProfileScreen from '../screen/lab/ResidentProfileScreen';
import DefaultSettingScreen from '../screen/lab/DefaultSettingScreen';

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
function labRequest({ navigation }){
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
            name="Request"
            component={RequestScreen}
        />
        </Stack.Navigator>
    ) 
}
function labRegister({ navigation }){
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
            name="Register"
            component={RegisterScreen}
        />
        </Stack.Navigator>
    ) 
}
function labReport({ navigation }){
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
            name="Report"
            component={ReportScreen}
        />
        </Stack.Navigator>
    ) 
}
function labAdminProfile({ navigation }){
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
            name="Admin Profile"
            component={AdminProfileScreen}
        />
        </Stack.Navigator>
    ) 
}
function labResidentProfile({ navigation }){
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
            name="Resident Profile"
            component={ResidentProfileScreen}
        />
        </Stack.Navigator>
    ) 
}
function labDefaultSetting({ navigation }){
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
            name="Default Setting"
            component={DefaultSettingScreen}
        />
        </Stack.Navigator>
    ) 
}
export {labCount,labPhoto,labShow,labScan,labRequest,labRegister,labReport,labAdminProfile,labResidentProfile,labDefaultSetting}