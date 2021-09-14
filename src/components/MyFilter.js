import React from 'react';
import {StyleSheet,View} from 'react-native';

import Spacer from './Spacer';
import {FilterButton} from './MyButton';
import {SearchInput} from './MyTextInput';
import {MyContainer} from './MyCard';

const MyFilter = ({input,setInput}) => {
    return <View>
            <MyContainer conRow spacebetween>
                <FilterButton title="All" h4 active/>
                <FilterButton title="Today" h4 />
                <FilterButton title="Month" h4 />
                <FilterButton title="Week" h4 />
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