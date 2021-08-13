import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationDrawerStructure } from './DrawerStructure';

import DashboardScreen from '../screen/admin/DashboardScreen'
import DefaultSettingScreen from '../screen/admin/DefaultSettingScreen'
import ProfileScreen from '../screen/admin/ProfileScreen'
import ProfileEditScreen from '../screen/admin/ProfileEditScreen'
import ReportScreen from '../screen/admin/ReportScreen'
import RequestApprovalScreen from '../screen/admin/RequestApprovalScreen'
import VisitRequestScreen from '../screen/admin/VisitRequestScreen'

const Stack = createStackNavigator();

function adminDashboard({ navigation }){
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
            name="Dashboard"
            component={DashboardScreen}
        />
        </Stack.Navigator>
    ) 
}
function adminRequestApproval({ navigation }){
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
            name="Request Approval"
            component={RequestApprovalScreen}
        />
        </Stack.Navigator>
    ) 
}
function adminVisitRequest({ navigation }){
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
            name="Visit Request List"
            component={VisitRequestScreen}
        />
        </Stack.Navigator>
    ) 
}
function adminReport({ navigation }){
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
function adminProfile({ navigation }){
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
            name="Profile"
            component={ProfileScreen}
        />
        <Stack.Screen
            name="Edit Profile"
            component={ProfileEditScreen}
        />
        </Stack.Navigator>
    ) 
}
function adminSystemSetting({ navigation }){
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
            name="System Setting"
            component={DefaultSettingScreen}
        />
        </Stack.Navigator>
    ) 
}
export {adminDashboard,adminRequestApproval,adminVisitRequest,adminReport,adminProfile,adminSystemSetting}