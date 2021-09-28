import React from 'react';
import {StyleSheet,TouchableOpacity,View} from 'react-native';

import colors from '../config/colors';
import space from '../config/space';
import MyText from './MyText';
import MyIcon from './MyIcon';

const MyButton = ({func,height20,height30,height40,borderradius30,width23,width45,padding10,row,white,border,approve,reject,buttonstyle,title,textstyle,active,inactive,h3,h4,pP2,icon,iconName,...rest}) => {
    return <TouchableOpacity
        onPress={func}
        style={[
            styles.button,
            height20 && styles.height20,
            height30 && styles.height30,
            height40 && styles.height40,
            borderradius30 && styles.borderradius30,
            width23 && styles.width23,
            width45 && styles.width45,
            padding10 && styles.padding10,
            row && styles.row,
            white && styles.white,
            border && styles.border,
            approve && styles.approve && styles.approval,
            reject && styles.reject && styles.approval,
            buttonstyle]} {...rest}>
        {active && h3 ?<MyText title={title} h3P white style={[textstyle]}/> : null}
        {active && h4 ?<MyText title={title} h4P white style={[textstyle]}/> : null}
        {inactive && h3 ?<MyText title={title} h3P main style={[textstyle]}/> : null}
        {inactive && h4 ?<MyText title={title} h4P main style={[textstyle]}/> : null} 
        {pP2 ?<MyText title={title} pP2 white style={[textstyle]}/> : null} 
        {icon ?<MyIcon ION white fontSize20 iconName="add-circle-outline" /> :null} 
        {approve || reject && iconName ?<MyIcon FA white fontSize45 iconName={iconName} /> :null}
    </TouchableOpacity> 
};

const Details = ({details,info,walkin,approve,reject,pending,inactive,buttonstyle,title,text,textstyle,iconName,...rest}) => {
    return <View
        style={[
        details && styles.details,
        info && styles.info,
        walkin && styles.walkin,
        approve && styles.approve,
        reject && styles.reject,
        pending && styles.pending,
        inactive && styles.inactive,
        buttonstyle]} {...rest}>
        {title ?<MyText title={title} pR3 white style={[textstyle]}/> : null}  
        {text ?<MyText title={text} pP2 white style={[textstyle]}/> : null} 
        {iconName ?<MyIcon ION white fontSize20 iconName={iconName} /> : null}  
    </View>   
};

const styles = StyleSheet.create({
    button:{
        width:"100%",
        height:50,
        backgroundColor:colors.mainColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:space.buttonborderradius,
    },
    height40:{
        height:40,
    },
    borderradius30:{
        borderRadius:30,
    },
    width23:{
        width:"23%",
    },
    width45:{
        width:"45%",
    },
    approval:{
        width:50,
        height:50,
        borderRadius: 50,
    },
    padding10:{
        padding:10,
    },
    row:{
        flexDirection:"row",
    },
    white:{
        backgroundColor:colors.white,
    },
    border:{
        borderColor:colors.mainColor,
        borderWidth:1,
    },
    height20:{
        height:20,
    },
    height30:{
        height:30,
    },
    details:{
        width:"100%",
        height:20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:10,
        padding:10,
    },
    info:{
        width:"100%",
        height:30,
        backgroundColor:colors.mainColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:30,
        flexDirection:"row",
    },
    walkin:{
        backgroundColor:colors.walkin,
    },
    approve:{
        backgroundColor:colors.approve,
    },
    reject:{
        backgroundColor:colors.rejected,
    },
    pending:{
        backgroundColor:colors.pending,
    },
    inactive:{
        backgroundColor:colors.inactive,
    },
    
})

export {MyButton,Details};