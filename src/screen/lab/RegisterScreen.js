import React, { useState, useEffect, useContext } from 'react';
import {View, ScrollView, FlatList, Text} from 'react-native';


//import component
import Spacer from '../../components/Spacer';
import MyText from '../../components/MyText';
import {MyTextInput,MyPicker, MyCheckBox} from '../../components/MyTextInput';
import {MyButton} from '../../components/MyButton';
import MyIcon from '../../components/MyIcon';
import MyDateTimePicker from '../../components/MyDateTimePicker';
import { MyContainer } from '../../components/MyCard';

const RegisterScreen = ({navigation}) => {

    const [Visitor, setVisitor] = useState(false);
    const [Residential, setResidential] = useState(true);
    const [input, setInput] = useState('');
    const [select, setSelect] = useState({});
    const [vehicleNotes, setVehicleNotes] = useState('');
    const [isChecked, setChecked] = useState(false);
    const countries = [
        { label: 'Car', value: 'car' },
        { label: 'Motorcycle', value: 'motorcycle' },
        { label: 'Van', value: 'van' },
        { label: 'Heavy Vehicle', value: 'heavyvehicle' },
      ];
    
    var visitorB = () => { setVisitor(true); setResidential(false);}

    var residentialB = () => { setResidential(true); setVisitor(false);}

    var onPress = () => {null}
    
    return <MyContainer screencontainer>
            <ScrollView showsVerticalScrollIndicator={false}>
            <MyContainer cardcontainer borderRadius5>
                <MyContainer conRow spacebetween>
                    {Visitor ?<MyButton title="Visitor" height40 width45 border active h4/>
                    :<MyButton title="Visitor" height40 width45 border white inactive h4 />}
                    {Residential ?<MyButton title="Residential Usage" height40 width45 border active h4/>
                    :<MyButton title="Residential Usage" height40 width45 border white inactive h4/>}
                </MyContainer>
                <Spacer spacer/>
                <MyText title="Fields marked with an asterisk (*) are required."  pR3I/>
                <Spacer space/>
                <MyDateTimePicker 
                    label="Scheduled Arrive Date Time: *"
                />
                <Spacer space/>
                <MyDateTimePicker 
                    label="Scheduled Departure Date Time: *"
                />
                <Spacer space/>
                <MyCheckBox 
                label="Walk-in Visitor"
                value={isChecked}
                onValueChange={setChecked}
                />
                <Spacer space/>
                <MyTextInput  
                placeholder="Additional Notes Here..."
                value={vehicleNotes} 
                onChangeText={setVehicleNotes}
                multiline={true}
                numberOfLines={3}
                />
                <Spacer m20/>

                <MyContainer conRow>
                    <MyContainer conRow flex flexstart/>
                    <MyText title="Create New Visitor" h3P/>
                    <MyContainer conRow flex flexend>
                    <MyIcon MC iconName="delete-forever" black fontSize30 />
                    </MyContainer>
                </MyContainer>
                <Spacer space/>
                
                <MyTextInput  
                label="Name: *"
                value={input} 
                onChangeText={setInput}
                />
                <Spacer space/>
                <MyTextInput  
                label="Phone Number: *"
                value={input} 
                onChangeText={setInput}
                />
                <Spacer space/>
                <MyTextInput  
                label="No of Visitor: *"
                value={input} 
                onChangeText={setInput}
                />
                <Spacer space/>
                <MyTextInput  
                label="Car Plate Number: *"
                value={input} 
                onChangeText={setInput}
                />
                <Spacer space/>
                <MyPicker  
                label="Vehicle Type: "
                items={countries}
                value={select} 
                onChangeText={setSelect}
                />
                <Spacer space/>
                <MyTextInput  
                label="Vehicle Type Notes: "
                value={vehicleNotes} 
                onChangeText={setVehicleNotes}
                style={{justifyContent: "flex-start"}}
                multiline={true}
                numberOfLines={3}
                />
                <Spacer m20/>
                <MyButton title="Add Visitor" height40 borderradius30 row pP2 icon func={onPress}/>
                <Spacer spacer/>
                <MyButton title="Submit" height40 borderradius30 row pP2 func={onPress}/>
            </MyContainer>
            </ScrollView>
            </MyContainer>
};

 export default RegisterScreen;