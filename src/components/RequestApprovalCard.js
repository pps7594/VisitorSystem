import React,{useState} from 'react';
import {StyleSheet,TouchableOpacity,View,Image,ScrollView,FlatList,Text} from 'react-native';

import colors from '../config/colors';
import space from '../config/space';
import MyText from './MyText';
import Spacer from './Spacer';
import MyIcon from './MyIcon';
import {Details,MyButton} from './MyButton';
import { MyContainer } from './MyCard';

const RequestApprovalCard = ({visitorType,id,details,address,walkin,status,imageSource,arriveDate,arriveTime,departDate,departTime,additionalNotes,visitorList,approval,approvalFunc,rejectFunc}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isExpand, setIsExpand] = useState(false);
    
    return <MyContainer cardcontainer>
                <MyContainer conRow alignstart>
                    {visitorType==1 ?<MyIcon ION icon iconName="car-sharp" black padding10 fontSize25 type1/> :null}
                    {visitorType==2 ?<MyIcon ION icon iconName="construct-sharp" black padding10 fontSize25 type2/> :null}
                    {visitorType==3 ?<MyIcon MC icon iconName="truck-delivery" black padding10 fontSize25 type3/> :null}
                    {visitorType==4 ?<MyIcon FA icon iconName="ambulance" black padding10 fontSize25 type4/> :null}
                    {visitorType==5 ?<MyIcon FA icon iconName="bus-alt" black padding10 fontSize25 type5/> :null}
                    <Spacer space/>
                    <MyContainer conCol alignstart>
                    <MyText title={id} pP2 main/>
                    <MyText title={details} pR/>
                    <MyText title={address} pR2 grey/>
                    </MyContainer>
                    <MyContainer conLeft>
                        {walkin?<View><Details details walkin title="Walk-in Visitor" pR3 grey/>
                        <Spacer space/></View>:null}
                        {status=="Approved"?<View><Details details approve title="Approved" pR3 grey/>
                        <Spacer space/></View>:null}
                        {status=="Rejected"?<View><Details details reject title="Rejected" pR3 grey/>
                        <Spacer space/></View>:null}
                        {status=="Pending"||status=="NoResponse"?<View><Details details pending title="Pending" pR3 grey/>
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
                <Spacer spacer/>

                <MyContainer conRow>
                    <MyIcon MC iconName="clock-time-eight-outline" black padding5 fontSize20/>
                    <MyText title="Scheduled" pP2/>
                    <MyContainer conLeft>
                        <MyText title={arriveDate} pP2/>
                        <MyText title={arriveTime} pP3 grey/>
                    </MyContainer>
                    <Spacer space/>
                    <View style={{backgroundColor:colors.black,width:1,height:"100%"}} />
                    <Spacer space/>
                    <MyContainer conCol alignstart>
                        <MyText title={departDate} pP2/>
                        <MyText title={departTime} pP3 grey/>
                    </MyContainer>
                </MyContainer>
                <Spacer spacer/>

                {visitorList ?<><TouchableOpacity onPress={() => setIsExpand(isExpand ?false:true)}>
                {isExpand ?<Details info text="Visitor Information  " iconName="chevron-up-circle-outline"  />
                :<Details info text="Visitor Information  " iconName="chevron-down-circle-outline" />}
                </TouchableOpacity>
                <Spacer spacer/>
                </>:null}

                {visitorList && isExpand ? visitorList.map((item) => {
                    

                return ( <MyContainer cardcontainer key={item.visitRequestCarID}>
                <MyContainer conRow >
                    <MyIcon main icon title="V" white padding5 fontSize25/>
                    <Spacer spacer/>
                    <MyContainer conCol alignstart>
                        <MyText title={item.visitorName} pR/>
                        <MyText title={item.visitorTel} pR2 grey/>
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
                        <MyText title={item.visitorVehicleType} pP2/>
                    </MyContainer>
                    <Spacer spacer/>
                    <MyContainer conCol>
                        <MyText title="Plate Number" pP3 grey/>
                        <MyText title={item.visitorPlateNum} pP2/>
                    </MyContainer>
                </MyContainer>
                {item.vehicleTypeNotes?
                <MyContainer conRow flexstart>
                    <Spacer spacer/>
                    <MyText title="Remarks" pP3 grey/>
                    <Spacer spacer/>
                    <MyText title={item.vehicleTypeNotes} pP2/>
                </MyContainer>:null}
                <Spacer spacer/>
                <View style={{backgroundColor:colors.grey,width:"100%",height:1}} />
                <Spacer spacer/>
                </MyContainer>)
                }):null}
                {additionalNotes ?<>
                <MyText title="Additional Notes:" pR3 grey/>
                <Spacer space/>
                <View style={{borderColor:colors.grey,width:"100%",borderWidth:1,borderRadius:space.cardlistborderradius,padding:space.cardpadding}}>
                <MyText title={additionalNotes} pR2/>
                </View>
                <Spacer spacer/>
                </>
                :null}
                
                {approval ?<MyContainer conRow>
                    <MyButton iconName="check-circle" approve selected func={approvalFunc}/>
                    <Spacer space50/>
                    <MyButton iconName="times-circle" reject selected func={rejectFunc}/>
                </MyContainer>
                :null}
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