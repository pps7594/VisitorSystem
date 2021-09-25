//import library
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { useDispatch, useSelector } from "react-redux";

//import component
import { adminDashboard,adminRequestApproval,adminVisitRequest,adminReport,adminProfile,adminSystemSetting } from './admin';
import {residentDashboard,residentRegisterVisitor,residentVisitRequest,residentReport,residentProfile} from './resident';
import {guardDashboard,guardDeliveryService,guardEmergencyService,guardCheckIn,guardCheckOut} from './guard';

import SignInScreen from '../screen/SignInScreen';
import EntryScreen from '../screen/EntryScreen';
import ExitScreen from '../screen/ExitScreen';

import { labCount, labPhoto, labScan, labShow, labRequest, labRegister, labReport, labAdminProfile, labResidentProfile} from './lab';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        {/* <DrawerItem 
                icon={({ focused, color, size }) => <SimpleLineIcons color={color} size={size} name={'logout'} /> }
                style={styles.spacer} 
                label="Logout" 
            />     */}
        </DrawerContentScrollView>
    );
}

function MobileStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Entry" options={{ headerShown: false }} component={EntryScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen}/>
            <Stack.Screen name="Admin" component={AdminDrawer} options={{ headerShown: false }}/>
            <Stack.Screen name="Resident" component={ResidentDrawer} options={{ headerShown: false }}/>
            <Stack.Screen name="Guard" component={GuardDrawer} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

function AdminDrawer({navigation}){
    const credential = useSelector((state) => state.credential.userWithAddress);
    return (
        <Drawer.Navigator 
            drawerContentOptions={{
                activeTintColor: '#e91e63',
                itemStyle: { marginVertical: 5 },
            }}
            // Here should have some props for us to design the header for the navi bar
            drawerContent={props => <CustomDrawerContent {...props}/>}>
            <Drawer.Screen 
                name="Admin Dashboard" 
                component={adminDashboard} 
                options={{
                    drawerIcon: ({ focused, color, size }) => <SimpleLineIcons color={color} size={size} name={'social-dropbox'} />
                }}          
            />
            <Drawer.Screen name="Request Approval" component={adminRequestApproval} />
            <Drawer.Screen name="Visit Request List" component={adminVisitRequest} />
            <Drawer.Screen name="Report" component={adminReport} />
            <Drawer.Screen name="Profile" component={adminProfile} />
            <Drawer.Screen name="System Setting" component={adminSystemSetting} /> 
            <Drawer.Screen 
                name="Logout" 
                component={ExitScreen} 
                options={{
                    drawerIcon: ({ focused, color, size }) => <SimpleLineIcons color={color} size={size} name={'logout'} />
                }}          
            />   
        </Drawer.Navigator>
    ) 
}

function ResidentDrawer({navigation}){
    return (
        <Drawer.Navigator 
            drawerContentOptions={{
                activeTintColor: '#e91e63',
                itemStyle: { marginVertical: 5 },
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen 
                name="My Dashboard" 
                component={residentDashboard} 
                options={{
                    drawerIcon: ({ focused, color, size }) => <SimpleLineIcons color={color} size={size} name={'social-dropbox'} />
                }}          
            />
            <Drawer.Screen name="Request Visitor" component={residentRegisterVisitor} />
            <Drawer.Screen name="Visit Request List" component={residentVisitRequest} />
            <Drawer.Screen name="Report" component={residentReport} />
            <Drawer.Screen name="Profile" component={residentProfile} />
            <Drawer.Screen 
                name="Logout" 
                component={ExitScreen} 
                options={{
                    drawerIcon: ({ focused, color, size }) => <SimpleLineIcons color={color} size={size} name={'logout'} />
                }}          
            />  
        </Drawer.Navigator>
    )
}

function GuardDrawer({navigation}){
    return (
        <Drawer.Navigator 
            drawerContentOptions={{
                activeTintColor: '#e91e63',
                itemStyle: { marginVertical: 5 },
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen 
                name="My Dashboard" 
                component={guardDashboard} 
                options={{
                    drawerIcon: ({ focused, color, size }) => <SimpleLineIcons color={color} size={size} name={'social-dropbox'} />
                }}          
            />
            <Drawer.Screen name="Register Delivery Service" component={guardDeliveryService} />
            <Drawer.Screen name="Register Emergency" component={guardEmergencyService} />
            <Drawer.Screen name="Current Visitor List" component={guardCheckOut} />
            <Drawer.Screen name="Visitor Check-in" component={guardCheckIn} />
            <Drawer.Screen name="Visitor Check-out" component={guardCheckOut} />
            <Drawer.Screen 
                name="Logout" 
                component={ExitScreen} 
                options={{
                    drawerIcon: ({ focused, color, size }) => <SimpleLineIcons color={color} size={size} name={'logout'} />
                }}          
            />  
        </Drawer.Navigator>
    )
}

// Sample Navigation to switch lab and prod
const isLab = false;

const MobileNavi = () => {
    return(
        <NavigationContainer>
            {!isLab  &&
                <MobileStack/>
            }
            {isLab && 
            <Drawer.Navigator 
                drawerContentOptions={{
                    activeTintColor: '#e91e63',
                    itemStyle: { marginVertical: 5 },
                }}
                drawerContent={props => <CustomDrawerContent {...props} />}>
                <Drawer.Screen 
                    name="Redux Lab - Count" 
                    component={labCount} 
                    options={{
                        drawerIcon: ({ focused, color, size }) => <SimpleLineIcons color={color} size={size} name={'social-dropbox'} />
                    }}          
                />
                <Drawer.Screen name="Lab - Expo Photo" component={labPhoto} />
                <Drawer.Screen name="Lab - Show Photo" component={labShow} />
                <Drawer.Screen name="Lab - Scan" component={labScan} />
                <Drawer.Screen name="Lab - Request" component={labRequest} />
                <Drawer.Screen name="Lab - Register" component={labRegister} />
                <Drawer.Screen name="Lab - Report" component={labReport} />
                <Drawer.Screen name="Lab - AdminProfile" component={labAdminProfile} />
                <Drawer.Screen name="Lab - ResidentProfile" component={labResidentProfile} />
            </Drawer.Navigator>
            }
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    spacer:{
      marginTop:20
    }
  });


export {MobileNavi};