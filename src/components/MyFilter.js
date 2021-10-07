import React from 'react';
import {StyleSheet,View} from 'react-native';

import Spacer from './Spacer';
import {MyButton} from './MyButton';
import {SearchInput} from './MyTextInput';
import {MyContainer} from './MyCard';

const MyFilter = ({sourceFunc,input,setInput,searchFunc}) => {
    //sourceFunc is the function from the screen (source)
    return <View>
            <MyContainer conRow spacebetween>
                <MyButton title="All" height40 width23 border active h4 func={() => sourceFunc({timeframe : null})} />
                <MyButton title="Today" height40 width23 border white inactive h4 func={() => sourceFunc({timeframe : "today"})}/>         
                <MyButton title="Week" height40 width23 border white inactive h4 func={() => sourceFunc({timeframe : "week"})}/>
                <MyButton title="Month" height40 width23 border white inactive h4 func={() => sourceFunc({timeframe : "month"})}/>
            </MyContainer>
            <Spacer spacer/>
            <SearchInput 
                iconName="search"
                defaultv="Search"
                value={input} 
                onChange={setInput}
                searchFunc = {searchFunc}
            />
            </View>
};

export default MyFilter;