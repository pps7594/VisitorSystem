import { useSelector, useDispatch } from "react-redux";
import { storeResidentDashboardObj } from '../redux/residentslice'
import { storeUserObj } from "../redux/credential";

import conn from '../api/connection';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default () => {
    const dispatch = useDispatch();
    const userObj = useSelector((state) => state.credential.userWithAddress); 

    const residentDashboard = async ({errCallback}) => {
        const userID = userObj.userObj.userID;
        try{
            const response = await getDashboardContent({userID});
            dispatch(storeResidentDashboardObj(response.data))
        } catch (err) {
            // Had to change to some sort of alert
            errCallback({msg: "Unable to fetch data, please try again"});
        }   
    }

    // Helper Function
    const getDashboardContent = async ({userID}) => {
        return conn.get(`/m/resident?userID=${userID}`,{
            data: {},
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    return {residentDashboard};
}
