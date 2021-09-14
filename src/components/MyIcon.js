import React from 'react';
import {StyleSheet,TouchableOpacity,View} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import colors from '../config/colors';
import MyText from './MyText';

const MyIcon = ({FA,MC,ION,nocontainer,square,visitor,iconName,title,dashboard,dashboard1,search,icontype,icontype1,deletet,type1,type2,type3,type4,type5,viewstyle,style}) => {
    if(nocontainer)
    return <View>
        {FA ?<FontAwesome5 name={iconName}  style={[
        dashboard && styles.dashboard,
        dashboard1 && styles.dashboard1,
        search && styles.search,
        icontype && styles.icontype,
        icontype1 && styles.icontype1,
        deletet && styles.deletet,
        style]}/> :null}
        {MC ?<MaterialCommunityIcons name={iconName}  style={[
        dashboard && styles.dashboard,
        dashboard1 && styles.dashboard1,
        search && styles.search,
        icontype && styles.icontype,
        icontype1 && styles.icontype1,
        deletet && styles.deletet,
        style]}/> :null}
        {ION ?<Ionicons name={iconName}  style={[
        dashboard && styles.dashboard,
        dashboard1 && styles.dashboard1,
        search && styles.search,
        icontype && styles.icontype,
        icontype1 && styles.icontype1,
        deletet && styles.deletet,
        style]}/> :null}
    </View>
    else if(square)
    return <View style={[
        styles.squareContainer,
        type1 && styles.type1,
        type2 && styles.type2,
        type3 && styles.type3,
        type4 && styles.type4,
        type5 && styles.type5,
        viewstyle
    ]}>
        {FA ?<FontAwesome5 name={iconName}  style={[
        dashboard && styles.dashboard,
        dashboard1 && styles.dashboard1,
        search && styles.search,
        icontype && styles.icontype,
        icontype1 && styles.icontype1,
        deletet && styles.deletet,
        style]}/>:null}
        {MC ?<MaterialCommunityIcons name={iconName}  style={[
        dashboard && styles.dashboard,
        dashboard1 && styles.dashboard1,
        search && styles.search,
        icontype && styles.icontype,
        icontype1 && styles.icontype1,
        deletet && styles.deletet,
        style]}/>:null}
        {ION ?<Ionicons name={iconName}  style={[
        dashboard && styles.dashboard,
        dashboard1 && styles.dashboard1,
        search && styles.search,
        icontype && styles.icontype,
        icontype1 && styles.icontype1,
        deletet && styles.deletet,
        style]}/>:null}
    </View>
    else
    return <View style={[
        styles.iconContainer,
        type1 && styles.type1,
        type2 && styles.type2,
        type3 && styles.type3,
        type4 && styles.type4,
        type5 && styles.type5,
        visitor && styles.visitorContainer,
        viewstyle
    ]}>
        {FA ?<FontAwesome5 name={iconName}  style={[
        dashboard && styles.dashboard,
        dashboard1 && styles.dashboard1,
        search && styles.search,
        icontype && styles.icontype,
        icontype1 && styles.icontype1,
        deletet && styles.deletet,
        style]}/>:null}
        {title ?<MyText title={title} h3P style={[
            styles.visitorText,
            style]}/>:null}
        {MC ?<MaterialCommunityIcons name={iconName}  style={[
        dashboard && styles.dashboard,
        dashboard1 && styles.dashboard1,
        search && styles.search,
        icontype && styles.icontype,
        icontype1 && styles.icontype1,
        deletet && styles.deletet,
        style]}/>:null}
        {title ?<MyText title={title} h3P style={[
            styles.visitorText,
            style]}/>:null}
        {ION ?<Ionicons name={iconName}  style={[
        dashboard && styles.dashboard,
        dashboard1 && styles.dashboard1,
        search && styles.search,
        icontype && styles.icontype,
        icontype1 && styles.icontype1,
        deletet && styles.deletet,
        style]}/>:null}
        {title ?<MyText title={title} h3P style={[
            styles.visitorText,
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
    visitorContainer:{
        backgroundColor: colors.mainColor
    },
    visitorText:{
        color: colors.white,
        alignSelf: "center",
        padding:6,
        fontSize:25,
    },
    dashboard:{        
        color: colors.white,
        alignSelf: "center",
        padding:10,
        fontSize:25,
    },
    dashboard1:{        
        color: colors.white,
        alignSelf: "center",
        fontSize:20,
    },
    icontype:{
        color: colors.black,
        alignSelf: "center",
        padding:10,
        fontSize:25,
    },
    icontype1:{        
        color: colors.black,
        alignSelf: "center",
        padding:5,
        fontSize:15,
    },
    deletet:{        
        color: colors.black,
        alignSelf: "center",
        fontSize:30,
    },
    search:{
        color: colors.grey,
        alignSelf: "center",
        padding:10,
        fontSize:25,
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