import React, { useState, useEffect} from 'react';;
import {View, Text, ScrollView} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { storeTempReportArray } from "../../redux/admindashboardslice";

//import function
import adminFunction from '../../functions/adminFunction';
import {newdatetime} from '../../functions/newdatetime';

import Spacer from '../../components/Spacer';
import {MyContainer,MyList,VisitorTypeCard} from '../../components/MyCard';
import MyFilter from '../../components/MyFilter';
import ReportSummaryCard from '../../components/ReportSummaryCard';


const ReportScreen = ({navigation}) => {
    const dispatch = useDispatch();

    const {adminReport} = adminFunction();
    const adminReportArray = useSelector((state) => state.admindashboardSlice.adminreportarray); 

    const [input, setInput] = useState('');
    // Temporary Array to store Filter result
    const tempArray = useSelector((state) => state.admindashboardSlice.tempreportarray); 

    // Helper Function
    const errCallback = ({msg}) => {
        // Some refinement should be done? Like header of this alert should not only be "alert"?
        alert(msg)
    }

    useEffect(() => {
        // Trigger the API call every time we navigate to this screen, as a Event listener
        navigation.addListener('focus', () => {
            adminReport({errCallback})
            
        });
    }, []);

    // Const searchFunc
    const searchFunc = (input) => {
        if(input != ""){
            let searchTerm = input.toLowerCase();
            let filterResult = adminReportArray.filter((x) => {
                let searchFlag = false;
                // We only can limit some field for search, candidates ("visitorPlateNum", "visitorTypeID = switch statement", "residentsAddress")
                let visitorType = "";
                switch (x.visitorTypeID) {
                    case 1: 
                        visitorType = "visitor"
                        break;
                    case 2:
                        visitorType = "residental usage"
                        break;
                    case 3:
                        visitorType = "delivery"
                        break;
                    case 4:
                        visitorType = "emergency service"
                        break;
                    case 5:
                        visitorType = "long-term service"
                        break;
                    default:
                        break;
                }
                let candidate = [x.visitorPlateNum,x.residentsAddress,visitorType]
                candidate.forEach(val => {
                    if(val.toLowerCase().includes(searchTerm)) {
                        searchFlag = true;
                        return;
                    }
                });
                if(searchFlag) return x;
            });
            if(filterResult.length > 0) {
                // console.log(filterResult)
                dispatch(storeTempReportArray(filterResult))
            } 
        }
        else{
            dispatch(storeTempReportArray(adminReportArray))
        }
    }

    const numAll = tempArray.filter(x=>x.visitorTypeID!=null).length;
    const num1 = tempArray.filter(x=>x.visitorTypeID=='1').length;
    const num2 = tempArray.filter(x=>x.visitorTypeID=='2').length;
    const num3 = tempArray.filter(x=>x.visitorTypeID=='3').length;
    const num4 = tempArray.filter(x=>x.visitorTypeID=='4').length;
    const num5 = tempArray.filter(x=>x.visitorTypeID=='5').length;

    console.log("Rerender \n")
    return (
        <MyContainer screencontainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <MyFilter sourceFunc= {({timeframe}) => adminReport({errCallback,timeframe})} input={input} setInput={setInput} searchFunc={() => searchFunc(input)}/>
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
