import React, { useState, useEffect} from 'react';;
import {View, Text, ScrollView} from 'react-native';
import { useDispatch, useSelector } from "react-redux";

//import function
import adminFunction from '../../functions/adminFunction';

//import component
import Spacer from '../../components/Spacer';
import MyFilter from '../../components/MyFilter';
import RequestApprovalCard from '../../components/RequestApprovalCard';
import { MyContainer,VisitorTypeCard } from '../../components/MyCard';

const VisitRequestScreen = ({navigation}) => {
    const {adminVisitRequest} = adminFunction();
    const visitRequestArray = useSelector((state) => state.admindashboardSlice.visitrequestarray); 

    // Helper Function
    const errCallback = ({msg}) => {
        // Some refinement should be done? Like header of this alert should not only be "alert"?
        alert(msg)
    }

    useEffect(() => {
        // Trigger the API call every time we navigate to this screen, as a Event listener
        navigation.addListener('focus', () => adminVisitRequest({errCallback}));
    }, []);

    const [input, setInput] = useState('');
    var image = require("../../assets/qrcode.png");

    return (
        <>
                <MyContainer screencontainer  >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <MyFilter sourceFunc= {({timeframe}) => adminVisitRequest({errCallback,timeframe})} input={input} setInput={setInput}/>
                        <Spacer spacer/>
                        <VisitorTypeCard
                            title1="Visitor"
                            title2="Residential Usage"
                            title3="Delivery"
                            title4="Emergency Service"
                            title5="Long-Term Service"
                        />
                        <Spacer spacer/>
            { 
                visitRequestArray ? 
                visitRequestArray.map((item) => {
                    const arrivedatetime = newdatetime(item.visitRequestObj.expectedArriveDateTime)
                    const leavingdatetime = newdatetime(item.visitRequestObj.expectedLeavingDateTime)
                    const nameWithAddress = item.visitRequestObj.address.split(";")

                    return <View key={item.visitRequestObj.visitRequestId}>
                    {/* Use for the tagging for the status, REMEMBER WE STILL LACK OF QR Image */}
                        <RequestApprovalCard 
                            visitorType={item.visitRequestObj.visitorType}
                            id={"#VR-" + item.visitRequestObj.visitRequestId}
                            details={nameWithAddress[0]}
                            address={nameWithAddress[1]}
                            walkin={item.visitRequestObj.walkInVisitor}
                            arriveDate={arrivedatetime[0]}
                            arriveTime={arrivedatetime[1]}
                            departDate={leavingdatetime[0]}
                            departTime={leavingdatetime[1]}
                            visitorList={item.visitRequestCarList}
                            additionalNotes={item.visitRequestObj.additionalNotes}
                            status={item.visitRequestObj.status}
                            imageSource={require("../../assets/qrcode.png")}
                        />
                        <Spacer spacer/>
                    </View>
                    
                    
                }): null
            }                
                    </ScrollView>
                </MyContainer>
        </>
    )
};

const newdatetime = (params) => {
    const datetime = new Date (Date.parse(params));
    var ampm = datetime.getHours() >= 12 ? 'P.M.' : 'A.M.';
    const time = datetime.toTimeString().substring(0,5) + ' ' + ampm;
                        
    var mon = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
    const month = mon[datetime.getMonth()];
    const year = datetime.getFullYear();
    const day = datetime.getDate()-1;
    const lastnum = day.toString().substring(-1);
    var suffix ='';
    if(lastnum==1){
        suffix = 'st'
    }
    else if(lastnum==2){
        suffix = 'nd'
    }
    else if(lastnum==3){
        suffix = 'rd'
    }
    else if(lastnum==0 || lastnum>=4){
        suffix = 'th'
    }
    const date = month + ' '+ day + suffix + ', ' + year

    return [date,time]     
 }

export default VisitRequestScreen;