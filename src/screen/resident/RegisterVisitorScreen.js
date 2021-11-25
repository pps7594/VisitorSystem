//import library
import React, { useState, useEffect, useContext } from 'react';
import {View, ScrollView, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import moment from "moment-timezone";

//import component
import Spacer from '../../components/Spacer';
import MyText from '../../components/MyText';
import {MyTextInput,MyPicker, MyCheckBox} from '../../components/MyTextInput';
import {MyButton} from '../../components/MyButton';
import MyIcon from '../../components/MyIcon';
import MyDateTimePicker from '../../components/MyDateTimePicker';
import { MyContainer } from '../../components/MyCard';

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
            "visitorVehicleTypeError": "",
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
        "visitorVehicleTypeError": "",
    }]);

    const updateVisitorEntry = (fieldName, data, targetIndex) => {
        input[targetIndex] = {...input[targetIndex], [fieldName]: data}
        setInput([ ...input])
    }

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
            "visitorVehicleTypeError": "",
        }])
    }
    const deleteVisitorEntry = (targetIndex) => {
        input.splice(targetIndex,1)
        setInput([ ...input])
        
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
            "visitorVehicleType": "car",//check again
            //error
            "peopleCountError": "",
            "vehicleTypeNotesError": "",
            "visitorNameError": "",
            "visitorPlateNumError": "",
            "visitorTelError": "",
            "visitorVehicleTypeError": "",
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
    const [isArriveDatePickerVisible, setArriveDatePickerVisibility] = useState(false);
    const [isDepartureDatePickerVisible, setDepartureDatePickerVisibility] = useState(false);
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
        setArriveDatePickerVisibility(true);
    };

    const setarrivecancel = () => {
        setScheduledArriveSelected("Select DateTime Picker")
        setArriveDatePickerVisibility(false);
    };

    const setdeparture = () => {
        setScheduledDepartureSelected("true");
        setDepartureDatePickerVisibility(true);
    };

    const setdeparturecancel = () => {
        setScheduledDepartureSelected("Select DateTime Picker")
        setDepartureDatePickerVisibility(false);
    };

    const handleConfirm = (datetime) => {
        if(scheduledArriveSelected=="true"){
            setScheduledArrive(datetime)
            const dt=newdatetime(datetime.toString());
            setScheduledArriveSelected(dt[0]+" "+dt[1])
            setArriveDatePickerVisibility(false)
            setDatetimeError("")
        }
        else if(scheduledDepartureSelected=="true"){
            setDatetimeError("")
            setScheduledDeparture(datetime)
            setScheduledDepartureSelected(datetime.toString())
            setDepartureDatePickerVisibility(false)
            setDatetimeError("")
        }
    };

    //validations
    const additionalnotesValidation = (data) => {
        const notesRegex = /^$|^[a-zA-Z][a-zA-Z ]+$/;
        if(data.length > 100000 || !notesRegex.test(data)){
            setAdditionalNotes(data)
            setAdditionalNotesError( "Invalid Character for Additional Notes field")
        }
        else{
            setAdditionalNotes(data)
            setAdditionalNotesError("")
        }
    }

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
        const carplateRegex = /^(?:[A-Za-z]+\d+)$/;
        if(data.length < 4 || data.length > 20 || !carplateRegex.test(data)){
            input[targetIndex] = {...input[targetIndex], [fieldName]:data.toUpperCase(),"visitorPlateNumError": "Invalid Car Plate Number"}
            setInput([ ...input])
        }
        else{
            input[targetIndex] = {...input[targetIndex], [fieldName]: data.toUpperCase(), "visitorPlateNumError": ""}
            setInput([ ...input])
        }
    }

    const notesValidation = (fieldName, data, targetIndex) => {
        const notesRegex = /^$|^[a-zA-Z][a-zA-Z ]+$/;
        if(data.length <= 0 || data.length > 100000 || !notesRegex.test(data)){
            input[targetIndex] = {...input[targetIndex], [fieldName]:data,"vehicleTypeNotesError": "Only Alphabets and spaces are allowed"}
            setInput([ ...input])
        }
        else{
            input[targetIndex] = {...input[targetIndex], [fieldName]: data, "vehicleTypeNotesError": ""}
            setInput([ ...input])
        }
    }
    
    //error handling
    const errorfound= input.filter(i=>i.peopleCount==""||i.visitorName==""||i.visitorPlateNum==""||i.visitorTel==""||i.     visitorVehicleType==""||i.peopleCountError!=""||i.vehicleTypeNotesError!=""||i.visitorNameError!=""||i.visitorPlateNumError!=""||i.visitorTelError!=""||i.visitorVehicleTypeError!=""||i.vehicleTypeNotesError!="")

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
                        }} height40 width45 border/>
                    ))}
                </MyContainer>
                <Spacer spacer/>

                {selected.label==="Residential Usage" ?
                //residential usage form
                <View>
                <MyText title="Fields marked with an asterisk (*) are required."  pR3I/>
                <Spacer space10/>
                <MyDateTimePicker 
                    label="Scheduled Arrive Date Time: *"
                    onConfirm={handleConfirm}
                    onCancel={setarrivecancel}
                    title={scheduledArriveSelected}
                    func={setarrive}
                    isVisible={isArriveDatePickerVisible}
                />
                <Spacer space10/>
                <MyDateTimePicker 
                    label="Scheduled Departure Date Time: *"
                    onConfirm={handleConfirm}
                    onCancel={setdeparturecancel}
                    title={scheduledDepartureSelected}
                    func={setdeparture}
                    isVisible={isDepartureDatePickerVisible}
                />
                {datetimeError && datetimeError.length > 0 ? <Text style={styles.errorMessage}> {datetimeError}</Text>:null}
                <Spacer space10/>
                {walkInAllowed===1?<><MyCheckBox 
                label="Walk-in Visitor"
                value={isChecked}
                onValueChange={setChecked}
                />
                <Spacer space10/></>:null}
                <MyTextInput  
                placeholder="Additional Notes Here..."
                value={additionalNotes} 
                onChangeText={additionalnotesValidation}
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
                            <MyTextInput  
                                label="Name: *"
                                value={item.visitorName}
                                onChangeText={(value) => nameValidation("visitorName",value,index)}
                            />
                            {item.visitorNameError && item.visitorNameError.length > 0 ? <Text style={styles.errorMessage}>{item.visitorNameError}</Text>:null}
                            <Spacer space10/>
                            <MyTextInput  
                                label="Phone Number: *"
                                value={item.visitorTel} 
                                onChangeText={ (value) => phoneValidation("visitorTel",value,index)}
                            />
                            {item.visitorTelError && item.visitorTelError.length > 0 ? <Text style={styles.errorMessage}>{item.visitorTelError}</Text>:null}
                            <Spacer space10/>
                            <MyTextInput  
                                label="No of Visitor: *"
                                value={item.peopleCount} 
                                onChangeText={ (value) => peopleCountValidation("peopleCount",value,index)}
                            />
                            {item.peopleCountError && item.peopleCountError.length > 0 ? <Text style={styles.errorMessage}>{item.peopleCountError}</Text>:null}
                            <Spacer space10/>
                            <MyTextInput  
                                label="Car Plate Number: *"
                                value={item.visitorPlateNum} 
                                onChangeText={ (value) => carplateValidation("visitorPlateNum",value,index)}
                            />
                            {item.visitorPlateNumError && item.visitorPlateNumError.length > 0 ? <Text style={styles.errorMessage}>{item.visitorPlateNumError}</Text>:null}
                            <Spacer space10/>
                            <MyPicker  
                                label="Vehicle Type: "
                                items={vehicle}
                                value={item.visitorVehicleType}
                                onChange={ (value) => updateVisitorEntry("visitorVehicleType",value,index)}
                            />
                            <Spacer space10/>
                            <MyTextInput  
                                label="Vehicle Type Notes: "
                                placeholder="Vehicle Type Notes Here..."
                                value={item.vehicleTypeNotes} 
                                onChangeText={ (value) => notesValidation("vehicleTypeNotes",value,index)}
                                style={{justifyContent: "flex-start"}}
                                multiline={true}
                                numberOfLines={3}
                            />
                            {item.vehicleTypeNotesError && item.vehicleTypeNotesError.length > 0 ? <Text style={styles.errorMessage}>{item.vehicleTypeNotesError}</Text>:null}
                            <Spacer m20/>
                            
                        </View>
                    })
                }
                <MyButton title="Add Visitor" height40 borderradius30 row pP2 icon func={newVisitorEntry} selected/>
                <Spacer spacer/>
                {errorfound.length>0 || additionalerror==true?
                <MyButton title="Submit" height40 borderradius30 row pP2 func={onPress} disabled inactive/>
                :<MyButton title="Submit" height40 borderradius30 row pP2 func={onPress} selected />
                }
                </View>



                //Visitor Form
                :<View>
                <MyText title="Fields marked with an asterisk (*) are required."  pR3I/>
                <Spacer space10/>
                <MyDateTimePicker 
                    label="Scheduled Arrive Date Time: *"
                    onConfirm={handleConfirm}
                    onCancel={setarrivecancel}
                    title={scheduledArriveSelected}
                    func={setarrive}
                    isVisible={isArriveDatePickerVisible}
                />
                <Spacer space10/>
                <MyDateTimePicker 
                    label="Scheduled Departure Date Time: *"
                    onConfirm={handleConfirm}
                    onCancel={setdeparturecancel}
                    title={scheduledDepartureSelected}
                    func={setdeparture}
                    isVisible={isDepartureDatePickerVisible}
                />
                 {datetimeError && datetimeError.length > 0 ? <Text style={styles.errorMessage}> {datetimeError}</Text>:null}
                <Spacer space10/>
                {walkInAllowed===1?<><MyCheckBox 
                label="Walk-in Visitor"
                value={isChecked}
                onValueChange={setChecked}
                />
                <Spacer space10/></>:null}
                <MyTextInput  
                placeholder="Additional Notes Here..."
                value={additionalNotes} 
                onChangeText={additionalnotesValidation}
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
                            <MyTextInput  
                                label="Name: *"
                                value={item.visitorName}
                                onChangeText={(value) => nameValidation("visitorName",value,index)}
                            />
                            {item.visitorNameError && item.visitorNameError.length > 0 ? <Text style={styles.errorMessage}>{item.visitorNameError}</Text>:null}
                            <Spacer space10/>
                            <MyTextInput  
                                label="Phone Number: *"
                                value={item.visitorTel} 
                                onChangeText={ (value) => phoneValidation("visitorTel",value,index)}
                            />
                            {item.visitorTelError && item.visitorTelError.length > 0 ? <Text style={styles.errorMessage}>{item.visitorTelError}</Text>:null}
                            <Spacer space10/>
                            <MyTextInput  
                                label="No of Visitor: *"
                                value={item.peopleCount} 
                                onChangeText={ (value) => peopleCountValidation("peopleCount",value,index)}
                            />
                            {item.peopleCountError && item.peopleCountError.length > 0 ? <Text style={styles.errorMessage}>{item.peopleCountError}</Text>:null}
                            <Spacer space10/>
                            <MyTextInput  
                                label="Car Plate Number: *"
                                value={item.visitorPlateNum} 
                                onChangeText={ (value) => carplateValidation("visitorPlateNum",value,index)}
                            />
                            {item.visitorPlateNumError && item.visitorPlateNumError.length > 0 ? <Text style={styles.errorMessage}>{item.visitorPlateNumError}</Text>:null}
                            <Spacer space10/>
                            <MyPicker  
                                label="Vehicle Type: "
                                items={visitorvehicle}
                                value={item.visitorVehicleType}
                                onChange={ (value) => updateVisitorEntry("visitorVehicleType",value,index)}
                            />
                            <Spacer m20/>
                            
                        </View>
                    })
                }
                <MyButton title="Add Visitor" height40 borderradius30 row pP2 icon func={newVisitorEntry} selected/>
                <Spacer spacer/>
                {errorfound.length>0 || additionalerror==true?
                <MyButton title="Submit" height40 borderradius30 row pP2 func={onPress} disabled inactive/>
                :<MyButton title="Submit" height40 borderradius30 row pP2 func={onPress} selected />
                }
                </View>}
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
