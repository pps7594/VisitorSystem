import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationDrawerStructure } from './DrawerStructure';

import DashboardScreen from '../screen/resident/DashboardScreen';
import RegisterVisitorScreen from '../screen/resident/RegisterVisitorScreen';
import ReportScreen from '../screen/resident/ReportScreen';
import VisitRequestScreen from '../screen/resident/VisitRequestScreen';
import ProfileScreen from '../screen/resident/ProfileScreen';
import ProfileEditScreen from '../screen/resident/ProfileEditScreen';

const Stack = createStackNavigator();

function residentDashboard({navigation}){
    return(
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
function residentRegisterVisitor({navigation}){
    return(
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
            name="Register Visitor"
            component={RegisterVisitorScreen}
        />
        </Stack.Navigator>
    )
}
function residentVisitRequest({navigation}){
    return(
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
function residentReport({navigation}){
    return(
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
function residentProfile({navigation}){
    return(
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
export {residentDashboard,residentRegisterVisitor,residentVisitRequest,residentReport,residentProfile}