import React, { useState } from "react";
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment-timezone";

import MyText from './MyText';
import { MyButton } from "./MyButton";

const MyDateTimePicker = ({label,title,onConfirm,onCancel,func,isVisible}) => {0
  const handleConfirm = (datetime) => {
    var d = datetime;
    console.log(d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds()); // Hours
    console.log("A date has been picked: ", datetime,);
    console.log("PST:", moment(datetime).tz("Asia/Kuala_Lumpur").format("YYYY-MM-DD HH:mm:ss"));
    hideDatePicker();
  };

var today = new Date()
// returns the month (from 0 to 11)
var month = today.getMonth() + 1
// returns the day of the month (from 1 to 31)
var day = today.getDate()
// returns the year (four digits)
var year = today.getFullYear()

  return <>
    <MyText title={label}  inputlabelP/>
    <MyButton title={title}  height40 row pP2 func={func} buttonstyle={{borderRadius:2}} selected/>

      <DateTimePickerModal
        minimumDate={new Date(year,month,day)} 
        isVisible={isVisible}
        mode="datetime"
        onConfirm={onConfirm}
        onCancel={onCancel}
        style={{backgroundColor:"purple"}}
      />
    </>
 
};

export default MyDateTimePicker;