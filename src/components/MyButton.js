import React from 'react';
import {StyleSheet,TouchableOpacity,View} from 'react-native';

import colors from '../config/colors';
import MyText from './MyText';
import MyIcon from './MyIcon';

const MyButton = ({title,func,email,password,buttonstyle,textstyle,h3,h4,...rest}) => {
    return <TouchableOpacity
        onPress={func}
        style={[styles.button,buttonstyle]} {...rest}>
        {h3 ?<MyText title={title} h3P style={[styles.text,textstyle]}/> : null}
        {h4 ?<MyText title={title} h4P style={[styles.text,textstyle]}/> : null}
        
    </TouchableOpacity> 
};

const FilterButton = ({title,func,buttonstyle,textstyle,h3,h4,active,...rest}) => {
    if (active)
    return <TouchableOpacity
        onPress={func}
        style={[styles.activebutton,buttonstyle]} {...rest}>
        {h3 ?<MyText title={title} h3P style={[styles.activetext,textstyle]}/> : null}
        {h4 ?<MyText title={title} h4P style={[styles.activetext,textstyle]}/> : null}       
    </TouchableOpacity>
    else 
    return<TouchableOpacity
    onPress={func}
    style={[styles.button1,buttonstyle]} {...rest}>
    {h3 ?<MyText title={title} h3P style={[styles.text1,textstyle]}/> : null}
    {h4 ?<MyText title={title} h4P style={[styles.text1,textstyle]}/> : null}       
    </TouchableOpacity>
};

const Details = ({title,walkin,approve,reject,pending,buttonstyle,textstyle,pRtext,...rest}) => {
    return <View
        style={[
        styles.details,
        walkin && styles.walkin,
        approve && styles.approve,
        reject && styles.reject,
        pending && styles.pending,
        buttonstyle]} {...rest}>
        {pRtext ?<MyText title={title} pRtext style={[styles.activetext,textstyle]}/> : null}     
    </View>   
};

const Info = ({title,buttonstyle,iconName,textstyle,text,...rest}) => {
    return <View
        style={[
        styles.info,
        buttonstyle]} {...rest}>
        {text ?<MyText title={title} pP2 style={[styles.activetext,textstyle]}/> : null}
       <MyIcon ION nocontainer dashboard1 iconName={iconName} style={[styles.activetext,{}]}/>
    </View>   
};

const VisitorButton = ({title,func,buttonstyle,textstyle,h3,h4,active,...rest}) => {
    if (active)
    return <TouchableOpacity
        onPress={func}
        style={[styles.activebutton,buttonstyle]} {...rest} >
        {h3 ?<MyText title={title} h3P style={[styles.activetext,textstyle]}/> : null}
        {h4 ?<MyText title={title} h4P style={[styles.activetext,textstyle]}/> : null}       
    </TouchableOpacity>
    else 
    return<TouchableOpacity
    onPress={func}
    style={[styles.button1,buttonstyle]} {...rest}>
    {h3 ?<MyText title={title} h3P style={[styles.text1,textstyle]}/> : null}
    {h4 ?<MyText title={title} h4P style={[styles.text1,textstyle]}/> : null}       
    </TouchableOpacity>
};

const AddButton = ({title,func,buttonstyle,textstyle,text,icon,...rest}) => {
    return <TouchableOpacity
        onPress={func}
        style={[
        styles.add,
        buttonstyle]} {...rest}>
        {text ?<MyText title={title} pP2 style={[styles.activetext,textstyle]}/> : null}
       {icon ?<MyIcon ION nocontainer dashboard1 iconName="add-circle-outline" style={[styles.activetext,{}]}/> :null}
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
       {iconName ?<MyIcon FA nocontainer dashboard1 iconName={iconName} style={[styles.icon,{}]}/> :null}
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
    text:{
        color:colors.white,
        
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
    text1:{
        color:colors.mainColor,
        
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
    activetext:{
        color:colors.white,
        
    },
    approval:{
        width:50,
        height:50,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    icon:{
        color: colors.white,
        fontSize:45,
    },
})

export {MyButton,FilterButton,Details,Info,VisitorButton,AddButton,ApprovalButton};