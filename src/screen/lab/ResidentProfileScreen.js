import React from 'react'
import {Image} from 'react-native'

import {MyContainer} from '../../components/MyCard';
import MyText from '../../components/MyText';
import Spacer from '../../components/Spacer';
import {MyButton} from '../../components/MyButton';

const ResidentProfileScreen = () => {
    return (
        <MyContainer screencontainer>
            <MyContainer cardcontainer borderRadius5>
            <Spacer spacer/>
            <MyContainer conRow spacebetween>
                <MyContainer conCol flex>
                    <Image 
                        style={{height:100,width:100}}
                        source={require("../../assets/logo.png")}/>
                    <Spacer spacer/>
                    <MyContainer conCol alignstart>
                    <MyText title="Address: " pP3 grey/>
                    <MyText title="No. 12, Jalan Abc 123" pP2/>
                    </MyContainer>
                    <Spacer m20/>
                </MyContainer>
                <MyContainer conCol alignstart flex>
                    <MyText title="User ID: " pP3 grey/>
                    <MyText title="R1002" pP2/>
                    <Spacer space10/>
                    <MyText title="Username: " pP3 grey/>
                    <MyText title="Resident" pP2/>
                    <Spacer space10/>
                    <MyText title="Email: " pP3 grey/>
                    <MyText title="resident@gmail.com" pP2/>
                    <Spacer space10/>
                    <MyText title="Phone number: " pP3 grey/>
                    <MyText title="0123456789" pP2/>
                    
                </MyContainer>
            
                
            </MyContainer>
            <Spacer spacer/>
            </MyContainer>
            <Spacer spacer/>
            <MyButton title="Edit Profile" active h4/>
        </MyContainer>
    )
};

export default ResidentProfileScreen;