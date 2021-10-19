import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, Text, Button} from 'react-native'

import { MyContainer } from '../../components/MyCard';
import {MyTextInput,MyPicker, MyCheckBox} from '../../components/MyTextInput';
import MyText from '../../components/MyText';
import Spacer from '../../components/Spacer';
import {MyButton,Details} from '../../components/MyButton';

const DefaultSettingScreen = () => {
    const [isChecked, setChecked] = useState(true);
    return (
        <MyContainer screencontainer>
            <ScrollView showsVerticalScrollIndicator={false}>
            <MyContainer cardcontainer borderRadius5>
                <MyText title="Default Approval for Visitor:" h4P/>
                <MyContainer conCol>
                    <MyContainer conCol alignstart>
                    <MyCheckBox 
                    label="Normal Visitor"
                    value={isChecked}
                    onValueChange={setChecked}
                    />
                    <MyCheckBox 
                    label="Residential Usage"
                    value={isChecked}
                    onValueChange={setChecked}
                    />
                    </MyContainer>
                </MyContainer>
                <Spacer spacer/>
                <MyText title="Vehichle Type Allowed:" inputlabelP/>
                <Spacer space/>
                <MyContainer conCol>
                        <Details width60 info setting="Car, Motorcycle and Van "/>
                </MyContainer>
            </MyContainer>
            <Spacer spacer/>    
            <MyContainer cardcontainer borderRadius5>
                <MyText title="Walk-In Availability:" h4P/>
                <MyContainer conCol>
                    <MyContainer conCol alignstart>
                    <MyCheckBox 
                    label="Walk-in Visitor"
                    value={isChecked}
                    onValueChange={setChecked}
                    />
                    </MyContainer>
                </MyContainer>
            </MyContainer>
            <Spacer spacer/> 
            <MyContainer cardcontainer borderRadius5>
                <MyText title="Data Retention:" h4P/>
                <Spacer space/>
                <MyContainer conCol>
                    <Details width60 info setting="3 Months "/>
                </MyContainer>
                <Spacer space/>
                <MyText title="*Data Retention Time determines the duration to keep your data"  pR3I/>
            </MyContainer>
            </ScrollView>
        </MyContainer>
    )
};

export default DefaultSettingScreen;
