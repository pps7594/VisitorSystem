import React, { useState, useEffect} from 'react';
import {ScrollView,Text} from 'react-native';
import { useDispatch, useSelector } from "react-redux";

//import component
import Spacer from '../../components/Spacer';
import {MyButton} from '../../components/MyButton';
import { MyContainer } from '../../components/MyCard';
import RegisterVisitorForm from '../../components/RegisterVisitorForm';

//import config
import colors from '../../config/colors';

//import function
import guardFunction from '../../functions/guardFunction';

const EmergencyServiceScreen = ({navigation}) => {
    const {guardWalkInAllowed} = guardFunction();
    const walkInAllowed = useSelector((state) => state.guard.walkinallowed); 

    // Helper Function
    const errCallback = ({msg}) => {
        alert(msg)
    }

    useEffect(() => {
        // Trigger the API call every time we navigate to this screen, as a Event listener
        navigation.addListener('focus', () => guardWalkInAllowed({errCallback}));
        /* Reset the form everytime they enter the screen */
        // Form Section
        // Visitor Entry Section
        setInput([ { 
            "peopleCount": "",
            "visitorName": "",
            "visitorPlateNum": "",
            "visitorTel": "",
            "visitorVehicleType": "car",
            //error
            "peopleCountError": "",
            "visitorNameError": "",
            "visitorPlateNumError": "",
            "visitorTelError": "",
        }]) 
        setAdditionalNotes("");
        setAdditionalNotesError("");
    }, []);

    const [input, setInput] = useState([{
        // "visitRequestCarID": "",
        //  "visitRequestID": "",
        // These two will be inserted when posting the data onto server.
        "peopleCount": "",
        "visitorName": "",
        "visitorPlateNum": "",
        "visitorTel": "",
        "visitorVehicleType": "car",
        "driverLicense":"",
        //error
        "peopleCountError": "",
        "visitorNameError": "",
        "visitorPlateNumError": "",
        "visitorTelError": "",
        "driverLicenseError":"",
    }]);

    const [isChecked, setChecked] = useState(false);
    const [additionalNotes, setAdditionalNotes] = useState("")
    const [additionalNotesError, setAdditionalNotesError] = useState("")
    const vehicle = [
        { label: 'Ambulance', value: 'ambulance' },
        { label: 'Fire Brigade', value: 'firebrigade' },
        { label: 'Police Vehicle', value: 'policevehicle' },
        { label: 'Billing Vehicle', value: 'billingvehicle' },
    ];

    const newVisitorEntry = () => {
        setInput([...input, { 
            //Create New Object
            "peopleCount": "",
            "visitorName": "",
            "visitorPlateNum": "",
            "visitorTel": "",
            "visitorVehicleType": "car",
            "driverLicense":"",
            //error
            "peopleCountError": "",
            "visitorNameError": "",
            "visitorPlateNumError": "",
            "visitorTelError": "",
            "driverLicenseError":"",
        }])
    }

    //Switch between visitor form and residential usage form
    const [filters, setFilters] = React.useState([
        { label: 'Vehicle'},
        { label: 'Walk-In'},
    ]);
    const [selected, setSelected] = React.useState(filters[1]);

    const callback = (data) => {
        if (selected === data) return setSelected(filters[0]);
        setSelected(data);
        setInput([ { 
            "peopleCount": "",
            "visitorName": "",
            "visitorPlateNum": "",
            "visitorTel": "",
            "visitorVehicleType": "car",
            //error
            "peopleCountError": "",
            "visitorNameError": "",
            "visitorPlateNumError": "",
            "visitorTelError": "",
        }]) 
        setAdditionalNotes("");
        setAdditionalNotesError("");
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
    const errorfound= input.filter(i=>i.peopleCountError!=""||i.visitorNameError!=""||i.visitorPlateNumError!=""||i.visitorTelError!="")

    const additionalerror= additionalNotesError.length>0 ?true:false;

    //submit function
    const onPress = () => {
        console.log(input)
        console.log(additionalNotes)
        /* API function here*/
        
    }

    // Console log here to show what it returns
    console.log(walkInAllowed)

    return (
        <MyContainer screencontainer>
        <ScrollView showsVerticalScrollIndicator={false}>
        <MyContainer cardcontainer borderRadius5>
            <MyContainer conRow spacebetween>
                {walkInAllowed&&walkInAllowed==1?
                filters.map((filter) => (
                    <MyButton key={filter.label} title={filter.label} selected={filter === selected} h4 func={() => {
                        callback(filter);
                    }} height40 width45 border/>
                ))
                :null}
            </MyContainer>
            <Spacer spacer/>

            {selected&&selected.label==="Vehicle" ?
            <>
            <RegisterVisitorForm
                walkInAllowed={walkInAllowed}
                WalkinValue={isChecked}
                WalkinOnValueChange={setChecked}

                additionalNotesValue={additionalNotes}
                additionalNotesOnChange={additionalnotesValidation}
                additionalNotesError={additionalNotesError}
                
                emergency
                input={input}
                setInput={setInput}
                vehicle={vehicle}
                addVisitorFunc={newVisitorEntry}
                errorfound={errorfound}
                additionalerror={additionalerror}
                submitFunc={onPress}
            />
            </>

            //Walkin
            :<>
            <RegisterVisitorForm
                emergencywalkin
                walkInAllowed={walkInAllowed}
                WalkinValue={true}
                walkinDisabled
                additionalNotesValue={additionalNotes}
                additionalNotesOnChange={additionalnotesValidation}
                additionalNotesError={additionalNotesError}
                
                input={input}
                setInput={setInput}
                addVisitorFunc={newVisitorEntry}
                errorfound={errorfound}
                additionalerror={additionalerror}
                submitFunc={onPress}
            />
            </>}
        </MyContainer>
        </ScrollView>
        </MyContainer>
    )
};

export default EmergencyServiceScreen;
