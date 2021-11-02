//import library
import React, { useState, useEffect} from 'react';;
import {View, Text, ScrollView} from 'react-native';
import { useDispatch, useSelector } from "react-redux";

//import function
import residentFunction from '../../functions/residentFunction';
import {newdatetime} from '../../functions/newdatetime';
import {storeTempVisitRequestArray } from "../../redux/residentslice";

//import component
import Spacer from '../../components/Spacer';
import MyFilter from '../../components/MyFilter';
import RequestApprovalCard from '../../components/RequestApprovalCard';
import { MyContainer,VisitorTypeCard } from '../../components/MyCard';

const VisitRequestScreen = ({navigation}) => {
    const dispatch = useDispatch();

    const {residentVisitRequest} = residentFunction();
    const [currentDate, setCurrentDate] = useState('');

    const residentVisitRequestArray = useSelector((state) => state.resident.residentvisitrequestarray); 
    const userWithAddress = useSelector((state) => state.credential.userWithAddress); 

    // Helper Function
    const errCallback = ({msg}) => {
        // Some refinement should be done? Like header of this alert should not only be "alert"?
        alert(msg)
    }

    useEffect(() => {
        // Trigger the API call every time we navigate to this screen, as a Event listener
        navigation.addListener('focus', () => residentVisitRequest({errCallback}));
    }, []);

    const [input, setInput] = useState('');

    // Temporary Array to store Filter result
    const tempArray = useSelector((state) => state.resident.tempvisitrequestarray); 

    // Const searchFunc
    const searchFunc = (input) => {
        if(input != ""){
            let searchTerm = input.toLowerCase();
            let filterResult = residentVisitRequestArray.filter((x) => {
                let searchFlag = false;
                // We only can limit some field for search, candidates ("visitorPlateNum", "visitorTypeID = switch statement", "status")
                let visitorType = visitorTypeSwitch(x.visitRequestObj.visitorType);
                let candidate = [x.visitRequestObj.visitRequestId,x.visitRequestObj.status,visitorType]
                candidate.forEach(val => {
                    if(val != null) {
                        if(val.toLowerCase().includes(searchTerm)) {
                            searchFlag = true;
                            return;
                        }
                    } 
                });
                if(searchFlag) return x;
            });
            dispatch(storeTempVisitRequestArray(filterResult))
            
        }
        else{
            dispatch(storeTempVisitRequestArray(residentVisitRequestArray))
        }
    }

    const visitorTypeSwitch = (visitorTypeID) => {
        switch (visitorTypeID) {
            case "1": 
                return "visitor"
            case "2":
                return "residental usage"
            default:
                return null
        }
    }

    return (
        <>
                <MyContainer screencontainer  >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <MyFilter sourceFunc= {({timeframe}) => residentVisitRequest({errCallback,timeframe})} input={input} setInput={setInput} searchFunc={() => searchFunc(input)}/>
                        <Spacer spacer/>
                        <VisitorTypeCard
                            title1="Visitor"
                            title2="Residential Usage"
                        />
                        <Spacer spacer/>
            { 
                residentVisitRequestArray ? 
                residentVisitRequestArray.map((item) => {
                    const arrivedatetime = newdatetime(item.visitRequestObj.expectedArriveDateTime)
                    const leavingdatetime = newdatetime(item.visitRequestObj.expectedLeavingDateTime)

                    return <View key={item.visitRequestObj.visitRequestId}>
                    {/* Use for the tagging for the status, REMEMBER WE STILL LACK OF QR Image */}
                        <RequestApprovalCard 
                            visitorType={item.visitRequestObj.visitorType}
                            id={"#VR-" + item.visitRequestObj.visitRequestId}
                            details={userWithAddress.userObj.userName}
                            address={item.visitRequestObj.address}
                            walkin={item.visitRequestObj.walkInVisitor}
                            arriveDate={arrivedatetime[0]}
                            arriveTime={arrivedatetime[1]}
                            departDate={leavingdatetime[0]}
                            departTime={leavingdatetime[1]}
                            visitorList={item.visitRequestCarList}
                            additionalNotes={item.visitRequestObj.additionalNotes}
                            reason={item.visitRequestObj.reason}
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

export default VisitRequestScreen;
