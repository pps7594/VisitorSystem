import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, Text, Button} from 'react-native'
import { useDispatch, useSelector } from "react-redux"

import { MyContainer } from '../../components/MyCard';
import {MyTextInput,MyPicker, MyCheckBox} from '../../components/MyTextInput';
import MyText from '../../components/MyText';
import Spacer from '../../components/Spacer';
import {MyButton,Details} from '../../components/MyButton';

//import function
import adminFunction from '../../functions/adminFunction';

const DefaultSettingScreen = ({navigation}) => {
    const {adminDefaultSetting} = adminFunction();
    const defaultSetting = useSelector((state) => state.admindashboardSlice.defaultsetting); 
    const setup = defaultSetting.setup;
    const permission = defaultSetting.permission;
 
    // Helper Function
    const errCallback = ({msg}) => {
        // Some refinement should be done? Like header of this alert should not only be "alert"?
        alert(msg)
    }

    useEffect(() => {
        // Trigger the API call every time we navigate to this screen, as a Event listener
        navigation.addListener('focus', () => adminDefaultSetting({errCallback}));
    }, []);
    return(
      <MyContainer screencontainer>
      <ScrollView showsVerticalScrollIndicator={false}>
      <MyContainer cardcontainer borderRadius5>
          <MyText title="Default Approval for Visitor:" h4P/>
          <MyContainer conCol>
              <MyContainer conCol alignstart>
              {permission&&permission.dat1?<MyCheckBox 
              label="Normal Visitor"
              value={true}
              disabled={true}
              grey1
              />:null}
              {permission&&permission.dat2?<MyCheckBox 
              label="Residential Usage"
              value={true}
              disabled={true}
              grey1
              />:null}
              </MyContainer>
          </MyContainer>
          <Spacer spacer/>
          <MyText title="Vehichle Type Allowed for Residential Usage:" inputlabelP/>
          <Spacer space/>
          <MyContainer conCol>
                  {permission?<Details width60 info inactive setting={permission.carAllowed}/>:null}
          </MyContainer>
      </MyContainer>
      <Spacer spacer/>    
      <MyContainer cardcontainer borderRadius5>
          <MyText title="Walk-In Availability:" h4P/>
          <MyContainer conCol>
              <MyContainer conCol alignstart>
              {setup&&setup.walkInAllowed?<MyCheckBox 
              label="Walk-in Visitor"
              value={true}
              disabled={true}
              grey1
              />:
              <MyCheckBox 
              label="Walk-in Visitor"
              value={false}
              disabled={true}
              />}
              </MyContainer>
          </MyContainer>
      </MyContainer>
      <Spacer spacer/> 
      <MyContainer cardcontainer borderRadius5>
          <MyText title="Data Retention:" h4P/>
          <Spacer space/>
          <MyContainer conCol>
              {setup?<Details width60 info grey setting={setup.dataRetention}/>:null}
          </MyContainer>
          <Spacer space/>
          <MyText title="*Data Retention Time determines the duration to keep your data"  pR3I/>
      </MyContainer>
      </ScrollView>
  </MyContainer>
    )
};

export default DefaultSettingScreen;
