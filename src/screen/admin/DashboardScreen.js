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

const DashboardScreen = ({navigation}) => {

    const {adminDashboard} = adminFunction();
    const [currentDate, setCurrentDate] = useState('');
    const admindashboardobj = useSelector((state) => state.admindashboardSlice.admindashboardobj); 
    // Helper Function
    const errCallback = ({msg}) => {
        // Some refinement should be done? Like header of this alert should not only be "alert"?
        alert(msg)
    }

    useEffect(() => {
        var week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        var mon = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
        var day  = week[new Date().getDay()];
        var date = new Date().getDate(); //Current Date
        var month = mon[new Date().getMonth()]; //Current Month
        var year = new Date().getFullYear(); //Current Year
        setCurrentDate(
            day+ ', ' + month + ' ' + date 
        );
        // Trigger the API call every time we navigate to this screen, as a Event listener
        navigation.addListener('focus', () => adminDashboard({errCallback}));
    }, []);
    
    return <MyContainer screencontainer>
                <ScrollView showsVerticalScrollIndicator={false}>
                <Spacer spacer/>
                <MyText title={currentDate}  h4P style={styles.date}/>
                <MyCard iconName="clipboard-list" title="Visitor Visited Today" number={admindashboardobj.todayVisitorCount} button="View Report"/>
                <Spacer spacer/>
                <MyCard iconName="user-check" title="Pending Request" number={admindashboardobj.pendingVisitorCount} button="View Request"/>
                <Spacer spacer/>
                <MyCardList iconName="list-ul" title="Visit Request List" button="View Visitor"  details={admindashboardobj.visitRequestList}/>
                </ScrollView>
            </MyContainer>
};

 const styles = StyleSheet.create({
    date:{
        alignSelf: "flex-start",
    }
 });

 export default DashboardScreen;
