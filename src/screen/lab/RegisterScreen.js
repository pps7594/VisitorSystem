import React, { useState, useEffect, useContext } from 'react';
import {StyleSheet, View, ScrollView, FlatList, Text} from 'react-native';


//import component
import Spacer from '../../components/Spacer';
import MyText from '../../components/MyText';
import {MyTextInput,MyPicker, MyCheckBox} from '../../components/MyTextInput';
import {AddButton, FilterButton, VisitorButton} from '../../components/MyButton';
import {MCIcon} from '../../components/MyIcon';
import MyDateTimePicker from '../../components/MyDateTimePicker';


import colors from '../../config/colors';

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
    
    visitorB = () => { setVisitor(true); setResidential(false);}

    residentialB = () => { setResidential(true); setVisitor(false);}

    onPress = () => {null}


    
    return <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.cardContainer}>
            <View style={styles.row}>
                {Visitor ?<FilterButton title="Visitor" h4 active buttonstyle={styles.button} />
                :<FilterButton title="Visitor" h4 buttonstyle={styles.button}  />}
                {Residential ?<FilterButton title="Residential Usage" h4 active buttonstyle={styles.button} />
                :<FilterButton title="Residential Usage" h4 buttonstyle={styles.button} />}
            </View>
                <Spacer/>
                <MyText title="Fields marked with an asterisk (*) are required."  pR3I/>
                <View style={styles.space} />
                <MyDateTimePicker 
                    label="Scheduled Arrive Date Time: *"
                />
                <View style={styles.space} />
                <MyDateTimePicker 
                    label="Scheduled Departure Date Time: *"
                />
                <View style={styles.space} />
                <MyCheckBox 
                label="Walk-in Visitor"
                value={isChecked}
                onValueChange={setChecked}
                />
                <View style={styles.space} />
                <MyTextInput  
                placeholder="Additional Notes Here..."
                value={vehicleNotes} 
                onChangeText={setVehicleNotes}
                multiline={true}
                numberOfLines={3}
                />
                <Spacer /><Spacer />
            <View style={styles.rowCenter}>
                <View style={styles.left}></View>
                <MyText title="Create New Visitor" h3P/>
                <View style={styles.right}>
                <MCIcon nocontainer iconName="delete-forever" deletet />
                </View>
            </View>
                <View style={styles.space} />
                <MyTextInput  
                label="Name: *"
                value={input} 
                onChangeText={setInput}
                />
                <View style={styles.space} />
                <MyTextInput  
                label="Phone Number: *"
                value={input} 
                onChangeText={setInput}
                />
                <View style={styles.space} />
                <MyTextInput  
                label="No of Visitor: *"
                value={input} 
                onChangeText={setInput}
                />
                <View style={styles.space} />
                <MyTextInput  
                label="Car Plate Number: *"
                value={input} 
                onChangeText={setInput}
                />
                <View style={styles.space} />
                <MyPicker  
                label="Vehicle Type: "
                items={countries}
                value={select} 
                onChangeText={setSelect}
                />
                <View style={styles.space} />
                <MyTextInput  
                label="Vehicle Type Notes: "
                value={vehicleNotes} 
                onChangeText={setVehicleNotes}
                style={{justifyContent: "flex-start"}}
                multiline={true}
                numberOfLines={3}
                />
                <Spacer />
                <AddButton title="Add Visitor" text icon func={onPress}/>
                <View style={styles.space} />
                <AddButton title="Submit" text func={onPress}/>
            </View>
            </ScrollView>
            </View>

};


 const styles = StyleSheet.create({

    container:{
        flex:1,
        padding:10,
    },
    cardContainer:{
        backgroundColor: colors.white,
        width:"100%",
        borderRadius: 5,
        padding:10,
    },
    button:{
        width:"45%",
        height:40
    },
    row:{
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    rowCenter:{
        flexDirection: "row",
    },
    left:{
        flex:1,
        flexDirection: "row",
        justifyContent: 'flex-start',
    },
    right:{
        flex:1,
        flexDirection: "row",
        justifyContent: 'flex-end',
    },
    space: {
        width: 5,
        height: 5,
    },
 });

 export default RegisterScreen;