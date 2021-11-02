import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationDrawerStructure } from './DrawerStructure';

import DashboardScreen from '../screen/guard/DashboardScreen'
import DeliveryServiceScreen from '../screen/guard/DeliveryServiceScreen'
import EmergencyServiceScreen from '../screen/guard/EmergencyServiceScreen'
import CurrentVisitorScreen from '../screen/guard/CurrentVisitorScreen'
import CheckInQRScreen from '../screen/guard/CheckInQRScreen'
import CheckInScreen from '../screen/guard/CheckInScreen'


const Stack = createStackNavigator();

function guardDashboard({ navigation }){
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
            name="GuardDashboard"
            component={DashboardScreen}
        />
        </Stack.Navigator>
    ) 
}
function guardDeliveryService({ navigation }){
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
            name="GuardDeliveryService"
            component={DeliveryServiceScreen}
        />
        </Stack.Navigator>
    ) 
}
function guardEmergencyService({ navigation }){
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
            name="GuardEmergencyService"
            component={EmergencyServiceScreen}
        />
        </Stack.Navigator>
    ) 
}
function guardCheckOut({ navigation }){
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
            name="GuardCurrentVisitorList"
            component={CurrentVisitorScreen}
        />
        </Stack.Navigator>
    ) 
}
function guardCheckIn({ navigation }){
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
            name="GuardQRScanner"
            component={CheckInQRScreen}
        />
        <Stack.Screen
            name="GuardCheckIn"
            component={CheckInScreen}
            options={{ headerShown: false }}
        />
        </Stack.Navigator>
    ) 
}

export {guardDashboard,guardDeliveryService,guardEmergencyService,guardCheckIn,guardCheckOut}