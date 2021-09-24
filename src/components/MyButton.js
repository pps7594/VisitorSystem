import React from 'react';
import {StyleSheet,TouchableOpacity,View} from 'react-native';

import colors from '../config/colors';
import MyText from './MyText';
import MyIcon from './MyIcon';

const MyButton = ({title,func,buttonstyle,textstyle,h3,h4,...rest}) => {
    return <TouchableOpacity
        onPress={func}
        style={[styles.button,buttonstyle]} {...rest}>
        {h3 ?<MyText title={title} h3P white style={[textstyle]}/> : null}
        {h4 ?<MyText title={title} h4P white style={[textstyle]}/> : null}
    </TouchableOpacity> 
};

const FilterButton = ({title,func,buttonstyle,textstyle,h3,h4,active,...rest}) => {
    if (active)
    return <TouchableOpacity
        onPress={func}
        style={[styles.activebutton,buttonstyle]} {...rest}>
        {h3 ?<MyText title={title} h3P white style={[textstyle]}/> : null}
        {h4 ?<MyText title={title} h4P white style={[textstyle]}/> : null}       
    </TouchableOpacity>
    else 
    return<TouchableOpacity
    onPress={func}
    style={[styles.button1,buttonstyle]} {...rest}>
    {h3 ?<MyText title={title} h3P main style={[styles.text1,textstyle]}/> : null}
    {h4 ?<MyText title={title} h4P main style={[styles.text1,textstyle]}/> : null}       
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

const VisitorButton = ({title,func,buttonstyle,textstyle,h3,h4,active,...rest}) => {
    if (active)
    return <TouchableOpacity
        onPress={func}
        style={[styles.activebutton,buttonstyle]} {...rest} >
        {h3 ?<MyText title={title} h3P white style={[textstyle]}/> : null}
        {h4 ?<MyText title={title} h4P white style={[textstyle]}/> : null}       
    </TouchableOpacity>
    else 
    return<TouchableOpacity
    onPress={func}
    style={[styles.button1,buttonstyle]} {...rest}>
    {h3 ?<MyText title={title} h3P main style={[textstyle]}/> : null}
    {h4 ?<MyText title={title} h4P main style={[textstyle]}/> : null}       
    </TouchableOpacity>
};

const AddButton = ({title,func,buttonstyle,textstyle,icon,...rest}) => {
    return <TouchableOpacity
        onPress={func}
        style={[
        styles.add,
        buttonstyle]} {...rest}>
        {title ?<MyText title={title} pP2 white style={[textstyle]}/> : null}
       {icon ?<MyIcon ION white fontSize20 iconName="add-circle-outline" /> :null}
    </TouchableOpacity>   
};

const ApprovalButton = ({title,approve,reject,func,buttonstyle,iconName,textstyle,text,icon,...rest}) => {
    return <TouchableOpacity
        onPress={func}
        style={[
        styles.approval,
        approve && styles.approve,
        reject && styles.reject,
        buttonstyle]} {...rest}>
       {iconName ?<MyIcon FA white fontSize45 iconName={iconName} /> :null}
    </TouchableOpacity>   
};

const styles = StyleSheet.create({
    button:{
        width:"100%",
        height:50,
        backgroundColor:colors.mainColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:10,
    },
    details:{
        width:"100%",
        height:20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:10,
        padding:10,
    },
    add:{
        width:"100%",
        height:40,
        backgroundColor:colors.mainColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:30,
        flexDirection:"row",
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
    button1:{
        width:"23%",
        height:35,
        backgroundColor:colors.white,
        borderColor:colors.mainColor,
        borderWidth:1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:10,
    },
    activebutton:{
        width:"23%",
        height:35,
        backgroundColor:colors.mainColor,
        borderColor:colors.mainColor,
        borderWidth:1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:10,
    },
    approval:{
        width:50,
        height:50,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
})

export {MyButton,FilterButton,Details,VisitorButton,AddButton,ApprovalButton};