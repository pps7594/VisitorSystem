import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationDrawerStructure } from './DrawerStructure';

import DashboardScreen from '../screen/resident/DashboardScreen';
import RegisterVisitorScreen from '../screen/resident/RegisterVisitorScreen';
import ReportScreen from '../screen/resident/ReportScreen';
import VisitRequestScreen from '../screen/resident/VisitRequestScreen';
import ProfileScreen from '../screen/resident/ProfileScreen';
import ProfileEditScreen from '../screen/resident/ProfileEditScreen';

import colors from '../config/colors';

const Stack = createStackNavigator();

function residentDashboard({navigation}){
    return(
        <Stack.Navigator
        screenOptions={{
            headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
            ),
            headerStyle: {
            backgroundColor: colors.background, //Set Header color
            },
            headerTintColor: colors.black, //Set Header text color
            headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
            },
        }}>
        <Stack.Screen
            name="Resident Dashboard"
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
            backgroundColor: colors.background, //Set Header color
            },
            headerTintColor: colors.black, //Set Header text color
            headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
            },
        }}>
        <Stack.Screen
            name="ResidentRegisterVisitor"
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
            backgroundColor: colors.background, //Set Header color
            },
            headerTintColor: colors.black, //Set Header text color
            headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
            },
        }}>
        <Stack.Screen
            name="ResidentVisitRequestList"
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
                backgroundColor: colors.background, //Set Header color
            },
            headerTintColor: colors.black, //Set Header text color
            headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
            },
        }}>
        <Stack.Screen
            name="ResidentReport"
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
            backgroundColor: colors.background, //Set Header color
            },
            headerTintColor: colors.black, //Set Header text color
            headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
            },
        }}>
        <Stack.Screen
            name="ResidentProfile"
            component={ProfileScreen}
        />
        <Stack.Screen
            name="ResidentEditProfile"
            component={ProfileEditScreen}
        />
        </Stack.Navigator>
    )
}
export {residentDashboard,residentRegisterVisitor,residentVisitRequest,residentReport,residentProfile}