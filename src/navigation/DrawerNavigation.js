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

import { adminDashboard,adminRequestApproval,adminVisitRequest,adminReport,adminProfile,adminSystemSetting } from './admin';
import {residentDashboard,residentRegisterVisitor,residentVisitRequest,residentReport,residentProfile} from './resident';
import {guardDashboard,guardDeliveryService,guardEmergencyService,guardCheckIn,guardCheckOut} from './guard';

import SignInScreen from '../screen/SignInScreen';

import { labCount,labPhoto, labScan, labShow } from './lab';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem 
        icon={({ focused, color, size }) => <SimpleLineIcons color={color} size={size} name={'logout'} /> }
        style={styles.spacer} 
        label="Logout" 
      />
    </DrawerContentScrollView>
  );
}

function SignInStack({navigation}){
    console.log(navigation)
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignInScreen}/>
        </Stack.Navigator>
    )
}

const MobileNavi = ({isAuth,role}) => {
    return(
        <NavigationContainer>
            {isAuth && role == 't' &&
                <SignInStack/>
            }
            {isAuth && (role == 'A' || role == 'H') &&
            <Drawer.Navigator 
                drawerContentOptions={{
                    activeTintColor: '#e91e63',
                    itemStyle: { marginVertical: 5 },
                }}
                drawerContent={props => <CustomDrawerContent {...props} />}>
                <Drawer.Screen 
                    name="My Dashboard" 
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
            </Drawer.Navigator>
            }
            {isAuth && role == 'R' && 
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
            </Drawer.Navigator>
            }
            {isAuth && role == 'G' && 
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
            </Drawer.Navigator>
            }
            {isAuth && role == 'LAB' && 
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