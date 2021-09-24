import React, {useEffect} from 'react';
import { Text } from 'react-native';
//import function
import signinFunction from '../functions/signinFunction';


const EntryScreen = ({navigation}) => {
    const {checkSignature} = signinFunction();

    // Use to check whether user got credential stored previously or not
    useEffect(() => {
        navigation.addListener('focus', () => checkSignature({navigation}));
    }, []);

    // This screen wont show anything, or you can show your branding
    return <Text>EntryScreen</Text>;
}


export default EntryScreen;