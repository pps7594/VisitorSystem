import React from 'react';
import {StyleSheet,View} from 'react-native';

import Spacer from './Spacer';
import {FilterButton} from './MyButton';
import {SearchInput} from './MyTextInput';

const MyFilter = ({style,input,setInput}) => {
    
    return <View style={style}>
        <View style={styles.row}>
            <FilterButton title="All" h4 active/>
            <FilterButton title="Today" h4 />
            <FilterButton title="Month" h4 />
            <FilterButton title="Week" h4 />
        </View>
            <Spacer />
            <SearchInput 
                iconName="search"
                defaultv="Search"
                value={input} 
                onChange={setInput}
            />
            </View>
};



const styles = StyleSheet.create({
    row:{
        flexDirection:"row",
        justifyContent:"space-between"
    }
})

export default MyFilter;