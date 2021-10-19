import React, { useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import { useDispatch, useSelector } from "react-redux";

//import function
import adminFunction from '../../functions/adminFunction';
import {newdatetime} from '../../functions/newdatetime';
import { storeTempRequestApprovalArray } from "../../redux/admindashboardslice";

//import component
import Spacer from '../../components/Spacer';
import MyFilter from '../../components/MyFilter';
import RequestApprovalCard from '../../components/RequestApprovalCard';
import { MyContainer,VisitorTypeCard } from '../../components/MyCard';

const RequestApprovalScreen = ({navigation}) => {
    const dispatch = useDispatch();

    const {adminRequestApproval, postApproval} = adminFunction();
    const requestApprovalArray = useSelector((state) => state.admindashboardSlice.requestapprovalarray); 

    const [input, setInput] = useState('');
    var image = require("../../assets/qrcode.png");
    // Temporary Array to store Filter result
    const tempArray = useSelector((state) => state.admindashboardSlice.temprequestapprovalarray); 

    // Helper Function
    const errCallback = ({msg}) => {
        // Some refinement should be done? Like header of this alert should not only be "alert"?
        alert(msg)
    }

    useEffect(() => {
        // Trigger the API call every time we navigate to this screen, as a Event listener
        navigation.addListener('focus', () => adminRequestApproval({errCallback}));
    }, []);

    // Const searchFunc
    const searchFunc = (input) => {
        if(input != ""){
            let searchTerm = input.toLowerCase();
            let filterResult = requestApprovalArray.filter((x) => {
                let searchFlag = false;
                // We only can limit some field for search, candidates ("visitorPlateNum", "visitorTypeID = switch statement", "residentsAddress")
                let visitorType = visitorTypeSwitch(x.visitorTypeID);
                
                let candidate = [x.visitRequestObj.visitRequestId,x.visitRequestObj.address,visitorType]
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
            dispatch(storeTempRequestApprovalArray(filterResult))
            
        }
        else{
            dispatch(storeTempRequestApprovalArray(requestApprovalArray))
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
                        <MyFilter sourceFunc= {({timeframe}) => adminRequestApproval({errCallback,timeframe})} input={input} setInput={setInput} searchFunc={() => searchFunc(input)}/>
                        <Spacer spacer/>
                        <VisitorTypeCard
                            title1="Visitor"
                            title2="Residential Usage"
                        />
                        <Spacer spacer/>
            { 
                tempArray ? 
                tempArray.map((item) => {
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
                            status={item.visitRequestObj.status}
                            approval
                            approvalFunc={() => postApproval(userInputObj,"Approved",errCallback)}
                            rejectFunc={() => postApproval(userInputObj,"Reject",errCallback )}
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
