//import library
import React, { useState, useEffect} from 'react';
import {StyleSheet,ScrollView} from 'react-native';
import { useDispatch, useSelector } from "react-redux";

//import component
import Spacer from '../../components/Spacer';
import MyText from '../../components/MyText';
import {MyContainer,MyCard,MyCardList} from '../../components/MyCard';

//import function
import adminFunction from '../../functions/adminFunction';
import { currentdate } from '../../functions/newdatetime';

const DashboardScreen = ({navigation}) => {

    const {adminDashboard} = adminFunction();
    const admindashboardobj = useSelector((state) => state.admindashboardSlice.admindashboardobj); 
    // Helper Function
    const errCallback = ({msg}) => {
        // Some refinement should be done? Like header of this alert should not only be "alert"?
        alert(msg)
    }

    useEffect(() => {
        
        // Trigger the API call every time we navigate to this screen, as a Event listener
        navigation.addListener('focus', () => adminDashboard({errCallback}));
    }, []);
    
    return <MyContainer screencontainer>
                <ScrollView showsVerticalScrollIndicator={false}>
                <Spacer spacer/>
                <MyText title={currentdate()}  h4P style={styles.date}/>
                <MyCard iconName="clipboard-list" title="Visitor Visited Today" number={admindashboardobj.todayVisitorCount} button="View Report" func={() => navigation.navigate('Report')}/>
                <Spacer spacer/>
                <MyCard iconName="user-check" title="Pending Request" number={admindashboardobj.pendingVisitorCount} button="View Request" func={() => navigation.navigate('Request Approval')}/>
                <Spacer spacer/>
                <MyCardList iconName="list-ul" title="Visit Request List" button="View Visitor"  details={admindashboardobj.visitRequestList} func={() => navigation.navigate('Visit Request List')}/>
                </ScrollView>
            </MyContainer>
};

 const styles = StyleSheet.create({
    date:{
        alignSelf: "flex-start",
    }
 });

 export default DashboardScreen;
