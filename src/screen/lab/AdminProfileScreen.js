import React from 'react'
import {Image} from 'react-native'

import {MyContainer} from '../../components/MyCard';
import MyText from '../../components/MyText';
import Spacer from '../../components/Spacer';
import {MyButton} from '../../components/MyButton';

const AdminProfileScreen = () => {
    return (
        <MyContainer screencontainer>
            <MyContainer cardcontainer borderRadius5>
            <Spacer m20/>
                <MyContainer conCol>
                    <Image 
                        style={{height:100,width:100}}
                        source={require("../../assets/logo.png")}/>
                    <Spacer spacer/>
                </MyContainer>
                <MyContainer conCol alignstart paddingleft>
                    <MyText title="User ID: " pP3 grey/>
                    <MyText title="A1000" pP2/>
                    <Spacer space10/>
                    <MyText title="Username: " pP3 grey/>
                    <MyText title="Admin" pP2/>
                    <Spacer space10/>
                    <MyText title="Email: " pP3 grey/>
                    <MyText title="admin@gmail.com" pP2/>
                    <Spacer space10/>
                    <MyText title="Phone number: " pP3 grey/>
                    <MyText title="0123456789" pP2/>
                </MyContainer>
            <Spacer m20/>
                <MyButton title="Edit Profile" active h4/>
            <Spacer m20/>
            </MyContainer>
        </MyContainer>
    )
};

export default AdminProfileScreen;