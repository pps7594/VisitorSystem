import React from 'react';
import {View} from 'react-native';

import colors from '../config/colors';
import Spacer from './Spacer';
import MyText from './MyText';
import { MyContainer ,VisitorTypeCard} from './MyCard';

const ReportSummaryCard = ({numAll,iconName1,title1,iconName2,title2,iconName3,title3,iconName4,title4,iconName5,title5,}) => {
            return<MyContainer cardcontainer>
                <MyContainer conCol>
                <MyText title="Number of All Visitors" pP/>
                <MyText title={numAll} num />
                <Spacer space/>
                <View style={{backgroundColor:colors.black,width:"100%",height:1}} />
                <Spacer space/>
                <MyText title="Number of Each Visitor Type" pP/>
                    <VisitorTypeCard col
                    iconName1={iconName1}
                    title1={title1}
                    iconName2={iconName2}
                    title2={title2}
                    iconName3={iconName3}
                    title3={title3}
                    iconName4={iconName4}
                    title4={title4}
                    iconName5={iconName5}
                    title5={title5}
                    />
                </MyContainer> 
            </MyContainer>
};

export default ReportSummaryCard;