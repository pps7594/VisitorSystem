import React from 'react';
import {View,StyleSheet} from 'react-native';

const Spacer = ({children,spacer,m20,m50,space,height,space10,space50}) => {
    return <View style={[
        spacer && styles.spacer, 
        m20 && styles.spacer20, 
        m50 && styles.spacer50,
        space && styles.space,
        height && styles.height,
        space10 && styles.space10,
        space50 && styles.space50
        ]}>
    {children}
    </View>
};

const styles = StyleSheet.create({
    spacer:{
        margin :10,
    },
    spacer20:{
        margin :20,
    },
    spacer50:{
        margin :50,
    },
    space: {
        width: 5,
        height: 5,
    },
    height: {
        width: 5,
        height: 35,
    },
    space10: {
        width: 10,
        height: 10,
    },
    space50: {
        width: 50,
        height: 0,
    },
})

export default Spacer;