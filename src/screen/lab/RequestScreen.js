import React, { useState, useEffect, useContext } from 'react';;
import {View, StyleSheet, ScrollView, FlatList} from 'react-native';

//import component
import Spacer from '../../components/Spacer';
import MyFilter from '../../components/MyFilter';
import VisitorTypeCard from '../../components/VisitorTypeCard';
import RequestApprovalCard from '../../components/RequestApprovalCard';

import space from '../../config/space';

const RequestScreen = ({navigation}) => {

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
    


      const [input, setInput] = useState('');
      var image = require("../../assets/qrcode.png");
    return <View style={styles.container}>
                <MyFilter input={input} setInput={setInput}/>
                <Spacer/>
                <VisitorTypeCard
                    iconName1="user-check"
                    title1="Visitor"
                    iconName2="user-check"
                    title2="Residential Usage"
                    iconName3="user-check"
                    title3="Delivery"
                    iconName4="user-check"
                    title4="Emergency Service"
                    iconName5="user-check"
                    title5="Long-Term Service"
                />
                <Spacer/>
                <RequestApprovalCard 
                    iconName="user-check" 
                    id="#VR-233" 
                    details="Mohamed Shafyul" 
                    address="1, Jalan Abc 1/1"
                    walkin
                    approve
                    reject
                    pending
                    imageSource={image}
                    arriveDate="Oct 31st, 2020"
                    arriveTime="08:29 AM"
                    departDate="Nov 1st, 2020"
                    departTime="08:29 AM"
                />
                <Spacer/>
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

 export default RequestScreen;