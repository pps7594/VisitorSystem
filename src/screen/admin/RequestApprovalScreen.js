import React, { useState, useEffect} from 'react';;
import {View, ScrollView} from 'react-native';
import { useDispatch, useSelector } from "react-redux";

//import function
import adminFunction from '../../functions/adminFunction';
import newdatetime from '../../functions/newdatetime';

//import component
import Spacer from '../../components/Spacer';
import MyFilter from '../../components/MyFilter';
import RequestApprovalCard from '../../components/RequestApprovalCard';
import { MyContainer,VisitorTypeCard } from '../../components/MyCard';

const RequestApprovalScreen = ({navigation}) => {

    const {adminRequestApproval, postApproval} = adminFunction();
    const requestApprovalArray = useSelector((state) => state.admindashboardSlice.requestapprovalarray); 

    // Helper Function
    const errCallback = ({msg}) => {
        // Some refinement should be done? Like header of this alert should not only be "alert"?
        alert(msg)
    }

    useEffect(() => {
        // Trigger the API call every time we navigate to this screen, as a Event listener
        navigation.addListener('focus', () => adminRequestApproval({errCallback}));
    }, []);

    const [input, setInput] = useState('');
    var image = require("../../assets/qrcode.png");

    return (
        <>
                <MyContainer screencontainer  >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <MyFilter sourceFunc= {({timeframe}) => adminRequestApproval({errCallback,timeframe})} input={input} setInput={setInput}/>
                        <Spacer spacer/>
                        <VisitorTypeCard
                            title1="Visitor"
                            title2="Residential Usage"
                        />
                        <Spacer spacer/>
            { 
                requestApprovalArray ? 
                requestApprovalArray.map((item) => {
                    const arrivedatetime = newdatetime(item.visitRequestObj.expectedArriveDateTime)
                    const leavingdatetime = newdatetime(item.visitRequestObj.expectedLeavingDateTime)
                    const nameWithAddress = item.visitRequestObj.address.split(";")
                    const userInputObj = item.visitRequestObj
                     

                    return <View key={item.visitRequestObj.visitRequestId}>
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
                            approval
                            approvalFunc={() => postApproval(userInputObj,"Approved",errCallback)}
                            rejectFunc={() => postApproval(userInputObj,"Reject",errCallback)}
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


export default RequestApprovalScreen;
