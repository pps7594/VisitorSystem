import React,{useState} from 'react';
import {StyleSheet,TouchableOpacity,View,Image,ScrollView,FlatList,Text} from 'react-native';

import colors from '../config/colors';
import space from '../config/space';
import MyText from './MyText';
import Spacer from './Spacer';
import {FAIcon,MCIcon,IOIcon} from './MyIcon';
import {Details,Info,ApprovalButton} from './MyButton';

const RequestApprovalCard = ({iconName,id,details,address,walkin,approve,reject,pending,imageSource,arriveDate,arriveTime,departDate,departTime}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isExpand, setIsExpand] = useState(false);
    

    return <View style={styles.cardContainer}>
                <View style={styles.row}>
                    <FAIcon  iconName={iconName} icontype type1/>
                    <View style={styles.space} />
                    <View style={styles.col}>
                    <MyText title={id} pPmain/>
                    <MyText title={details} pR2/>
                    <MyText title={address} pRtext grey/>
                    </View>
                    <View style={styles.left}>
                        {walkin?<View><Details walkin title="Walk-in Visitor" pRtext grey/>
                        <View style={styles.space} /></View>:null}
                        {approve?<View><Details approve title="Approved" pRtext grey/>
                        <View style={styles.space} /></View>:null}
                        {reject?<View><Details reject title="Rejected" pRtext grey/>
                        <View style={styles.space} /></View>:null}
                        {pending?<View><Details pending title="Pending" pRtext grey/>
                        <View style={styles.space} /></View>:null}
                        <TouchableOpacity onPress={() => setIsOpen(true)}>
                        <Image 
                            style={styles.qr}
                            source={imageSource}/>
                        </TouchableOpacity>
                        {isOpen && (
                            <TouchableOpacity onPress={() => setIsOpen(false)} style={styles.modal}>
                                <Image 
                                    style={styles.qrmodal}
                                    source={imageSource}/>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
                <View style={styles.space} />
                <View style={styles.rowCenter}>
                    <MCIcon nocontainer iconName="clock-time-eight-outline" icontype1 type1/>
                    <MyText title="Scheduled" pP3/>
                    <View style={styles.left}></View>
                    <View style={styles.col}>
                        <MyText title={arriveDate} pP2/>
                        <MyText title={arriveTime} pP3 grey/>
                    </View>
                    <View style={styles.space} />
                    <View style={{backgroundColor:"black",width:1,height:"100%"}} />
                    <View style={styles.space} />
                    <View style={styles.col}>
                        <MyText title={departDate} pP2/>
                        <MyText title={departTime} pP3 grey/>
                    </View>
                </View>
                <View style={styles.space} />
                <TouchableOpacity onPress={() => setIsExpand(isExpand ?false:true)}>
                {isExpand ?<Info title="Visitor Information" iconName="chevron-up-circle-outline" text />
                :<Info title="Visitor Information" iconName="chevron-down-circle-outline" text />}
                </TouchableOpacity>
                <Spacer />

                {isExpand ?<View>
                <View style={styles.row}>
                    <FAIcon title="V" visitor dashboard1/>
                    <Spacer />
                    <View style={styles.col}>
                        <MyText title="Khong Jun Ming" pR2/>
                        <MyText title="0123456789" pRtext grey/>
                    </View>
                    <View style={styles.left}>
                    <View style={styles.colCenter}>
                        <MyText title="2" num/>
                        <MyText title="peoples" pRtext grey/>
                    </View>
                    </View>
                </View>
                <View style={styles.rowCenter}>
                    <View style={styles.colCenter}>
                        <MyText title="Vehicle Type" pP3 grey/>
                        <MyText title="Other" pP3/>
                    </View>
                    <Spacer />
                    <View style={styles.colCenter}>
                        <MyText title="Plate Number" pP3 grey/>
                        <MyText title="ABC 1234" pP3/>
                    </View>
                </View>
                <Spacer />
                <View style={styles.row}>
                    <MyText title="Remarks" pP3 grey/>
                    <Spacer />
                    <MyText title="Crane and Truck" pP3/>
                </View>
                <Spacer />
                <View style={styles.line}/>
                <Spacer />
                </View>:null}
                <MyText title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus tempor arcu eget sodales. Nullam eros magna, semper a felis eget, consequat sagittis lectus. Aenean a magna quis nibh bibendum ultricies. " pRtext />
                <Spacer />
                <View style={styles.rowCenter}>
                    <ApprovalButton iconName="check-circle" approve />
                    <Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer />
                    <ApprovalButton iconName="times-circle" reject />
                </View>
                
                
                    
                
                
                
            </View>
};

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor: colors.white,
        width:"100%",
        borderRadius: 10,
        padding:space.screenpadding,
    },
    row:{
        flexDirection: "row",
        alignItems:"flex-start",
    },
    rowCenter:{
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"center"
    },
    left:{
        marginLeft:"auto"
    },
    space: {
        width: 5,
        height: 5,
    },
    col:{
        flexDirection:"column",
    },
    colCenter:{
        flexDirection:"column",
        alignItems:"center",
    },
    qr:{
        width:50,
        height:50,
        alignSelf:"center",
        opacity: 0.3,
    },
    modal:{
        position: "absolute",
        left: "-50%",
    },
    qrmodal:{
        width:150,
        height:150,
    },
    line:{
        borderBottomColor: colors.grey,
        borderBottomWidth: 1,
    },
})

export default RequestApprovalCard;