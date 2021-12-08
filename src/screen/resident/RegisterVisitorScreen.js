//import library
import React, { useState, useEffect, useContext } from 'react';
import {View, ScrollView, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import moment from "moment-timezone";

//import component
import Spacer from '../../components/Spacer';
import {MyButton} from '../../components/MyButton';
import { MyContainer } from '../../components/MyCard';
import RegisterVisitorForm from '../../components/RegisterVisitorForm';

//import config
import colors from '../../config/colors';

//import function
import residentFunction from '../../functions/residentFunction';
import { newdatetime } from '../../functions/newdatetime';


const RegisterVisitorScreen = ({navigation}) => {
    const {residentWalkInAllowed,postVisitor,postResidentialUsage} = residentFunction();
    const walkInAllowed = useSelector((state) => state.resident.walkinallowed); 

    // Helper Function
    const errCallback = ({msg}) => {
        // Some refinement should be done? Like header of this alert should not only be "alert"?
        alert(msg)
    }

    useEffect(() => {
        // Trigger the API call every time we navigate to this screen, as a Event listener
        navigation.addListener('focus', () => residentWalkInAllowed({errCallback}));
        /* Reset the form everytime they enter the screen */
        // Form Section
        // Visitor Entry Section
        setInput([ { 
            "peopleCount": "",
            "vehicleTypeNotes": "",
            "visitorName": "",
            "visitorPlateNum": "",
            "visitorTel": "",
            "visitorVehicleType": "car",
            //error
            "peopleCountError": "",
            "vehicleTypeNotesError": "",
            "visitorNameError": "",
            "visitorPlateNumError": "",
            "visitorTelError": "",
        }]) 
        setAdditionalNotes("");
        setAdditionalNotesError("");
        setChecked(false);
        setScheduledArrive(moment().tz("Asia/Kuala_Lumpur").format("YYYY-MM-DD HH:mm:ss"));
        setScheduledArriveSelected("Select DateTime Picker");
        setScheduledDeparture(moment().tz("Asia/Kuala_Lumpur").format("YYYY-MM-DD HH:mm:ss"));
        setScheduledDepartureSelected("Select DateTime Picker");
        setDatetimeError("")
    }, []);

    const [input, setInput] = useState([{
        // "visitRequestCarID": "",
        //  "visitRequestID": "",
        // These two will be inserted when posting the data onto server.
        "peopleCount": "",
        "vehicleTypeNotes": "",
        "visitorName": "",
        "visitorPlateNum": "",
        "visitorTel": "",
        "visitorVehicleType": "car",
        //error
        "peopleCountError": "",
        "vehicleTypeNotesError": "",
        "visitorNameError": "",
        "visitorPlateNumError": "",
        "visitorTelError": "",
    }]);

    const newVisitorEntry = () => {
        setInput([...input, { 
            //Create New Object
            "peopleCount": "",
            "vehicleTypeNotes": "",
            "visitorName": "",
            "visitorPlateNum": "",
            "visitorTel": "",
            "visitorVehicleType": "car",
            //error
            "peopleCountError": "",
            "vehicleTypeNotesError": "",
            "visitorNameError": "",
            "visitorPlateNumError": "",
            "visitorTelError": "",
        }])
    }
    

    //Switch between visitor form and residential usage form
    const [filters, setFilters] = React.useState([
        { label: 'Visitor'},
        { label: 'Residential Usage'},
    ]);
    const [selected, setSelected] = React.useState(filters[0]);

    const callback = (data) => {
        if(data.index){
            setSelected(filters[data.index])
        }
        else if(data){
            if (selected === data) return setSelected(filters[0]);
            setSelected(data);   
        }
        else {
            setSelected(filters[0]);
        }
        
        setInput([ { 
            "peopleCount": "",
            "vehicleTypeNotes": "", //not required
            "visitorName": "",
            "visitorPlateNum": "",
            "visitorTel": "",
            "visitorVehicleType": "car",
            //error
            "peopleCountError": "",
            "vehicleTypeNotesError": "",
            "visitorNameError": "",
            "visitorPlateNumError": "",
            "visitorTelError": "",
        }]) 
        setAdditionalNotes("");
        setAdditionalNotesError("");
        setChecked(false);
        setScheduledArrive(moment().tz("Asia/Kuala_Lumpur").format("YYYY-MM-DD HH:mm:ss"));
        setScheduledArriveSelected("Select DateTime Picker");
        setScheduledDeparture(moment().tz("Asia/Kuala_Lumpur").format("YYYY-MM-DD HH:mm:ss"));
        setScheduledDepartureSelected("Select DateTime Picker");
        setDatetimeError("")
    };

    //states and static variable
    const [scheduledArrive, setScheduledArrive] = useState(moment().tz("Asia/Kuala_Lumpur").format("YYYY-MM-DD HH:mm:ss"))
    const [scheduledDeparture, setScheduledDeparture] = useState(moment().tz("Asia/Kuala_Lumpur").format("YYYY-MM-DD HH:mm:ss"));
    const [scheduledArriveSelected, setScheduledArriveSelected] = useState("Select DateTime Picker");
    const [scheduledDepartureSelected, setScheduledDepartureSelected] = useState("Select DateTime Picker");
    const [isArrivePickerVisible, setArrivePickerVisibility] = useState(false);
    const [isDeparturePickerVisible, setDeparturePickerVisibility] = useState(false);
    const [datetimeError, setDatetimeError] = useState("")

    const [additionalNotes, setAdditionalNotes] = useState("")
    const [additionalNotesError, setAdditionalNotesError] = useState("")

    const [isChecked, setChecked] = useState(false);

    const vehicle = [
        { label: 'Car', value: 'car' },
        { label: 'Motorcycle', value: 'motorcycle' },
        { label: 'Van', value: 'van' },
        { label: 'Heavy Vehicle', value: 'heavyvehicle' },
    ];
    const visitorvehicle = [
        { label: 'Car', value: 'car' },
        { label: 'Motorcycle', value: 'motorcycle' },
        { label: 'Van', value: 'van' },
    ];

    //datetime functions
    const setarrive = () => {
        setScheduledArriveSelected("true");
        setArrivePickerVisibility(true);
    };

    const setarrivecancel = () => {
        setScheduledArriveSelected("Select DateTime Picker")
        setArrivePickerVisibility(false);
    };

    const setdeparture = () => {
        setScheduledDepartureSelected("true");
        setDeparturePickerVisibility(true);
    };

    const setdeparturecancel = () => {
        setScheduledDepartureSelected("Select DateTime Picker")
        setDeparturePickerVisibility(false);
    };

    const handleConfirm = (datetime) => {
        if(scheduledArriveSelected=="true"){
            setArrivePickerVisibility(false)
            setDatetimeError("")
            setScheduledArrive(datetime)
            const dt=newdatetime(datetime.toString());
            setScheduledArriveSelected(dt[0]+" "+dt[1])
        }
        else if(scheduledDepartureSelected=="true"){
            setDeparturePickerVisibility(false)
            setDatetimeError("")
            setScheduledDeparture(datetime)
            const dt=newdatetime(datetime.toString());
            setScheduledDepartureSelected(dt[0]+" "+dt[1])
        }
    };

    const additionalnotesValidation = (data) => {
        const notesRegex = /^$|^[a-zA-Z][a-zA-Z0-9 ]+$/;
        if(data.length > 100000 || !notesRegex.test(data)){
            setAdditionalNotes(data)
            setAdditionalNotesError( "Invalid Character for Additional Notes field")
        }
        else{
            setAdditionalNotes(data)
            setAdditionalNotesError("")
        }
    }
    
    //error handling
    const errorfound= input.filter(i=>i.peopleCountError!=""||i.vehicleTypeNotesError!=""||i.visitorNameError!=""||i.visitorPlateNumError!=""||i.visitorTelError!="")

    const additionalerror= additionalNotesError.length>0 || scheduledArriveSelected=="Select DateTime Picker" || scheduledDepartureSelected=="Select DateTime Picker" ?true:false;

    //submit function
    const onPress = () => {
        // console.log(input)
        // console.log(scheduledArrive,scheduledDeparture,isChecked,additionalNotes)
        
        if(scheduledArrive>scheduledDeparture){
            setDatetimeError("Please ensure your scheduled departure datetime is after scheduled arrive datetime")
        }
        else{
            let visitorType = (selected.label == "Visitor") ? "1" : "2";
            let visitRequestTableWithCarObj = {
                visitRequestObj: {
                    expectedArriveDateTime: scheduledArrive,
                    expectedLeavingDateTime: scheduledDeparture,
                    walkInVisitor: isChecked ? 1 : 0,
                    additionalNotes: additionalNotes,
                    visitorType: visitorType
                },
                visitRequestCarList: input,
               
            }
            if(visitorType == "1") {
                postVisitor(visitRequestTableWithCarObj,errCallback,callback)
            }
            else {
                postResidentialUsage(visitRequestTableWithCarObj,errCallback,callback)
            }
            /* API function here*/
        }
    }
   
    return (
        <MyContainer screencontainer>
            <ScrollView showsVerticalScrollIndicator={false}>
            <MyContainer cardcontainer borderRadius5>
                <MyContainer conRow spacebetween>
                    {filters.map((filter) => (
                        <MyButton key={filter.label} title={filter.label} selected={filter === selected} h4 func={() => {
                              callback(filter);
                        }}  width45 border/>
                    ))}
                </MyContainer>
                <Spacer spacer/>

                {selected.label==="Residential Usage" ?
                //residential usage form
                <>
                <RegisterVisitorForm
                    resident

                    onConfirmArrive={handleConfirm}
                    onCancelArrive={setarrivecancel}
                    titleArrive={scheduledArriveSelected}
                    funcArrive={setarrive}
                    isArriveVisible={isArrivePickerVisible}

                    onConfirmDeparture={handleConfirm}
                    onCancelDeparture={setdeparturecancel}
                    titleDeparture={scheduledDepartureSelected}
                    funcDeparture={setdeparture}
                    isDepartureVisible={isDeparturePickerVisible}

                    datetimeError={datetimeError}

                    walkInAllowed={walkInAllowed}
                    WalkinValue={isChecked}
                    WalkinOnValueChange={setChecked}

                    additionalNotesValue={additionalNotes}
                    additionalNotesOnChange={additionalnotesValidation}
                    additionalNotesError={additionalNotesError}

                    input={input}
                    setInput={setInput}
                    vehicle={vehicle}
                    addVisitorFunc={newVisitorEntry}
                    errorfound={errorfound}
                    additionalerror={additionalerror}
                    submitFunc={onPress}
                />
                </>



                //Visitor Form
                :<>
                <RegisterVisitorForm
                    resident

                    onConfirmArrive={handleConfirm}
                    onCancelArrive={setarrivecancel}
                    titleArrive={scheduledArriveSelected}
                    funcArrive={setarrive}
                    isArriveVisible={isArrivePickerVisible}

                    onConfirmDeparture={handleConfirm}
                    onCancelDeparture={setdeparturecancel}
                    titleDeparture={scheduledDepartureSelected}
                    funcDeparture={setdeparture}
                    isDepartureVisible={isDeparturePickerVisible}

                    datetimeError={datetimeError}

                    walkInAllowed={walkInAllowed}
                    WalkinValue={isChecked}
                    WalkinOnValueChange={setChecked}

                    additionalNotesValue={additionalNotes}
                    additionalNotesOnChange={additionalnotesValidation}
                    additionalNotesError={additionalNotesError}

                    input={input}
                    setInput={setInput}
                    vehicle={visitorvehicle}
                    addVisitorFunc={newVisitorEntry}
                    errorfound={errorfound}
                    additionalerror={additionalerror}
                    submitFunc={onPress}
                />
                </>}
            </MyContainer>
            </ScrollView>
            </MyContainer>
    )};

    const styles = StyleSheet.create({
        errorMessage:{
            fontSize:14,
            color:colors.rejected,
        },
      });

export default RegisterVisitorScreen;
