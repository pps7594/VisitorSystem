import React from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import MyText from './MyText';
import { MyButton } from "./MyButton";

import colors from "../config/colors"

const MyDateTimePicker = ({label,title,onConfirm,onChange,onCancel,func,isVisible}) => {

  return <>
    <MyText title={label}  inputlabelP/>
    <MyButton title={title}  height40 row pP2 func={func} buttonstyle={{borderRadius:2}} selected/>

      <DateTimePickerModal
        minimumDate={new Date(Date.now())} 
        isVisible={isVisible}
        mode="datetime"
        onConfirm={onConfirm}
        onChange={onChange}
        onCancel={onCancel}
        style={{backgroundColor:colors.mainColor}}
      />
    </>
 
};

export default MyDateTimePicker;