import React from 'react';
import {Text,StyleSheet} from 'react-native';
//import { AppLoading } from "expo"; //before expo SDK 40
import AppLoading from 'expo-app-loading'; //on expo SDK 40
import {
    useFonts,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  } from '@expo-google-fonts/poppins';
import {
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  } from '@expo-google-fonts/roboto';

import adjust from '../config/adjust';
import colors from '../config/colors';

const MyText = ({title,h1P,h2P,h3P,h4P,pP,pP2,pP3,inputlabelP,pR,pR2,pR3,pR3I,num,grey,white,black,main,underlined,style,...rest}) => {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        Poppins_900Black,
        Roboto_400Regular,
        Roboto_400Regular_Italic,
        Roboto_500Medium,
        Roboto_700Bold,
        Roboto_900Black,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (<Text style={[
            h1P && styles.heading1P, 
            h2P && styles.heading2P,
            h3P && styles.heading3P,
            h4P && styles.heading4P,
            pP && styles.paragraphP,
            pP2 && styles.paragraphP2,
            pP3 && styles.paragraphP3,
            inputlabelP && styles.inputlabelP,
            pR && styles.paragraphR,
            pR2 && styles.paragraphR2,
            pR3 && styles.paragraphR3,
            pR3I && styles.paragraphR3I,
            num && styles.num,
            grey && styles.grey,
            white && styles.white,
            black && styles.black,
            main && styles.main,
            underlined && styles.underlined,
            style,
        ]}{...rest}>
        {title}
        </Text>
        )
    }
    


    
};

const styles = StyleSheet.create({
    heading1P:{
        fontFamily:"Poppins_600SemiBold",
        fontSize:adjust(30),
    },
    heading2P:{
        fontFamily:"Poppins_600SemiBold",
        fontSize:adjust(25),
    },
    
    heading3P:{
        fontFamily:"Poppins_600SemiBold",
        fontSize:adjust(20),
    },
    heading4P:{
        fontFamily:"Poppins_600SemiBold",
        fontSize:adjust(15),
    },
    paragraphP:{
        fontFamily:"Poppins_400Regular",
        fontSize:adjust(16),
    },
    paragraphP2:{
        fontFamily:"Poppins_400Regular",
        fontSize:adjust(14),
    },
    paragraphP3:{
        fontFamily:"Poppins_400Regular",
        fontSize:adjust(12),
    },
    inputlabelP:{
        fontFamily:"Poppins_600SemiBold",
        fontSize:adjust(12),
    },
    paragraphR:{
        fontFamily:"Roboto_400Regular",
        fontSize:adjust(16),
    },
    paragraphR2:{
        fontFamily:"Roboto_400Regular",
        fontSize:adjust(14),
    },
    paragraphR3:{
        fontFamily:"Roboto_400Regular",
        fontSize:adjust(12),
    },
    paragraphR3I:{
        fontFamily:"Roboto_400Regular_Italic",
        fontSize:adjust(12),
    },
    num:{
        fontFamily:"Roboto_400Regular",
        fontSize:adjust(25),
    },
    grey:{
        color:colors.grey
    },
    white:{
        color:colors.white
    },
    black:{
        color:colors.black
    },
    main:{
        color:colors.mainColor,
    },
    underlined:{
        textDecorationLine:"underline",
        textDecorationColor:colors.mainColor,  //only available in IOS if not have to use 'color:' to change both the text and line color
    },

})

export default MyText;