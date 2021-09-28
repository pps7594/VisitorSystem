import { useSelector, useDispatch } from "react-redux";
import { storeResidentDashboardObj,storeVisitRequestArray,storeResidentReportArray,storeWalkInAllowed } from '../redux/residentslice'
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

    const residentVisitRequest = async ({errCallback}) => {
        const userID = userObj.userObj.userID;
        try{
            const response = await getResidentVisitRequest({userID});
            dispatch(storeVisitRequestArray(response.data))
        } catch (err) {
            // Had to change to some sort of alert
            errCallback({msg: "Unable to fetch data, please try again"});
        }   
    }

    const residentReport = async ({errCallback,timeframe}) => {
        const userID = userObj.userObj.userID;
        try{
            if(timeframe) {
                const response = await getResidentReportTimeframe({userID,timeframe});
                dispatch(storeResidentReportArray(response.data))
            }
            else {
                const response = await getResidentReportFullTime({userID});
                dispatch(storeResidentReportArray(response.data))
            } 
        } catch (err) {
            // Had to change to some sort of alert
            errCallback({msg: "Unable to fetch data, please try again"});
        }   
    }

    const residentProfile = async ({errCallback}) => {
        try{
            // Get UID we stored earlier
            const UID = await AsyncStorage.getItem('UID');

            const response = await getUserObj(UID.substring(1));
            dispatch(storeUserObj(response.data))
        } catch (err) {
            // Had to change to some sort of alert
            errCallback({msg: "Unable to fetch data, please try again"});
        } 
    }

    const residentWalkInAllowed = async({errCallback}) => {
        try{
            const response = await getWalkInAllowed();
            dispatch(storeWalkInAllowed(response.data));
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

    const getResidentVisitRequest = async ({userID}) => {
        return conn.get(`/m/residentvisitrequest?userID=${userID}`,{
            data: {},
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    const getResidentReportFullTime = async ({userID}) => {
        return conn.get(`/m/residentreport?userID=${userID}`,{
            data: {},
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }
    const getResidentReportTimeframe = async ({userID,timeframe}) => {
        return conn.get(`/m/residentreport?userID=${userID}&timeframe=${timeframe}`,{
            data: {},
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    const getUserObj = async (ID) => {
        return conn.get(`/m/profile?userID=${ID}`,{
            data: {},
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    const getWalkInAllowed = async () => {
        return conn.get(`/m/getregister`,{
            data: {},
            headers: {
                'Content-Type': 'application/json',
            }
        }) 
    }
    return {residentDashboard,residentVisitRequest,residentReport,residentProfile,residentWalkInAllowed};
}
