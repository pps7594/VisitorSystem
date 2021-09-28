import React, { useState, useEffect, useContext } from 'react';;
import {View, ScrollView} from 'react-native';

//import component
import Spacer from '../../components/Spacer';
import {MyContainer,MyList,VisitorTypeCard} from '../../components/MyCard';
import MyFilter from '../../components/MyFilter';
import ReportSummaryCard from '../../components/ReportSummaryCard';

const ReportScreen = ({navigation}) => {

    const [input, setInput] = useState('');

    return <MyContainer screencontainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <MyFilter input={input} setInput={setInput}/>
                <Spacer spacer/>
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
                <Spacer spacer/>
                <ReportSummaryCard
                    numAll="20"
                    iconName1
                    title1="10"
                    iconName2
                    title2="07"
                    iconName3
                    title3="12"
                    iconName4
                    title4="01"
                    iconName5
                    title5="01"
                />
                <Spacer spacer/>
                <ReportSummaryCard
                    numAll="20"
                    iconName1
                    title1="10"
                    iconName2
                    title2="07"
                    
                />
                <Spacer spacer/>
                <MyList
                    id="#VR-233" 
                    visitor="Mohamed Shafyul" 
                    address="1, Jalan Abc 1/1"
                    visitorType="1"
                    carplate="ABC1234"
                    arriveDate="Oct 31st, 2020"
                    arriveTime="08:29 AM"
                    departDate="Nov 31st, 2020"
                    departTime="08:29 AM"
                    status={"active"}
                />
                <Spacer spacer/>
            </ScrollView>
        </MyContainer>

};

 export default ReportScreen;