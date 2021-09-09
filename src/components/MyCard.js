import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import colors from '../config/colors';
import space from '../config/space';
import Spacer from './Spacer';
import {MyButton} from './MyButton';
import MyIcon from './MyIcon';
import MyText from './MyText';
import { FlatList } from 'react-native-gesture-handler';

const MyCard = ({iconName,title,number,button}) => {
    return <View style={styles.cardContainer}>
                <View style={styles.row}>
                    <MyIcon FA iconName={iconName} dashboard/>
                    <Spacer />
                    <MyText title={title} pP/>
                    <Spacer />
                    <View style={styles.left}>
                    <MyText title={number} num grey/>
                    </View>
                </View>
                <Spacer />
                <Spacer />
                <MyButton title={button} h4/> 
            </View>
};

const MyCardList = ({iconName,title,button,style,time,id,details}) => {
    return <View style={[styles.cardContainer,style]}>
                <View style={styles.row}>
                    <MyIcon FA iconName={iconName} dashboard/>
                    <Spacer />
                    <MyText title={title} pP/>
                    <Spacer />
                </View>
                <Spacer />
                { 
                    details ? 
                    details.map((item) => {
                        const datetime = new Date (Date.parse(item.visitRequestObj.expectedArriveDateTime));
                        var ampm = datetime.getHours() >= 12 ? '\n P.M.' : '\n A.M.';
                        const time = datetime.toTimeString().substring(0,5) + ' ' + ampm;

                        const nameWithAddress = item.visitRequestObj.address.split(";")
                        return (
                        <View key={item.visitRequestObj.visitRequestId}>
                            <View style={styles.rect}>
                                <MyText title={time} pP3 style={{padding:5}}/>
                                <View style={styles.rectRound}>
                                    <MyText title={"#VR-" + item.visitRequestObj.visitRequestId} pP main/>
                                    <MyText title={nameWithAddress[0] + " " + nameWithAddress[1]} pR2/>
                                </View>  
                            </View>
                            <Spacer />
                            <Spacer />
                        </View>
                        )
                    }) : null
                }
                <MyButton title={button} h4/> 
            </View>
};

const GuardCard = ({FA,MC,IO,iconName,title,navigation,style,...rest}) => {
    return <TouchableOpacity
            onPress={() =>  onPressCallback({navigation})}
            style={[styles.gcardContainer,style]} {...rest}>
                {FA ?<MyIcon FA iconName={iconName} dashboard/> : null}
                {MC ?<MyIcon MC iconName={iconName} dashboard/> : null}
                {IO ?<MyIcon ION iconName={iconName} dashboard/> : null}
                <MyText title={title} pP style={styles.text}/>
            </TouchableOpacity>  
};

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor: colors.white,
        width:"100%",
        borderRadius: space.cardborderradius,
        padding:space.cardpadding,
        
    },
    gcardContainer:{
        backgroundColor: colors.white,
        width:"45%",
        borderRadius: space.cardborderradius,
        padding:space.cardpadding,
        alignItems: "center",
    },
    text:{
        paddingTop:10,
        textAlign:"center"
    },
    row:{
        flexDirection: "row",
        alignItems: "center",
    },
    left:{
        marginLeft: "auto",
    },
    rect:{
        borderColor:colors.cardList,
        borderWidth:1,
        borderRadius:5,
        width:"100%",
        flexDirection: "row",
        alignItems:"center",
    },
    rectRound:{
        backgroundColor:colors.cardList,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
        flex: 1,
        padding:space.cardpadding,

    },
})

export {MyCard, MyCardList,GuardCard};