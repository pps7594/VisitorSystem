import React from 'react';
import {StyleSheet,View} from 'react-native';

import Spacer from './Spacer';
import {FilterButton} from './MyButton';
import {SearchInput} from './MyTextInput';
import {MyContainer} from './MyCard';

const MyFilter = ({sourceFunc, input,setInput}) => {
    //sourceFunc is the function from the screen (source)
    return <View>
            <MyContainer conRow spacebetween>
                <FilterButton title="All" h4 func={() => sourceFunc({timeframe : null})} active/>
                <FilterButton title="Today" h4 func={() => sourceFunc({timeframe : "today"})}/>         
                <FilterButton title="Week" h4 func={() => sourceFunc({timeframe : "week"})}/>
                <FilterButton title="Month" h4 func={() => sourceFunc({timeframe : "month"})}/>
            </MyContainer>
            <Spacer spacer/>
            <SearchInput 
                iconName="search"
                defaultv="Search"
                value={input} 
                onChange={setInput}
            />
            </View>
};

export default MyFilter;