//import library
import React, { useState, useEffect, useContext } from 'react';
import {View, ScrollView, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import moment from "moment-timezone";

//import component
import Spacer from './Spacer';
import MyText from './MyText';
import {MyTextInput,MyPicker, MyCheckBox} from './MyTextInput';
import {MyButton} from './MyButton';
import MyIcon from './MyIcon';
import MyDateTimePicker from './MyDateTimePicker';

import { MyContainer } from './MyCard';

//import config
import colors from '../config/colors';

const RegisterVisitorForm = ({resident,onConfirmArrive,onCancelArrive,titleArrive,funcArrive,isArriveVisible,onConfirmDeparture,onCancelDeparture,titleDeparture,funcDeparture,isDepartureVisible,datetimeError,

    guard,walkin,emergency,emergencywalkin,residentAddressValue,residentAddressOnChangeText,residentAddressError,

    walkInAllowed,WalkinValue,WalkinOnValueChange,walkinDisabled,additionalNotesValue,additionalNotesOnChange,additionalNotesError,
    
    input,setInput,vehicle,driverLicenseOnPress,addVisitorFunc,errorfound,additionalerror,submitFunc

}) => {

    const deleteVisitorEntry = (targetIndex) => {
        input.splice(targetIndex,1)
        setInput([ ...input])
    }

    //validations
    const nameValidation = (fieldName, data, targetIndex) => {
        const nameRegex = /^[a-zA-Z][A-Za-z ,.'-]+$/;
        if(data.length <= 0 || data.length >50 || !nameRegex.test(data)){
            input[targetIndex] = {...input[targetIndex], [fieldName]:data,"visitorNameError": "Invalid Character for Name field"}
            setInput([ ...input])
        }
        else{
            input[targetIndex] = {...input[targetIndex], [fieldName]: data, "visitorNameError": ""}
            setInput([ ...input])
        }
    }

    const phoneValidation = (fieldName, data, targetIndex) => {
        const phoneRegex = /^(?:\d{3}-\d{7}|\d{4}-\d{7}|\d{10}|\d{11})$/;
        if(data.length <= 0 || !phoneRegex.test(data)){
            input[targetIndex] = {...input[targetIndex], [fieldName]:data,"visitorTelError": "Invalid Phone Format"}
            setInput([ ...input])
        }
        else{
            input[targetIndex] = {...input[targetIndex], [fieldName]: data, "visitorTelError": ""}
            setInput([ ...input])
        }
    }

    const peopleCountValidation = (fieldName, data, targetIndex) => {
        const peopleRegex = /^[1-9][0-9]*/;
        if(data.length <= 0 || data.length >=10 || !peopleRegex.test(data) ){
            input[targetIndex] = {...input[targetIndex], [fieldName]:"","peopleCountError": "Invalid People Count"}
            setInput([ ...input])
        }
        else{
            input[targetIndex] = {...input[targetIndex], [fieldName]: data, "peopleCountError": ""}
            setInput([ ...input])
        }
    }

    const carplateValidation = (fieldName, data, targetIndex) => {
        const carplateRegex = /^(?:[A-Z][0-9A-Z]+)$/;
        if(data.length < 4 || data.length > 20 || !carplateRegex.test(data)){
            input[targetIndex] = {...input[targetIndex], [fieldName]:data,"visitorPlateNumError": "Please CAPITALISE and only 4-20 characters are allowed! "}
            setInput([ ...input])
        }
        else{
            input[targetIndex] = {...input[targetIndex], [fieldName]: data, "visitorPlateNumError": ""}
            setInput([ ...input])
        }
    }

    const updateVisitorEntry = (fieldName, data, targetIndex) => {
        input[targetIndex] = {...input[targetIndex], [fieldName]: data}
        setInput([ ...input])
    }

    const notesValidation = (fieldName, data, targetIndex) => {
        const notesRegex = /^$|^[a-zA-Z][a-zA-Z0-9 ]+$/;
        if(data.length <= 0 || data.length > 100000 || !notesRegex.test(data)){
            input[targetIndex] = {...input[targetIndex], [fieldName]:data,"vehicleTypeNotesError": "Only Alphabets and spaces are allowed"}
            setInput([ ...input])
        }
        else{
            input[targetIndex] = {...input[targetIndex], [fieldName]: data, "vehicleTypeNotesError": ""}
            setInput([ ...input])
        }
    }

    return <>
    <MyText title="Fields marked with an asterisk (*) are required."  pR3I/>
    <Spacer space10/>
    {resident?<><MyDateTimePicker 
        label="Scheduled Arrive Date Time: *"
        onConfirm={onConfirmArrive}
        onCancel={onCancelArrive}
        title={titleArrive}
        func={funcArrive}
        isVisible={isArriveVisible}
    />
    <Spacer space10/>
    <MyDateTimePicker 
        label="Scheduled Departure Date Time: *"
        onConfirm={onConfirmDeparture}
        onCancel={onCancelDeparture}
        title={titleDeparture}
        func={funcDeparture}
        isVisible={isDepartureVisible}
    />
    {datetimeError && datetimeError.length > 0 ? <Text style={styles.errorMessage}>{datetimeError}</Text>:null}
    <Spacer space10/>
    </>:null}

    {guard ||walkin ?<>
    <MyTextInput  
        label="Resident Address: *"
        value={residentAddressValue}
        onChangeText={residentAddressOnChangeText}
    /><Spacer space10/>
    </>:null}
    {residentAddressError && residentAddressError.length > 0 ? <Text style={styles.errorMessage}>{residentAddressError}</Text>:null}

    {walkInAllowed&&walkInAllowed==1&&!walkinDisabled?<><MyCheckBox 
    label="Walk-in Visitor"
    value={WalkinValue}
    onValueChange={WalkinOnValueChange}
    />
    <Spacer space10/></>:null}

    {walkInAllowed&&walkInAllowed==1&&walkinDisabled?<><MyCheckBox 
    label="Walk-in Visitor"
    value={WalkinValue}
    onValueChange={WalkinOnValueChange}
    disabled={true}
    grey1
    />
    <Spacer space10/></>:null}

    <MyTextInput  
    placeholder="Additional Notes Here..."
    value={additionalNotesValue} 
    onChangeText={additionalNotesOnChange}
    multiline={true}
    numberOfLines={3}
    />
    {additionalNotesError && additionalNotesError.length > 0 ? <Text style={styles.errorMessage}>{additionalNotesError}</Text>:null}
    <Spacer m20/>
    
    

   
    {/* For Loop is necessary, and initially the first entry is empty, then we can gain data via the loop, end of submit, we pass this array as visitRequestCarList */}
    {
       
        input.map((item,index) => {
            return <View key={index}>
            <MyContainer conRow>
                <MyContainer conRow flex flexstart/>
                <MyText title="Create New Visitor" h3P/>
                <MyContainer conRow flex flexend>
                <TouchableOpacity onPress={()=>deleteVisitorEntry(index)}>
                    <MyIcon MC iconName="delete-forever" black fontSize30 />
                </TouchableOpacity>
                </MyContainer>
            </MyContainer>
            <Spacer space10/>
                {resident || guard ||walkin || emergencywalkin ?<><MyTextInput  
                    label="Name: *"
                    value={item.visitorName}
                    onChangeText={(value) => nameValidation("visitorName",value,index)}
                />
                {item.visitorNameError && item.visitorNameError.length > 0 ? <Text style={styles.errorMessage}>{item.visitorNameError}</Text>:null}
                <Spacer space10/>
                <MyTextInput  
                    label="Phone Number: *"
                    value={item.visitorTel} 
                    onChangeText={(value) => phoneValidation("visitorTel",value,index)}
                />
                {item.visitorTelError && item.visitorTelError.length > 0 ? <Text style={styles.errorMessage}>{item.visitorTelError}</Text>:null}
                <Spacer space10/>
                </>:null}

                {resident||guard||emergency ?<><MyTextInput  
                    label="No of Visitor: *"
                    value={item.peopleCount} 
                    onChangeText={(value) => peopleCountValidation("peopleCount",value,index)}
                />
                {item.peopleCountError && item.peopleCountError.length > 0 ? <Text style={styles.errorMessage}>{item.peopleCountError}</Text>:null}
                <Spacer space10/>
                <MyTextInput  
                    label="Car Plate Number: *"
                    value={item.visitorPlateNum} 
                    onChangeText={(value) => carplateValidation("visitorPlateNum",value,index)}
                    keyboardType={Platform.OS === 'ios' ? 'default' : 'visible-password'}
                    autoCapitalize="characters"
                />
                {item.visitorPlateNumError && item.visitorPlateNumError.length > 0 ? <Text style={styles.errorMessage}>{item.visitorPlateNumError}</Text>:null}
                <Spacer space10/>
                <MyPicker  
                    label="Vehicle Type: "
                    items={vehicle}
                    value={item.visitorVehicleType}
                    onChange={(value) => updateVisitorEntry("visitorVehicleType",value,index)}
                />
                <Spacer space10/>
                </>:null}

                {guard?<>
                <MyText title="Driver License: *" inputlabelP/>
                <TouchableOpacity onPress={driverLicenseOnPress} style={styles.driverlicensePress}>
                    <MyContainer conCol flex>
                    <MyIcon ION iconName="camera-outline" black padding10 fontSize25/>
                    <MyText title="Capture Photo" pR2/>
                    </MyContainer>
                </TouchableOpacity>
                <Spacer space10/>
                </>:null}

                {resident?<><MyTextInput  
                    label="Vehicle Type Notes: "
                    placeholder="Vehicle Type Notes Here..."
                    value={item.vehicleTypeNotes} 
                    onChangeText={(value) => notesValidation("vehicleTypeNotes",value,index)}
                    style={{justifyContent: "flex-start"}}
                    multiline={true}
                    numberOfLines={3}
                />
                {item.vehicleTypeNotesError && item.vehicleTypeNotesError.length > 0 ? <Text style={styles.errorMessage}>{item.vehicleTypeNotesError}</Text>:null}
                </>:null}
                <Spacer m20/>
            </View>
        })
    }
    {resident||emergency||emergencywalkin?<><MyButton title="Add Visitor" height40 borderradius30 row pP2 icon func={addVisitorFunc} selected/>
    <Spacer spacer/>
    </>:null}
    {errorfound.length>0 || additionalerror==true?
    <MyButton title="Submit" height40 borderradius30 row pP2 disabled inactive/>
    :<MyButton title="Submit" height40 borderradius30 row pP2 func={submitFunc} selected />
    }
    
    </>
};

const styles = StyleSheet.create({
    errorMessage:{
        fontSize:14,
        color:colors.rejected,
    },
    driverlicensePress:{
        height:180,
        borderColor:colors.mainColor,
        borderWidth:1, 
        borderRadius:2
    },
})

export default RegisterVisitorForm;