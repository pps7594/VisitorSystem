//import library
import React from 'react';
import { StyleSheet ,Image, View, useWindowDimensions  } from 'react-native';
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

//import config
import colors from '../config/colors';

//import component
import { adminDashboard,adminRequestApproval,adminVisitRequest,adminReport,adminProfile,adminSystemSetting } from './admin';
import {residentDashboard,residentRegisterVisitor,residentVisitRequest,residentReport,residentProfile} from './resident';
import {guardDashboard,guardDeliveryService,guardEmergencyService,guardCheckIn,guardCheckOut} from './guard';

import SignInScreen from '../screen/SignInScreen';
import EntryScreen from '../screen/EntryScreen';
import ExitScreen from '../screen/ExitScreen';

import { labCount, labPhoto, labScan, labShow, labRequest, labRegister, labReport, labAdminProfile, labResidentProfile, labDefaultSetting} from './lab';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MyIcon from '../components/MyIcon';
import MyText from '../components/MyText';
import { MyContainer } from '../components/MyCard';
import Spacer from '../components/Spacer';

//import font type
import AppLoading from 'expo-app-loading'; //on expo SDK 40
import {
    useFonts,
    Poppins_600SemiBold,
    Poppins_400Regular
  } from '@expo-google-fonts/poppins';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomDrawerContent(props) {
    let [fontsLoaded] = useFonts({
        Poppins_600SemiBold,
        Poppins_400Regular
    });
    const credential = useSelector((state) => state.credential.userWithAddress);
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
    return (
        <DrawerContentScrollView {...props}>
            <MyContainer conCol alignstart style={{marginLeft:10}}>
                <Image 
                    style={{width:50,height:50,}}
                    source={require("../assets/logo.png")}/>
                <MyText title="JMJ HILLS" black h4P/>
            </MyContainer>
            <MyContainer conLeft style={{marginRight:10}}>
                {credential.userObj.userRole==="A"?<MyText title="AM-JMJS" black h5P/>:null}
                {credential.userObj.userRole==="R"?<MyText title="RS-JMJS" black h5P/>:null}
                {credential.userObj.userRole==="G"?<MyText title="GD-JMJS" black h5P/>:null}
                <MyText title={credential.userObj.userName} black pP4/>
            </MyContainer>
            <Spacer spacer/>
            <View style={{backgroundColor:colors.black,height:1,width:"100%"}} />
            <Spacer space/>
        <DrawerItemList {...props} />
        {credential.userObj.userRole=="G" ?
        <MyContainer conRow style={{marginTop:30}}>
            <MyText grey title="JMJ HILLS © 2020 All Rights Reserved" pP4/>
        </MyContainer>:
        <MyContainer conRow >
        <MyText grey title="JMJ HILLS © 2020 All Rights Reserved" pP4/>
    </MyContainer>}
        </DrawerContentScrollView>
    );
    }
}

function MobileStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Entry" options={{ headerShown: false }} component={EntryScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Admin" component={AdminDrawer} options={{ headerShown: false }}/>
            <Stack.Screen name="Resident" component={ResidentDrawer} options={{ headerShown: false }}/>
            <Stack.Screen name="Guard" component={GuardDrawer} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

function AdminDrawer({navigation}){
    const dimensions = useWindowDimensions();
    return (
        <Drawer.Navigator 
            drawerContentOptions={{
                activeTintColor: colors.mainColor,
                inactiveTintColor: colors.black,
                itemStyle: { marginVertical: 5 },
                backgroundColor: colors.background,
                labelStyle:{
                    fontSize: 15, 
                    fontFamily:"Poppins_400Regular",
                },
            }}
            drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
            // Here should have some props for us to design the header for the navi bar
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen 
                name="Admin Dashboard" 
                component={adminDashboard} 
                options={{
                    drawerIcon: ({ focused, color }) => <MyIcon MC iconName="view-dashboard-outline" fontSize25 style={{color:color}}/>,
                    drawerLabel:({ focused, color }) => <MyText title="Admin Dashboard" style={{color:color,fontFamily:focused?"Poppins_600SemiBold":"Poppins_400Regular"}} h4P/>
                }}          
            />
            <Drawer.Screen 
                name="Request Approval" 
                component={adminRequestApproval} 
                options={{
                    drawerIcon: ({ focused, color, size }) => <MyIcon FA iconName="user-check" fontSize20 style={{color:color}}/>,
                    drawerLabel:({ focused, color }) => <MyText title="Request Approval" style={{color:color,fontFamily:focused?"Poppins_600SemiBold":"Poppins_400Regular"}} h4P/>
                }}  
            />
            <Drawer.Screen 
                name="Visit Request List"
                component={adminVisitRequest} 
                options={{
                    drawerIcon: ({ focused, color, size }) => <MyIcon FA iconName="list-ul" fontSize20 style={{color:color}}/>,
                    drawerLabel:({ focused, color }) => <MyText title="Visit Request List" style={{color:color,fontFamily:focused?"Poppins_600SemiBold":"Poppins_400Regular"}} h4P/>
                }}
            />
            <Drawer.Screen 
                name="Report" 
                component={adminReport} 
                options={{
                    drawerIcon: ({ focused, color, size }) => <MyIcon FA iconName="clipboard-list" fontSize25 style={{color:color}}/>,
                    drawerLabel:({ focused, color }) => <MyText title="Report" style={{color:color,fontFamily:focused?"Poppins_600SemiBold":"Poppins_400Regular"}} h4P/>
                }}
            />
            <Drawer.Screen 
                name="Profile" 
                component={adminProfile} 
                options={{
                    drawerIcon: ({ focused, color, size }) => <MyIcon FA iconName="user-circle" fontSize20 style={{color:color}}/>,
                    drawerLabel:({ focused, color }) => <MyText title="Profile" style={{color:color,fontFamily:focused?"Poppins_600SemiBold":"Poppins_400Regular"}} h4P/>
                }}
            />
            <Drawer.Screen 
                name="System Setting" 
                component={adminSystemSetting} 
                options={{
                    drawerIcon: ({ focused, color, size }) => <MyIcon ION iconName="settings-outline" fontSize20 style={{color:color}}/>,
                    drawerLabel:({ focused, color }) => <MyText title="System Setting" style={{color:color,fontFamily:focused?"Poppins_600SemiBold":"Poppins_400Regular"}} h4P/>
                }}
            /> 
            <Drawer.Screen 
                name="Logout" 
                component={ExitScreen} 
                options={{
                    drawerIcon: ({ focused, color, size }) => <MyIcon ION iconName="log-out-outline"fontSize20 style={{color:color,marginTop:30}}/>,
                    drawerLabel:({ focused, color }) => <MyText title="Logout" style={{color:color,fontFamily:focused?"Poppins_600SemiBold":"Poppins_400Regular",marginTop:30}} h4P/> 
                }}  
            /> 
        </Drawer.Navigator>
    ) 
}

function ResidentDrawer({navigation}){
    const dimensions = useWindowDimensions();
    return (
        <Drawer.Navigator 
            drawerContentOptions={{
                activeTintColor: colors.mainColor,
                inactiveTintColor: colors.black,
                itemStyle: { marginVertical: 5 },
                backgroundColor: colors.background,
                labelStyle:{
                    fontSize: 15, 
                    fontFamily:"Poppins_400Regular",
                },
            }}
            drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen 
                name="My Dashboard" 
                component={residentDashboard} 
                options={{
                    drawerIcon: ({ focused, color }) => <MyIcon MC iconName="view-dashboard-outline" fontSize25 style={{color:color}}/>,
                    drawerLabel:({ focused, color }) => <MyText title="My Dashboard" style={{color:color,fontFamily:focused?"Poppins_600SemiBold":"Poppins_400Regular"}} h4P/>
                }}          
            />
            <Drawer.Screen 
                name="Request Visitor" 
                component={residentRegisterVisitor} 
                options={{
                    drawerIcon: ({ focused, color }) => <MyIcon FA iconName="user-plus" fontSize20 style={{color:color}}/>,
                    drawerLabel:({ focused, color }) => <MyText title="Request Visitor" style={{color:color,fontFamily:focused?"Poppins_600SemiBold":"Poppins_400Regular"}} h4P/>
                }}          
            />
            <Drawer.Screen 
                name="Visit Request List" 
                component={residentVisitRequest} 
                options={{
                    drawerIcon: ({ focused, color, size }) => <MyIcon FA iconName="list-ul" fontSize20 style={{color:color}}/>,
                    drawerLabel:({ focused, color }) => <MyText title="Visit Request List" style={{color:color,fontFamily:focused?"Poppins_600SemiBold":"Poppins_400Regular"}} h4P/>
                }}          
            />
            <Drawer.Screen 
                name="Report" 
                component={residentReport} 
                options={{
                    drawerIcon: ({ focused, color, size }) => <MyIcon FA iconName="clipboard-list" fontSize25 style={{color:color}}/>,
                    drawerLabel:({ focused, color }) => <MyText title="Report" style={{color:color,fontFamily:focused?"Poppins_600SemiBold":"Poppins_400Regular"}} h4P/>
                }}
            />
            <Drawer.Screen 
                name="Profile" 
                component={residentProfile} 
                options={{
                    drawerIcon: ({ focused, color, size }) => <MyIcon FA iconName="user-circle" fontSize20 style={{color:color}}/>,
                    drawerLabel:({ focused, color }) => <MyText title="Profile" style={{color:color,fontFamily:focused?"Poppins_600SemiBold":"Poppins_400Regular"}} h4P/>
                }}
            />
            <Drawer.Screen 
                name="Logout" 
                component={ExitScreen} 
                options={{
                    drawerIcon: ({ focused, color, size }) => <MyIcon ION iconName="log-out-outline"fontSize20 style={{color:color,marginTop:30}}/>,
                    drawerLabel:({ focused, color }) => <MyText title="Logout" style={{color:color,fontFamily:focused?"Poppins_600SemiBold":"Poppins_400Regular",marginTop:30}} h4P/> 
                }}  
            />  
        </Drawer.Navigator>
    )
}

function GuardDrawer({navigation}){
    const dimensions = useWindowDimensions();
    return (
        <Drawer.Navigator 
            drawerContentOptions={{
                activeTintColor: colors.mainColor,
                inactiveTintColor: colors.black,
                itemStyle: { marginVertical: 5 },
                backgroundColor: colors.background,
                labelStyle:{
                    fontSize: 15, 
                    fontFamily:"Poppins_400Regular",
                },
            }}
            drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen 
                name="My Dashboard" 
                component={guardDashboard} 
                options={{
                    drawerIcon: ({ focused, color }) => <MyIcon MC iconName="view-dashboard-outline" fontSize25 style={{color:color}}/>,
                    drawerLabel:({ focused, color }) => <MyText title="My Dashboard" style={{color:color,fontFamily:focused?"Poppins_600SemiBold":"Poppins_400Regular"}} h4P/>
                }}          
            />
            <Drawer.Screen 
                name="Register Delivery Service" 
                component={residentProfile} 
                options={{
                    drawerIcon: ({ focused, color, size }) => <MyIcon MC iconName="truck-delivery" fontSize25 style={{color:color}}/>,
                    drawerLabel:({ focused, color }) => <MyText title="Register Delivery Service" style={{color:color,fontFamily:focused?"Poppins_600SemiBold":"Poppins_400Regular"}} h4P/>
                }}
            />
            <Drawer.Screen 
                name="Register Emergency" 
                component={guardEmergencyService} 
                options={{
                    drawerIcon: ({ focused, color, size }) => <MyIcon FA iconName="ambulance" fontSize20 style={{color:color}}/>,
                    drawerLabel:({ focused, color }) => <MyText title="Register Emergency" style={{color:color,fontFamily:focused?"Poppins_600SemiBold":"Poppins_400Regular"}} h4P/>
                }}
            />
            <Drawer.Screen 
                name="Current Visitor List" 
                component={guardCheckOut} 
                options={{
                    drawerIcon: ({ focused, color, size }) => <MyIcon FA iconName="list-ul" fontSize20 style={{color:color}}/>,
                    drawerLabel:({ focused, color }) => <MyText title="Current Visitor List" style={{color:color,fontFamily:focused?"Poppins_600SemiBold":"Poppins_400Regular"}} h4P/>
                }}
            />
            <Drawer.Screen 
                name="Visitor Check-in" 
                component={guardCheckIn} 
                options={{
                    drawerIcon: ({ focused, color, size }) => <MyIcon ION iconName="log-in-outline" fontSize25 style={{color:color}}/>,
                    drawerLabel:({ focused, color }) => <MyText title="Visitor Check-in" style={{color:color,fontFamily:focused?"Poppins_600SemiBold":"Poppins_400Regular"}} h4P/>
                }}
            />
            <Drawer.Screen 
                name="Visitor Check-out" 
                component={guardCheckOut} 
                options={{
                    drawerIcon: ({ focused, color, size }) => <MyIcon ION iconName="log-out-outline" fontSize25 style={{color:color}}/>,
                    drawerLabel:({ focused, color }) => <MyText title="Visitor Check-out" style={{color:color,fontFamily:focused?"Poppins_600SemiBold":"Poppins_400Regular"}} h4P/>
                }}
            />
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
                <Drawer.Screen name="Lab - DefaultSetting" component={labDefaultSetting} />
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