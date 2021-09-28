import React, { useState } from "react";
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import MyText from './MyText';
import { MyButton } from "./MyButton";

const MyDateTimePicker = ({label}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (datetime) => {
    var d = datetime;
    console.log(d.getUTCHours()); // Hours
    console.log(d.getUTCMinutes());
    console.log(d.getUTCSeconds());
    console.warn("A date has been picked: ", datetime,);
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
    <MyButton title="Select DateTime Picker"  height40 row pP2 func={showDatePicker} buttonstyle={{borderRadius:2}}/>
      <DateTimePickerModal
        minimumDate={new Date(year,month,day)} 
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        style={{backgroundColor:"purple"}}
      />
    </>
 
};

export default MyDateTimePicker;