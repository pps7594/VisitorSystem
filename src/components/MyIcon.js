import React from 'react';
import {StyleSheet,TouchableOpacity,View} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import colors from '../config/colors';
import MyText from './MyText';

const MyIcon = ({FA,MC,ION,icon,square,main,iconName,title,white,black,grey,padding5,padding10,padding15,fontSize15,fontSize20,fontSize25,fontSize30,fontSize45,type1,type2,type3,type4,type5,viewstyle,style}) => {

    return <View style={[
        icon && styles.iconContainer,
        square && styles.squareContainer,
        type1 && styles.type1,
        type2 && styles.type2,
        type3 && styles.type3,
        type4 && styles.type4,
        type5 && styles.type5,
        main && styles.main,
        viewstyle
    ]}>
        {FA ?<FontAwesome5 name={iconName}  style={[
        white && styles.white,
        black && styles.black,
        grey && styles.grey,
        padding5 && styles.padding5,
        padding10 && styles.padding10,
        padding15 && styles.padding15,
        fontSize15 && styles.fontSize15,
        fontSize20 && styles.fontSize20,
        fontSize25 && styles.fontSize25,
        fontSize30 && styles.fontSize30,
        fontSize45 && styles.fontSize45,
        style]}/> :null}
        {title ?<MyText title={title} h3P style={[
            styles.white,styles.padding5,styles.fontSize25,
            style]}/>:null}
        {MC ?<MaterialCommunityIcons name={iconName}  style={[
        white && styles.white,
        black && styles.black,
        grey && styles.grey,
        padding5 && styles.padding5,
        padding10 && styles.padding10,
        padding15 && styles.padding15,
        fontSize15 && styles.fontSize15,
        fontSize20 && styles.fontSize20,
        fontSize25 && styles.fontSize25,
        fontSize30 && styles.fontSize30,
        fontSize45 && styles.fontSize45,
        style]}/> :null}
        {title ?<MyText title={title} h3P style={[
            styles.white,styles.padding5,styles.fontSize25,
            style]}/>:null}
        {ION ?<Ionicons name={iconName}  style={[
        white && styles.white,
        black && styles.black,
        grey && styles.grey,
        padding5 && styles.padding5,
        padding10 && styles.padding10,
        padding15 && styles.padding15,
        fontSize15 && styles.fontSize15,
        fontSize20 && styles.fontSize20,
        fontSize25 && styles.fontSize25,
        fontSize30 && styles.fontSize30,
        fontSize45 && styles.fontSize45,
        style]}/> :null}
        {title ?<MyText title={title} h3P style={[
            styles.white,styles.padding5,styles.fontSize25,
            style]}/>:null}
    </View>
};



const styles = StyleSheet.create({
    iconContainer:{
        backgroundColor: colors.iconBackground,
        width:50,
        height:50,
        borderRadius: 50, 
    },
    squareContainer:{
        width:30,
        height:30,
        borderRadius: 10, 
    },
    main:{
        backgroundColor: colors.mainColor
    },
    white:{
        color:colors.white,
        alignSelf: "center",
    },
    black:{
        color:colors.black,
        alignSelf: "center",
    },
    grey:{
        color:colors.grey,
        alignSelf: "center",
    },
    padding5:{
        padding:5,
    },
    padding10:{
        padding:10,
    },
    padding15:{
        padding:15,
    },
    fontSize15:{
        fontSize:15,
    },
    fontSize20:{
        fontSize:20,
    },
    fontSize25:{
        fontSize:25,
    },
    fontSize30:{
        fontSize:30,
    },
    fontSize45:{
        fontSize:45,
    },
    type1:{
        backgroundColor: colors.type1,
    },
    type2:{        
        backgroundColor: colors.type2,
    },
    type3:{        
        backgroundColor: colors.type3,
    },
    type4:{        
        backgroundColor: colors.type4,
    },
    type5:{        
        backgroundColor: colors.type5,
    },

})

export default MyIcon;