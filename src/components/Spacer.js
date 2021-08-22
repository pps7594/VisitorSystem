import React from 'react';
import {View,StyleSheet} from 'react-native';

const Spacer = ({children,m50}) => {
    return <View style={[styles.spacer, m50 && styles.spacer50]}>
    {children}
    </View>
};

const styles = StyleSheet.create({
    spacer:{
        margin :10,
    },
    spacer50:{
        margin :50,
    }
})

export default Spacer;
