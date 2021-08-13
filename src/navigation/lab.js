import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationDrawerStructure } from './DrawerStructure';

import CountScreen from '../screen/lab/CountScreen';

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

export {labCount}