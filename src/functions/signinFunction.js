import { useDispatch, useSelector } from "react-redux";
import { storeUserObj, storeErrorMsg , removeErrorMsg} from "../redux/credential";
import AsyncStorage from "@react-native-async-storage/async-storage";

import conn from '../api/connection';

export default () => {
    const dispatch = useDispatch();
    const errorMsg = useSelector((state) => state.credential.errorMsg);

    const signin = async ({userID,password,callback}) => {
        try{
            // Remove the error message everytime sign in
            if(errorMsg){
                dispatch(removeErrorMsg())
            }
            const ID = userID.substring(1);
            

            // Clear the JWT first everytime sign in
            if(await AsyncStorage.getItem('token')){
                AsyncStorage.removeItem('token');
            }

            const response = await getToken(ID,password);
            
            await AsyncStorage.setItem('token',response.data.jwt);
            await AsyncStorage.setItem('UID',userID);
            await AsyncStorage.setItem('PW',password);

            const response2 = await getUserObj(ID);
            const role = response2.data.userObj.userRole;

            // Only allow if the role is similar to input role
            if(userID.substring(0,1) == role){
                dispatch(storeUserObj(response2.data))
            
                if(role === 'A' || role === 'H'){
                    callback({path : "Admin"});
                }
                else if (role === 'R'){
                    callback({path : "Resident"});
                }
                else if (role === 'G'){
                    callback({path : "Guard"});
                }
            }
            else {
                // Just throw error with a variable, this error message not so useful for now
                throw "Invalid Credential"
            }
        } catch (err) {
            console.log(err)
            dispatch(storeErrorMsg("Invalid Credential, Please Try Again"))
        }   
    }

    const checkSignature = async ({navigation}) => {
        if(await AsyncStorage.getItem('UID') != null && await AsyncStorage.getItem('PW') != null){
            // AsyncStorage.removeItem('UID')
            // AsyncStorage.removeItem('PW')
            // navigation.navigate("SignIn")
            const UID = await AsyncStorage.getItem('UID');
            const PW = await AsyncStorage.getItem('PW');
            signin({
                userID : UID,
                password : PW,
                callback: ({path}) => {
                    navigation.navigate(path)
                }
            })
        }
        else {
            navigation.navigate("SignIn")
        }
    }

    const logoutFunc = async ({navigation}) => {
        AsyncStorage.getAllKeys()
        .then(keys => AsyncStorage.multiRemove(keys))
        .then(() =>  navigation.navigate("Entry"));
    }

    // Helper Function
    const getToken = async (ID, password) => {
        return conn.post('/m/login',
        // This will become something inside 'req.body' parameter, note that we extract this from 'req.body' in server
            { 
                userObj: {
                    // As we only keep the ID. E.g. A1000 = 1000, G120012 = 120012
                    userID : ID,
                    userPassword : password
                }
            }
        )
    }

    const getUserObj = async (ID) => {
        return conn.get(`/m/profile?userID=${ID}`,{
            data: {},
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    return {signin,checkSignature,logoutFunc};
}
