//import library
import React, { useState, useEffect} from 'react';;
import {View, Text, ScrollView} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { storeTempReportArray } from "../../redux/residentslice";

//import function
import residentFunction from '../../functions/residentFunction';
import {newdatetime} from '../../functions/newdatetime';

import Spacer from '../../components/Spacer';
import {MyContainer,MyList,VisitorTypeCard} from '../../components/MyCard';
import MyFilter from '../../components/MyFilter';
import ReportSummaryCard from '../../components/ReportSummaryCard';

const ReportScreen = ({navigation}) => {
    const dispatch = useDispatch();

    const {residentReport} = residentFunction();
    const [currentDate, setCurrentDate] = useState('');
    const residentReportArray = useSelector((state) => state.resident.residentreportarray); 

    const [input, setInput] = useState('');

    // Temporary Array to store Filter result
    const tempArray = useSelector((state) => state.resident.tempreportarray); 

    // Helper Function
    const errCallback = ({msg}) => {
        // Some refinement should be done? Like header of this alert should not only be "alert"?
        alert(msg)
    }

    useEffect(() => {
        // Trigger the API call every time we navigate to this screen, as a Event listener
        navigation.addListener('focus', () => residentReport({errCallback}));
    }, []);

     // Const searchFunc
     const searchFunc = (input) => {
        if(input != ""){
            let searchTerm = input.toLowerCase();
            let filterResult = residentReportArray.filter((x) => {
                let searchFlag = false;
                // We only can limit some field for search, candidates ("visitorPlateNum", "visitorTypeID = switch statement")
                let visitorType = visitorTypeSwitch(x.visitorTypeID);
                
                let candidate = [x.visitorPlateNum,visitorType]
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
            dispatch(storeTempReportArray(filterResult))
            
        }
        else{
            dispatch(storeTempReportArray(residentReportArray))
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

    
    const numAll = tempArray.filter(x=>x.visitorTypeID!=null).length;
    const num1 = tempArray.filter(x=>x.visitorTypeID=='1').length;
    const num2 = tempArray.filter(x=>x.visitorTypeID=='2').length;
    const num3 = tempArray.filter(x=>x.visitorTypeID=='3').length;
    const num4 = tempArray.filter(x=>x.visitorTypeID=='4').length;
    const num5 = tempArray.filter(x=>x.visitorTypeID=='5').length;

    // Temp Array
    console.log(tempArray)
    return (
        <MyContainer screencontainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <MyFilter sourceFunc= {({timeframe}) => residentReport({errCallback,timeframe})} input={input} setInput={setInput} searchFunc={() => searchFunc(input)}/>
                <Spacer spacer/>
                <VisitorTypeCard
                    title1="Visitor"
                    title2="Residential Usage"
                    title3="Delivery"
                    title4="Emergency Service"
                    title5="Long-Term Service"
                />
                <Spacer spacer/>
                <ReportSummaryCard
                    numAll={numAll ?numAll:"0"}
                    title1={num1 ?num1:"0"}
                    title2={num2 ?num2:"0"}
                    title3={num3 ?num3:"0"}
                    title4={num4 ?num4:"0"}
                    title5={num5 ?num5:"0"}
                />
                <Spacer spacer/>
            { 
                tempArray ? 
                tempArray.map((item) => {
                    const arrivedatetime = newdatetime(item.actualArrivedDateTime)
                    const leavingdatetime = newdatetime(item.actualLeavingDateTime)

                    return <View key={item.visitingLogID}>
                            <MyList
                                id={item.visitingLogID}
                                visitor={item.visitorName}
                                address={item.residentsAddress}
                                visitorType={item.visitorTypeID}
                                carplate={item.visitorPlateNum}
                                arriveDate={arrivedatetime[0]}
                                arriveTime={arrivedatetime[1]}
                                departDate={leavingdatetime[0]}
                                departTime={leavingdatetime[1]}
                                status={item.visitStatus}
                            />
                            <Spacer space10/>
                        </View>
                }):null
            }     
                <Spacer spacer/>
            </ScrollView>   
        </MyContainer>
    )
};

export default ReportScreen;