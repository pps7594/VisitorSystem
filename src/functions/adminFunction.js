import { useDispatch } from "react-redux";
import { storeAdminDashboardObj, storeRequestApprovalArray, storeVisitRequestArray, storeAdminReportArray, storeDefaultSetting, removeAdminDashboardObj } from "../redux/admindashboardslice";
import { storeUserObj} from "../redux/credential";

import conn from '../api/connection';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default () => {
    const dispatch = useDispatch();

    const adminDashboard = async ({errCallback}) => {
        try{
            const response = await getDashboardContent();
            dispatch(storeAdminDashboardObj(response.data))
        } catch (err) {
            // Had to change to some sort of alert
            errCallback({msg: "Unable to fetch data, please try again"});
        }   
    }

    const adminRequestApproval = async ({errCallback,timeframe}) => {
        try{
            if(timeframe) {
                const response = await getRequestApprovalTimeframe(timeframe);
                dispatch(storeRequestApprovalArray(response.data))
            }
            else {
                const response = await getRequestApprovalFulltime();
                dispatch(storeRequestApprovalArray(response.data))
            }
            
        } catch (err) {
            // Had to change to some sort of alert
            errCallback({msg: "Unable to fetch data, please try again"});
        }   
    }

    const adminVisitRequest = async ({errCallback,timeframe}) => {
        try{
            if(timeframe) {
                const response = await getAdminVisitRequestTimeframe(timeframe);
                dispatch(storeVisitRequestArray(response.data))
            }
            else {
                const response = await getAdminVisitRequestFulltime();
                dispatch(storeVisitRequestArray(response.data))
            }
            
        } catch (err) {
            // Had to change to some sort of alert
            errCallback({msg: "Unable to fetch data, please try again"});
        } 
    }

    const adminReport = async ({errCallback,timeframe}) => {
        try{
            if(timeframe) {
                const response = await getAdminReportTimeframe(timeframe)
                dispatch(storeAdminReportArray(response.data))
            }
            else {
                const response = await getAdminReportFulltime()
                dispatch(storeAdminReportArray(response.data))
            }
        } catch (err) {
            // Had to change to some sort of alert
            errCallback({msg: "Unable to fetch data, please try again"});
        } 
    }

    const adminDefaultSetting = async ({errCallback}) => {
        try{
            const response = await getDefaultSetting();
            dispatch(storeDefaultSetting(response.data))
        } catch (err) {
            // Had to change to some sort of alert
            errCallback({msg: "Unable to fetch data, please try again"});
        } 
    }

    const adminProfile = async ({errCallback}) => {
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

    // Helper Function
    const getDashboardContent = async () => {
        return conn.get('/m/admin',{
            data: {},
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    const getRequestApprovalFulltime = async () => {
        //Fulltime means no timeframe one
        return conn.get('/m/adminapproval',{
            data: {},
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    const getRequestApprovalTimeframe = async (timeframe) => {
        return conn.get(`/m/adminapproval?timeframe=${timeframe}`,{
            data: {},
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    const getAdminVisitRequestFulltime = async () => {
        return conn.get('/m/adminvisitrequest',{
            data: {},
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    const getAdminVisitRequestTimeframe = async (timeframe) => {
        return conn.get(`/m/adminvisitrequest?timeframe=${timeframe}`,{
            data: {},
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    const getAdminReportFulltime = async () => {
        return conn.get('/m/adminreport',{
            data: {},
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    const getAdminReportTimeframe = async (timeframe) => {
        return conn.get(`/m/adminreport?timeframe=${timeframe}`,{
            data: {},
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    const getDefaultSetting = async () => {
        return conn.get('/m/adminsystemsetting',{
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
  
    // Return object let me can select what object i can take freely. Array you need to stick on position, eg. The adminRequestApproval at second postiion, when you import you will only get the function when you import the first and the second
    return {adminDashboard,adminRequestApproval,adminVisitRequest,adminReport,adminDefaultSetting,adminProfile};
}
