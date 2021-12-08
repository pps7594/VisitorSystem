import React, { useState, useEffect} from 'react';;
import {View, Text, ScrollView} from 'react-native';
import { useDispatch, useSelector } from "react-redux";

//import function
import adminFunction from '../../functions/adminFunction';
import {newdatetime} from '../../functions/newdatetime';
import {storeTempVisitRequestArray } from "../../redux/admindashboardslice";

//import component
import Spacer from '../../components/Spacer';
import MyFilter from '../../components/MyFilter';
import RequestApprovalCard from '../../components/RequestApprovalCard';
import { MyContainer,VisitorTypeCard } from '../../components/MyCard';

const VisitRequestScreen = ({navigation}) => {
    const dispatch = useDispatch();

    const {adminVisitRequest} = adminFunction();
    const visitRequestArray = useSelector((state) => state.admindashboardSlice.visitrequestarray); 

    const [input, setInput] = useState('');
    var image = require("../../assets/qrcode.png");
    // Temporary Array to store Filter result
    const tempArray = useSelector((state) => state.admindashboardSlice.tempvisitrequestarray); 

    // Helper Function
    const errCallback = ({msg}) => {
        // Some refinement should be done? Like header of this alert should not only be "alert"?
        alert(msg)
    }

    useEffect(() => {
        // Trigger the API call every time we navigate to this screen, as a Event listener
        navigation.addListener('focus', () => adminVisitRequest({errCallback}));
    }, []);

    // Const searchFunc
    const searchFunc = (input) => {
        if(input != ""){
            let searchTerm = input.toLowerCase();
            let filterResult = visitRequestArray.filter((x) => {
                let searchFlag = false;
                // We only can limit some field for search, candidates ("visitorPlateNum", "visitorTypeID = switch statement", "residentsAddress")
                let visitorType = visitorTypeSwitch(x.visitRequestObj.visitorType);
                let candidate = [x.visitRequestObj.visitRequestId,x.visitRequestObj.address,x.visitRequestObj.status,visitorType]
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
            dispatch(storeTempVisitRequestArray(visitRequestArray))
        }
    }

    const visitorTypeSwitch = (visitorTypeID) => {
        switch (visitorTypeID) {
            case "1": 
                return "visitor"
            case "2":
                return "residental usage"
            case "3":
                return "delivery"
            case "4":
                return "emergency service"
            case "5":
                return "long-term service"
            default:
                return null
        }
    }

    return (
        <>
                <MyContainer screencontainer  >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <MyFilter sourceFunc= {({timeframe}) => adminVisitRequest({errCallback,timeframe})} input={input} setInput={setInput} searchFunc={() => searchFunc(input)}/>
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
                tempArray ? 
                tempArray.map((item) => {
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
                            reason={item.visitRequestObj.reason}
                            status={item.visitRequestObj.status}
                            imageSource={{
                                uri: `http://192.168.0.194:8080/QR/${item.visitRequestObj.visitRequestId}.png`,
                            }}
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