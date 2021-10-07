import { useSelector, useDispatch } from "react-redux";
import { storeWalkInAllowed, storeCurrentVisitorlist } from '../redux/guardslice'
import { storeUserObj } from "../redux/credential";

import conn from '../api/connection';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default () => {
    const dispatch = useDispatch();
    const userObj = useSelector((state) => state.credential.userWithAddress); 

    const guardWalkInAllowed = async({errCallback}) => {
        try{
            const response = await getWalkInAllowed();
            dispatch(storeWalkInAllowed(response.data));
        } catch (err) {
            errCallback({msg: "Unable to fetch data, please try again"});
        } 
    }

    const guardCurrentVisitorlist = async({errCallback}) => {
        try{
            const response = await getCurrentVisitorlist();
            dispatch(storeCurrentVisitorlist(response.data));
        } catch (err) {
            errCallback({msg: "Unable to fetch data, please try again"});
        } 
    }


    // Helper Function
    const getWalkInAllowed = async () => {
        return conn.get(`/m/getregister`,{
            data: {},
            headers: {
                'Content-Type': 'application/json',
            }
        }) 
    }

    const getCurrentVisitorlist = async () => {
        return conn.get(`/m/getcurrentvisitorlist`,{
            data: {},
            headers: {
                'Content-Type': 'application/json',
            }
        }) 
    }
    return {guardWalkInAllowed,guardCurrentVisitorlist};
}
