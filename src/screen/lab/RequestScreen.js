import React, { useState, useEffect} from 'react';;
import {StyleSheet, ScrollView} from 'react-native';

//import function
import adminFunction from '../../functions/adminFunction';

//import component
import Spacer from '../../components/Spacer';
import MyFilter from '../../components/MyFilter';
import RequestApprovalCard from '../../components/RequestApprovalCard';
import { MyContainer ,VisitorTypeCard} from '../../components/MyCard';

const RequestScreen = ({navigation}) => {

    const [input, setInput] = useState('');
    var image = require("../../assets/qrcode.png");

    return <MyContainer screencontainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <MyFilter input={input} setInput={setInput}/>
                <Spacer spacer/>
                <VisitorTypeCard
                    title1="Visitor"
                    title2="Residential Usage"
                    title3="Delivery"
                    title4="Emergency Service"
                    title5="Long-Term Service"
                />
                <Spacer spacer/>
                <RequestApprovalCard 
                    visitorType="1"
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
                    visitorList={ [
                        {
                          "peopleCount": 2,
                          "vehicleTypeNotes": "hihi",
                          "visitRequestCarID": 1000000157,
                          "visitRequestID": "10121",
                          "visitorName": "secondcar",
                          "visitorPlateNum": "C11",
                          "visitorTel": "0123456",
                          "visitorVehicleType": "ABC",
                        },
                        {
                          "peopleCount": 1,
                          "vehicleTypeNotes": "",
                          "visitRequestCarID": 1000000158,
                          "visitRequestID": "10121",
                          "visitorName": "T",
                          "visitorPlateNum": "A123",
                          "visitorTel": "019191991",
                          "visitorVehicleType": "AAA",
                        },
                      ]
                  }
                />
            </ScrollView>
        </MyContainer>
};

 const styles = StyleSheet.create({
    date:{
        alignSelf: "flex-start",
    }
 });

 export default RequestScreen;