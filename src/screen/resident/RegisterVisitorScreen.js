//import library
import React, { useState, useEffect, useContext } from 'react';
import {View, ScrollView, FlatList, Text} from 'react-native';
import { useDispatch, useSelector } from "react-redux";

//import component
import Spacer from '../../components/Spacer';
import MyText from '../../components/MyText';
import {MyTextInput,MyPicker, MyCheckBox} from '../../components/MyTextInput';
import {MyButton} from '../../components/MyButton';
import MyIcon from '../../components/MyIcon';
import MyDateTimePicker from '../../components/MyDateTimePicker';
import { MyContainer } from '../../components/MyCard';

//import function
import residentFunction from '../../functions/residentFunction';

const RegisterVisitorScreen = ({navigation}) => {
    const {residentWalkInAllowed} = residentFunction();
    const walkInAllowed = useSelector((state) => state.resident.walkinallowed); 

    // Helper Function
    const errCallback = ({msg}) => {
        // Some refinement should be done? Like header of this alert should not only be "alert"?
        alert(msg)
    }

    useEffect(() => {
        // Trigger the API call every time we navigate to this screen, as a Event listener
        navigation.addListener('focus', () => residentWalkInAllowed({errCallback}));
    }, []);

    // Console log here to show what it returns
    console.log(walkInAllowed)

    const [input, setInput] = useState('');
    const [select, setSelect] = useState({});
    const [vehicleNotes, setVehicleNotes] = useState('');
    const [isChecked, setChecked] = useState(false);
    const vehicle = [
        { label: 'Car', value: 'car' },
        { label: 'Motorcycle', value: 'motorcycle' },
        { label: 'Van', value: 'van' },
        { label: 'Heavy Vehicle', value: 'heavyvehicle' },
      ];
    
    const [filters, setFilters] = React.useState([
        { label: 'Visitor'},
        { label: 'Residential Usage'},
    ]);

    const [selected, setSelected] = React.useState(filters[1]);

    const callback = (data) => {
        if (selected === data) return setSelected(filters[0]);
        setSelected(data);
      };
    
    var onPress = () => {null}

    return (
        <MyContainer screencontainer>
            <ScrollView showsVerticalScrollIndicator={false}>
            <MyContainer cardcontainer borderRadius5>
                <MyContainer conRow spacebetween>
                    {filters.map((filter) => (
                        <MyButton key={filter.label} title={filter.label} selected={filter === selected} h4 func={() => {
                              callback(filter);
                        }} height40 width45 border/>
                    ))}
                </MyContainer>
                <Spacer spacer/>
                <MyText title="Fields marked with an asterisk (*) are required."  pR3I/>
                <Spacer space10/>
                <MyDateTimePicker 
                    label="Scheduled Arrive Date Time: *"
                />
                <Spacer space10/>
                <MyDateTimePicker 
                    label="Scheduled Departure Date Time: *"
                />
                <Spacer space10/>
                {walkInAllowed===1?<><MyCheckBox 
                label="Walk-in Visitor"
                value={isChecked}
                onValueChange={setChecked}
                />
                <Spacer space10/></>:null}
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
                <Spacer space10/>
                
                <MyTextInput  
                label="Name: *"
                value={input} 
                onChangeText={setInput}
                />
                <Spacer space10/>
                <MyTextInput  
                label="Phone Number: *"
                value={input} 
                onChangeText={setInput}
                />
                <Spacer space10/>
                <MyTextInput  
                label="No of Visitor: *"
                value={input} 
                onChangeText={setInput}
                />
                <Spacer space10/>
                <MyTextInput  
                label="Car Plate Number: *"
                value={input} 
                onChangeText={setInput}
                />
                <Spacer space10/>
                <MyPicker  
                label="Vehicle Type: "
                items={vehicle}
                value={select} 
                onChangeText={setSelect}
                />
                <Spacer space10/>
                <MyTextInput  
                label="Vehicle Type Notes: "
                placeholder="Vehicle Type Notes Here..."
                value={vehicleNotes} 
                onChangeText={setVehicleNotes}
                style={{justifyContent: "flex-start"}}
                multiline={true}
                numberOfLines={3}
                />
                <Spacer m20/>
                <MyButton title="Add Visitor" height40 borderradius30 row pP2 icon func={onPress} selected/>
                <Spacer spacer/>
                <MyButton title="Submit" height40 borderradius30 row pP2 func={onPress} selected/>
            </MyContainer>
            </ScrollView>
            </MyContainer>
    )};

export default RegisterVisitorScreen;
