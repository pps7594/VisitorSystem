import React from 'react';
import {StyleSheet,TextInput,View} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Checkbox from 'expo-checkbox';

import colors from '../config/colors';
import MyText from './MyText';
import MyIcon from './MyIcon';
import adjust from '../config/adjust';

  const SearchInput = ({ label,defaultv, value, onChange,style,iconName }) => (
    <View style={styles.container}>
    <MyText title={label}  h4P/>
    <TextInput 
    placeholder={defaultv} 
    value={value} 
    onChangeText={onChange} 
    style={[styles.searchinput,style]}/>
    <MyIcon ION nocontainer iconName="search" style={styles.icon}search/>
  </View>  
);

const MyTextInput = ({label, placeholder, value, onChangeText,style,...rest}) => (
  <View>
    {label ?<MyText title={label} inputlabelP/> :null}
    <TextInput  
      placeholder={placeholder}
      value={value} 
      onChangeText={onChangeText} 
      style={[styles.textinput,style]}
      {...rest}>
      
    </TextInput>
  </View>
);

const MyPicker = ({label, value, onChange,items,style,...rest}) => (
  <View>
    <MyText title={label} inputlabelP/>
    <View style={styles.textinput}>
    <Picker 
    selectedValue={value} 
    onValueChange={onChange} 
    useNativeAndroidPickerStyle={false}
    style={{padding:20}}
    >
      {items.map(item => (
        <Picker.Item key={item.value} label={item.label} value={item.value} />
      ))}
    </Picker>
    </View>
  </View>
);

const MyCheckBox = ({label, value, onValueChange,style,...rest}) => (
  <View style={styles.checkcontainer}>
    
    <Checkbox
          style={style}
          value={value}
          onValueChange={onValueChange}
          color={colors.mainColor}
          {...rest}
    />
    <MyText title={label} inputlabelP/>
  </View>
);

const styles = StyleSheet.create({
    container:{
      flexDirection: 'row',
      alignItems: 'center',
      borderColor:colors.grey,
      borderWidth:1,
      borderRadius:10,
      paddingLeft:10,
    },
    checkcontainer:{
      flexDirection: 'row',
      alignItems: 'center',
    },
    textinput:{
      borderColor:colors.mainColor,
      borderWidth:1,
      borderRadius:2,
      fontSize:adjust(16), 
      textAlignVertical: "top"
    },
    searchinput:{
      flex:1,
      flexDirection: 'row',
      justifyContent:"flex-start",
      fontSize:adjust(16), 
    },
    icon:{
      flexDirection: 'row',
      justifyContent:"flex-end",
    },
})

export {SearchInput,MyTextInput,MyPicker,MyCheckBox};