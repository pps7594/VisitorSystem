import React, { useState, useEffect, useContext } from 'react';
import {StyleSheet, View, ScrollView, FlatList} from 'react-native';

//import component
import Spacer from '../../components/Spacer';
import MyText from '../../components/MyText';
import {MyCard,MyCardList} from '../../components/MyCard';

import space from '../../config/space';

const DashboardScreen = ({navigation}) => {

    const [currentDate, setCurrentDate] = useState('');

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
    }, []);
    
    return <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <Spacer/>
                <MyText title={currentDate}  h4P style={styles.date}/>
                <MyCard iconName="clipboard-list" title="Visitor Visited Today" number="45" button="View Report"/>
                <Spacer/>
                <MyCard iconName="user-check" title="Pending Request" number="2" button="View Request"/>
                <Spacer/>
                <MyCardList iconName="list-ul" title="Visit Request List" button="View Visitor" time={`8.30 \n a.m.`} id="#VR-233" details="MR JM . House No 0001"/>
                <Spacer/>
                <MyCardList iconName="list-ul" title="Visit Request List" button="View Visitor" time={`8.30 \n a.m.`} id="#VR-233" details="MR JM . House No 0001"/>
                
                </ScrollView>
            </View>

};

 const styles = StyleSheet.create({
    date:{
        alignSelf: "flex-start",
    },
    container:{
        flex:1,
        padding:space.screenpadding,
    },
    
    
 });

 export default DashboardScreen;
