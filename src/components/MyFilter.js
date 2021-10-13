import React from 'react';
import {StyleSheet,View,TouchableOpacity,Text} from 'react-native';

import Spacer from './Spacer';
import {MyButton} from './MyButton';
import {SearchInput} from './MyTextInput';
import {MyContainer} from './MyCard';

const MyFilter = ({sourceFunc,input,setInput,searchFunc}) => {
    //sourceFunc is the function from the screen (source)
    const [filters, setFilters] = React.useState([
        { label: 'ALL' ,time:null},
        { label: 'Today' ,time:"today"},
        { label: 'Week' ,time:"week"},
        { label: 'Month' ,time:"month"},
      ]);

    const [selected, setSelected] = React.useState(filters[0]);

    const callback = (data) => {
        if (selected === data) return setSelected(filters[0]);
        setSelected(data);
      };
    
    return <View>
            <MyContainer conRow spacebetween>
                {filters.map((filter) => (
                    <MyButton key={filter.label}title={filter.label} selected={filter === selected} h4 func={() => {
                              callback(filter);sourceFunc({timeframe : filter.time});
                    }} height40 width23 border/>
                ))}
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