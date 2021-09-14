import React,{useState} from 'react';
import {StyleSheet,TouchableOpacity,View,Image,ScrollView,FlatList,Text} from 'react-native';

import colors from '../config/colors';
import MyText from './MyText';
import Spacer from './Spacer';
import MyIcon from './MyIcon';
import {Details,Info,ApprovalButton} from './MyButton';
import { MyContainer } from './MyCard';

const RequestApprovalCard = ({visitorType,id,details,address,walkin,approve,reject,pending,imageSource,arriveDate,arriveTime,departDate,departTime,additionalNotes,visitorList}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isExpand, setIsExpand] = useState(false);
    

    return <MyContainer cardcontainer>
                <MyContainer conRow alignstart>
                    {visitorType==1 ?<MyIcon ION iconName="car-sharp" icontype type1/> :null}
                    {visitorType==2 ?<MyIcon ION iconName="construct-sharp" icontype type1/> :null}
                    {visitorType==3 ?<MyIcon MC iconName="truck-delivery" icontype type1/> :null}
                    {visitorType==4 ?<MyIcon FA iconName="ambulance" icontype type1/> :null}
                    {visitorType==5 ?<MyIcon FA iconName="bus-alt" icontype type1/> :null}
                    <Spacer space/>
                    <MyContainer conCol alignstart>
                    <MyText title={id} pP main/>
                    <MyText title={details} pR2/>
                    <MyText title={address} pR3 grey/>
                    </MyContainer>
                    <MyContainer conLeft>
                        {walkin?<View><Details walkin title="Walk-in Visitor" pR3 grey/>
                        <Spacer space/></View>:null}
                        {approve?<View><Details approve title="Approved" pR3 grey/>
                        <Spacer space/></View>:null}
                        {reject?<View><Details reject title="Rejected" pR3 grey/>
                        <Spacer space/></View>:null}
                        {pending?<View><Details pending title="Pending" pR3 grey/>
                        <Spacer space/></View>:null}
                        {imageSource ?<TouchableOpacity onPress={() => setIsOpen(true)}>
                        <Image 
                            style={styles.qr}
                            source={imageSource}/>
                        </TouchableOpacity> :null}
                        {imageSource && isOpen && (
                            <TouchableOpacity onPress={() => setIsOpen(false)} style={styles.modal}>
                                <Image 
                                    style={styles.qrmodal}
                                    source={imageSource}/>
                            </TouchableOpacity>
                        )}
                        
                    </MyContainer>
                </MyContainer>
                <Spacer space/>

                <MyContainer conRow>
                    <MyIcon MC nocontainer iconName="clock-time-eight-outline" icontype1 type1/>
                    <MyText title="Scheduled" pP3/>
                    <MyContainer conLeft>
                        <MyText title={arriveDate} pP2/>
                        <MyText title={arriveTime} pP3 grey/>
                    </MyContainer>
                    <Spacer space/>
                    <View style={{backgroundColor:colors.black,width:1,height:"100%"}} />
                    <Spacer space/>
                    <MyContainer conCol>
                        <MyText title={departDate} pP2/>
                        <MyText title={departTime} pP3 grey/>
                    </MyContainer>
                </MyContainer>
                <Spacer space/>

                <TouchableOpacity onPress={() => setIsExpand(isExpand ?false:true)}>
                {isExpand ?<Info title="Visitor Information  " iconName="chevron-up-circle-outline" text />
                :<Info title="Visitor Information  " iconName="chevron-down-circle-outline" text />}
                </TouchableOpacity>
                <Spacer spacer/>

                {visitorList && isExpand ? visitorList.map((item) => {
                    

                return ( <MyContainer cardcontainer key={item.visitRequestCarID}>
                <MyContainer conRow >
                    <MyIcon title="V" visitor dashboard1/>
                    <Spacer spacer/>
                    <MyContainer conCol alignstart>
                        <MyText title={item.visitorName} pR2/>
                        <MyText title={item.visitorTel} pRtext grey/>
                    </MyContainer>
                    <MyContainer conLeft>
                    <MyContainer conCol>
                        <MyText title={item.peopleCount} num/>
                        <MyText title="Peoples" pR3 grey/>
                    </MyContainer>
                    </MyContainer>
                </MyContainer>
                <Spacer spacer/>
                <MyContainer conRow>
                    <MyContainer conCol>
                        <MyText title="Vehicle Type" pP3 grey/>
                        <MyText title={item.visitorVehicleType} pP3/>
                    </MyContainer>
                    <Spacer spacer/>
                    <MyContainer conCol>
                        <MyText title="Plate Number" pP3 grey/>
                        <MyText title={item.visitorPlateNum} pP3/>
                    </MyContainer>
                </MyContainer>
                {item.vehicleTypeNotes?
                <MyContainer conRow flexstart>
                    <Spacer spacer/>
                    <MyText title="Remarks" pP3 grey/>
                    <Spacer spacer/>
                    <MyText title={item.vehicleTypeNotes} pP3/>
                </MyContainer>:null}
                <Spacer spacer/>
                <View style={{backgroundColor:colors.grey,width:"100%",height:1}} />
                <Spacer spacer/>
                </MyContainer>)
                }):null}
                <MyText title={additionalNotes} pR3/>
                
                <MyContainer conRow>
                    <ApprovalButton iconName="check-circle" approve />
                    <Spacer m50/>
                    <ApprovalButton iconName="times-circle" reject />
                </MyContainer>             
            </MyContainer>
};


const styles = StyleSheet.create({
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
})

export default RequestApprovalCard;