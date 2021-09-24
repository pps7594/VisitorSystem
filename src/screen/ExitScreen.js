import React, {useEffect} from 'react';

//import function
import signinFunction from '../functions/signinFunction';


const ExitScreen = ({navigation}) => {
    const {logoutFunc} = signinFunction();

    // Use to check whether user got credential stored previously or not
    useEffect(() => {
        logoutFunc({navigation});
    }, []);

    // This screen wont show anything, or you can show your branding
    return null;
}


export default ExitScreen;