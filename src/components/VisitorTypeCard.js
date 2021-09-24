import React from 'react';
import {StyleSheet,TouchableOpacity,View} from 'react-native';

import MyText from './MyText';
import Spacer from './Spacer';
import MyIcon from './MyIcon';
import { MyContainer } from './MyCard';

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

export default VisitorTypeCard;