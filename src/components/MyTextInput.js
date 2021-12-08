import React from 'react';
import {StyleSheet,TextInput,View} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Checkbox from 'expo-checkbox';

import colors from '../config/colors';
import adjust from '../config/adjust';

import MyText from './MyText';
import MyIcon from './MyIcon';
import { MyContainer } from './MyCard';
import Spacer
 from './Spacer';

const SearchInput = ({ label,defaultv, value, onChange,style,searchFunc}) => (
  <MyContainer conRow search>
    <MyText title={label}  h4P/>
    <TextInput 
      placeholder={defaultv} 
      value={value} 
      onChangeText={onChange} 
      style={[styles.searchinput,style]}
      // Modification for search function
      onEndEditing={searchFunc}
    />
    <MyContainer conRow flexend> 
    <MyIcon ION iconName="search" grey padding10 fontSize25/>
    </MyContainer>
  </MyContainer>  
);

const MyTextInput = ({label, placeholder, value, onChangeText, keyboardType, uneditable,style,secureTextEntry,...rest}) => (
  <>
    {label ?<MyText title={label} inputlabelP/> :null}
    <TextInput  
      placeholder={placeholder}
      value={value} 
      onChangeText={onChangeText}
      keyboardType={keyboardType} 
      style={[
        styles.textinput,
        uneditable && styles.uneditable,
        style]}
      secureTextEntry={secureTextEntry}
      {...rest}
    >
    </TextInput>
  </>
);

const MyPicker = ({label, value, onChange,items,style,...rest}) => (
  <>
    <MyText title={label} inputlabelP/>
    <View style={styles.textinput}>
    <Picker 
    selectedValue={value} 
    onValueChange={onChange} 
    useNativeAndroidPickerStyle={false}
    style={{padding:20}}
    {...rest}
    >
      {items.map(item => (
        <Picker.Item key={item.value} label={item.label} value={item.value} />
      ))}
    </Picker>
    </View>
  </>
);

const MyCheckBox = ({label, value, onValueChange,style,grey1,...rest}) => (
  <MyContainer conRow flexstart>
    <Checkbox
          style={style}
          value={value}
          onValueChange={onValueChange}
          color={grey1?colors.grey:colors.mainColor}
          {...rest}
    />
    <MyText title={label} inputlabelP/>
  </MyContainer>
);

const styles = StyleSheet.create({

    textinput:{
      borderColor:colors.mainColor,
      borderWidth:1,
      borderRadius:2,
      fontSize:adjust(16), 
      paddingLeft:5
    },
    uneditable:{
      backgroundColor:colors.grey,
    },
    searchinput:{
      flex:1,
      flexDirection: 'row',
      justifyContent:"flex-start",
      fontSize:adjust(16), 
    },
    row:{
      flexDirection:"row",
      alignItems:"center"
    }
})

export {SearchInput,MyTextInput,MyPicker,MyCheckBox};