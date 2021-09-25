import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import colors from '../config/colors';
import space from '../config/space';

import Spacer from './Spacer';
import {MyButton,Details} from './MyButton';
import MyIcon from './MyIcon';
import MyText from './MyText';

const MyContainer = ({children,screencontainer,cardcontainer,row,borderRadius5, conRow,spacebetween,spacearound,flex,flexstart,flexend,alignstart,alignstretch,search,visitor, conCol,paddingleft, conLeft, conRect,bordercardList, conRectRound,bgcardList,bgreportList,style,...rest}) => {
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
                    alignstretch && styles.alignstretch,
                    search && styles.search,
                    visitor && styles.visitor,
                    style]}
                    {...rest}>
                    {children}
                </View>:null}
                {conCol? <View style={[styles.col,
                    alignstart && styles.alignstart, //request approval card
                    paddingleft && styles.paddingleft, //only admin profile
                    flex && styles.flex,
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

const MyCard = ({iconName,title,number,button,func}) => {
    return <MyContainer cardcontainer>
                <MyContainer conRow>
                    <MyIcon FA icon iconName={iconName} white padding10 fontSize25/>
                    <Spacer spacer/>
                    <MyText title={title} pP/>
                    <Spacer spacer/>
                    <MyContainer conLeft>
                    <MyText title={number} num grey/>
                    </MyContainer>
                </MyContainer>
                <Spacer m20/>
                <MyButton title={button} h4 func={func}/> 
            </MyContainer>
};

const MyCardList = ({iconName,title,button,details,func}) => {
    return <MyContainer cardcontainer>
                <MyContainer conRow flexstart>
                    <MyIcon FA icon iconName={iconName} white padding10 fontSize25/>
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
                <MyButton title={button} h4 func={func}/> 
            </MyContainer>
};

const MyList = ({id,visitor,address,visitorType,carplate,status,arriveDate,arriveTime,departDate,departTime}) => {
    return <MyContainer conRect>
        <View style={[styles.colwidth]}>
            <MyText title={id} pP2 main/>
            <MyText title={visitor} pR2/>
            <MyText title={address} pR3 grey/>
        </View>
        <MyContainer conRectRound bgreportList>
            <MyContainer conRow >
                {visitorType==1 ?<MyIcon ION square iconName="car-sharp" black padding5 fontSize15 type1/> :null}
                {visitorType==2 ?<MyIcon ION square iconName="construct-sharp" black padding5 fontSize15 type2/> :null}
                {visitorType==3 ?<MyIcon MC square iconName="truck-delivery" black padding5 fontSize15 type3/> :null}
                {visitorType==4 ?<MyIcon FA square iconName="ambulance" black padding5 fontSize15 type4/> :null}
                {visitorType==5 ?<MyIcon FA square iconName="bus-alt" black padding5 fontSize15 type5/> :null}
                <Spacer space10/>
                <MyText title={carplate} pP3/>
                <MyContainer conLeft>
                    {status=="active"?<View><Details details walkin title="Active" pR grey/>
                    </View>:null}
                    {status=="inactive"?<View><Details details inactive title="Inactive" pR grey/>
                    </View>:null}
                </MyContainer>
            </MyContainer>
            <Spacer space10/>
            <MyContainer conRow>
                <MyContainer conCol style={[{width:"18%"}]}>
                <MyIcon MC iconName="clock-time-eight-outline" black padding5 fontSize15/>
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

const GuardCard = ({FA,MC,IO,iconName,title,func,style,...rest}) => {
    return <TouchableOpacity
            onPress={func}
            style={[styles.gcardContainer,style]} {...rest}>
                {FA ?<MyIcon FA icon iconName={iconName} white padding10 fontSize25/> : null}
                {MC ?<MyIcon MC icon iconName={iconName} white padding10 fontSize30/> : null}
                {IO ?<MyIcon ION icon iconName={iconName} white padding10 fontSize25/> : null}
                <MyText title={title} pP style={styles.text}/>
            </TouchableOpacity>  
};


const VisitorTypeCard = ({col,title1,title2,title3,title4,title5,}) => {

    return<MyContainer cardcontainer row>
        {col ?<MyContainer conRow visitor spacearound>
            {title1 ?<MyContainer conCol>
                <MyIcon ION square iconName="car-sharp" black padding5 fontSize15 type1/>
                <Spacer space/>
                <MyText title={title1} pP3/>
            </MyContainer>
            :null}
            {title2 ?<MyContainer conCol>
                <MyIcon ION square iconName="construct-sharp" black padding5 fontSize15 type2/>
                <Spacer space/>
                <MyText title={title2} pP3/>
            </MyContainer>
            :null}
            {title3 ?<MyContainer conColMyCardContainer conCol>
                <MyIcon MC square iconName="truck-delivery" black padding5 fontSize15 type3/>
                <Spacer space/>
                <MyText title={title3} pP3/>
            </MyContainer>
            :null}
            {title4 ?<MyContainer conCol>
                <MyIcon FA square iconName="ambulance" black padding5 fontSize15 type4/>
                <Spacer space/>
                <MyText title={title4} pP3/>
            </MyContainer>
            :null}
            {title5 ?<MyContainer conCol>
                <MyIcon FA square iconName="bus-alt" black padding5 fontSize15 type5/>
                <Spacer space/>
                <MyText title={title5} pP3/>
            </MyContainer>
            :null}
        </MyContainer>
        :<MyContainer conRow visitor spacearound>
            {title1 ?
            <MyContainer conRow>                       
                <MyIcon ION square iconName="car-sharp" black padding5 fontSize15 type1/>
                <Spacer height/>
                <MyText title={title1} pP3/>
                <Spacer height/>
            </MyContainer>
            :null}
            {title2 ?
            <MyContainer conRow>
                <MyIcon ION square iconName="construct-sharp" black padding5 fontSize15 type2/>
                <Spacer height/>
                <MyText title={title2} pP3/>
                <Spacer height/>
            </MyContainer>
            :null}
            {title3 ?
            <MyContainer conRow>
                <MyIcon MC square iconName="truck-delivery" black padding5 fontSize15 type3/>
                <Spacer height/>
                <MyText title={title3} pP3/>
                <Spacer height/>
            </MyContainer>
            :null}
            {title4 ?
            <MyContainer conRow>
                <MyIcon FA square iconName="ambulance" black padding5 fontSize15 type4/>
                <Spacer height/>
                <MyText title={title4} pP3/>
                <Spacer height/>
            </MyContainer>
            :null}
            {title5 ?
            <MyContainer conRow>
                <MyIcon FA square iconName="bus-alt" black padding5 fontSize15 type5/>
                <Spacer height/>
                <MyText title={title5} pP3/>
            </MyContainer>
            :null}
        </MyContainer>}
    </MyContainer>

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
    alignstretch:{
        alignItems:"stretch",
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
    paddingleft:{
        paddingLeft:"20%",
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

export {MyContainer,MyCard,MyCardList,MyList,GuardCard,VisitorTypeCard};