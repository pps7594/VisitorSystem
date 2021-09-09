import React from 'react';
import {StyleSheet,TouchableOpacity,View} from 'react-native';

import colors from '../config/colors';
import MyText from './MyText';
import MyIcon from './MyIcon';
import space from '../config/space';

const VisitorTypeCard = ({iconName1,title1,iconName2,title2,iconName3,title3,iconName4,title4,iconName5,title5,}) => {
  
            return<View style={styles.cardContainer}>
                <View style={styles.row}>
                    {iconName1 ?<View style={styles.rowOnly}><MyIcon FA square iconName={iconName1} icontype1 type1/>
                    <View style={styles.space} />
                    <MyText title={title1} pP3/>
                    <View style={styles.space} />
                    </View>:null}
                    {iconName2 ?<View style={styles.rowOnly}><MyIcon FA square iconName={iconName2} icontype1 type2/>
                    <View style={styles.space} />
                    <MyText title={title2} pP3/>
                    <View style={styles.space} />
                    </View>:null}
                    {iconName3 ?<View style={styles.rowOnly}><MyIcon FA square iconName={iconName3} icontype1 type3/>
                    <View style={styles.space} />
                    <MyText title={title3} pP3/>
                    <View style={styles.space} />
                    </View>:null}
                    {iconName4 ?<View style={styles.rowOnly}><MyIcon FA square iconName={iconName4} icontype1 type4/>
                    <View style={styles.space} />
                    <MyText title={title4} pP3/>
                    <View style={styles.space} />
                    </View>:null}
                    {iconName5 ?<View style={styles.rowOnly}><MyIcon FA square iconName={iconName5} icontype1 type5/>
                    <View style={styles.space} />
                    <MyText title={title5} pP3/>
                    </View>:null}
                </View>
            </View>

        
};

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor: colors.white,
        width:"100%",
        borderRadius: 10,
        padding:space.cardpadding,
        flexDirection: "row",
    },
    row:{
        flex:1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems:"center",
        justifyContent:"space-between"
    },
    rowOnly:{
        flexDirection: "row",
        alignItems:"center",
    },
    left:{
        marginLeft: "auto",
    },
    space: {
        width: 5,
        height: 35,
    },
})

export default VisitorTypeCard;