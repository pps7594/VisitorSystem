import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import colors from '../config/colors';
import space from '../config/space';

import Spacer from './Spacer';
import {MyButton,Details} from './MyButton';
import MyIcon from './MyIcon';
import MyText from './MyText';

const MyContainer = ({children,screencontainer,cardcontainer,row,borderRadius5, conRow,spacebetween,spacearound,flex,flexstart,flexend,alignstart,search,visitor, conCol, conLeft, conRect,bordercardList, conRectRound,bgcardList,bgreportList,style,...rest}) => {
    return <>
                {screencontainer ?<View style={[styles.screenContainer,style]} {...rest}>
                    {children}
                </View> :null}
                {cardcontainer ?<View style={[
                    styles.cardContainer,
                    row && styles.row,
                    borderRadius5 && styles.borderRadius5,
                    style]}
                    {...rest}>
                    {children}
                </View> :null}
                {conRow? <View style={[
                    styles.row,
                    spacebetween && styles.spacebetween,
                    spacearound && styles.spacearound,
                    flex && styles.flex,
                    flexstart && styles.flexstart,
                    flexend && styles.flexend,
                    alignstart && styles.alignstart, //request approval card
                    search && styles.search,
                    visitor && styles.visitor,
                    style]}
                    {...rest}>
                    {children}
                </View>:null}
                {conCol? <View style={[styles.col,
                    alignstart && styles.alignstart, //request approval card
                    style]}
                    {...rest}>
                    {children}
                </View>:null}
                {conLeft? <View style={[styles.left,style]}{...rest}>
                    {children}
                </View>:null}
                {conRect? <View style={[
                    styles.rect,
                    bordercardList && styles.bordercardList,
                    style]}
                    {...rest}>
                    {children}
                </View>:null}
                {conRectRound? <View style={[
                    styles.rectRound,
                    bgcardList && styles.bgcardList,
                    bgreportList && styles.bgreportList,
                    style]}
                    {...rest}>
                    {children}
                </View>:null}               
            </>
};

const MyCard = ({iconName,title,number,button}) => {
    return <MyContainer cardcontainer>
                <MyContainer conRow>
                    <MyIcon FA iconName={iconName} dashboard/>
                    <Spacer spacer/>
                    <MyText title={title} pP/>
                    <Spacer spacer/>
                    <MyContainer conLeft>
                    <MyText title={number} num grey/>
                    </MyContainer>
                </MyContainer>
                <Spacer m20/>
                <MyButton title={button} h4/> 
            </MyContainer>
};

const MyCardList = ({iconName,title,button,details}) => {
    return <MyContainer cardcontainer>
                <MyContainer conRow flexstart>
                    <MyIcon FA iconName={iconName} dashboard/>
                    <Spacer spacer/>
                    <MyText title={title} pP/>
                    <Spacer spacer/>
                </MyContainer>
                <Spacer spacer/>
                { 
                    details ? details.map((item) => {
                        const datetime = new Date (Date.parse(item.visitRequestObj.expectedArriveDateTime));
                        var ampm = datetime.getHours() >= 12 ? '\n P.M.' : '\n A.M.';
                        const time = datetime.toTimeString().substring(0,5) + ' ' + ampm;
                        const nameWithAddress = item.visitRequestObj.address.split(";")
                        return (
                        <View key={item.visitRequestObj.visitRequestId}>
                            <MyContainer conRect bordercardList>
                                <MyText title={time} pP3 style={{padding:5}}/>
                                <MyContainer conRectRound bgcardList>
                                    <MyText title={"#VR-" + item.visitRequestObj.visitRequestId} pP3 main/>
                                    <MyText title={nameWithAddress[0] + " " + nameWithAddress[1]} pR2/>
                                </MyContainer>  
                            </MyContainer>
                            <Spacer space10/>
                        </View>
                        )
                    }) : null
                }
                <Spacer m20/>
                <MyButton title={button} h4/> 
            </MyContainer>
};

const MyList = ({id,visitor,address,iconType,iconName,carplate,active,inactive,arriveDate,arriveTime,departDate,departTime}) => {
    return <MyContainer conRect>
        <View style={[styles.colwidth]}>
            <MyText title={id} pP2 main/>
            <MyText title={visitor} pR2/>
            <MyText title={address} pR3 grey/>
        </View>
        <MyContainer conRectRound bgreportList>
            <MyContainer conRow >
                <MyIcon FA square iconName={iconName} icontype1 type1/>
                <Spacer space10/>
                <MyText title={carplate} pP3/>
                <MyContainer conLeft>
                    {active?<View><Details walkin title="Active" pR grey/>
                    </View>:null}
                    {inactive?<View><Details inactive title="Inactive" pR grey/>
                    </View>:null}
                </MyContainer>
            </MyContainer>
            <Spacer space10/>
            <MyContainer conRow>
                <MyContainer conCol style={[{width:"18%"}]}>
                <MyIcon MC nocontainer iconName="clock-time-eight-outline" icontype1/>
                <MyText title="Actual"  pP3/>
                </MyContainer>
                <MyContainer conLeft style={[{width:"35%"}]}>
                    <MyContainer conCol colstart>
                    <MyText title={arriveDate} pP2/>
                    <MyText title={arriveTime} pP3 grey/>
                    </MyContainer>
                </MyContainer>
                <View style={{backgroundColor:colors.black,width:1,height:"100%"}} />
                <Spacer space />
                <MyContainer conCol colstart style={[{width:"35%"}]}>
                    <MyText title={departDate} pP2/>
                    <MyText title={departTime} pP3 grey/>
                </MyContainer>
            </MyContainer>
        </MyContainer>  
    </MyContainer>
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
    //container
    screenContainer:{
        flex:1,
        padding:space.cardpadding,
    },
    cardContainer:{
        backgroundColor: colors.white,
        width:"100%",
        borderRadius: space.cardborderradius,
        padding:space.cardpadding,
    },
    borderRadius5:{
        borderRadius: space.cardlistborderradius
    },
    //conRow
    row:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"center",
    },
    spacebetween:{
        justifyContent:"space-between"
    },
    spacearound:{
        justifyContent:"space-around"
    },
    flex:{
        flex:1,
    },
    flexend:{
        justifyContent:"flex-end"
    },
    flexstart:{
        justifyContent:"flex-start",
    },
    alignstart:{
        alignItems:"flex-start",
    },
    search:{
        borderColor:colors.grey,
        borderWidth:1,
        borderRadius:space.cardborderradius,
        paddingLeft:10,
    },
    visitor:{
        flex:1,
        flexWrap: "wrap",
    },
    //conCol
    col:{
        flexDirection: "column",
        alignItems:"center",
        justifyContent:"center",
    },
    colwidth:{
        paddingLeft:5,
        width:"25%",
    },
    //conLeft
    left:{
        marginLeft: "auto",
    },
    //conRect
    rect:{
        backgroundColor:colors.white,
        borderRadius:space.cardlistborderradius,
        width:"100%",
        flexDirection: "row",
        alignItems:"center",
    },
    bordercardList:{
        borderColor:colors.cardList,
        borderWidth:1,
    },
    bgcardList:{
        backgroundColor:colors.cardList,
    },
    //conRectRound
    rectRound:{
        borderTopLeftRadius:space.cardlistborderradius,
        borderBottomLeftRadius:space.cardlistborderradius,
        flex: 1,
        padding:space.cardpadding,
    },
    bgreportList:{
        backgroundColor:colors.reportList,
    },
    //guardCard
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
})

export {MyContainer,MyCard,MyCardList,MyList,GuardCard};