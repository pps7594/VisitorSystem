import { useDispatch } from "react-redux";
import { storeAdminDashboardObj, storeRequestApprovalArray, storeVisitRequestArray, storeAdminReportArray, storeDefaultSetting, storeTempReportArray ,removeAdminDashboardObj, storeTempVisitRequestArray, storeTempRequestApprovalArray } from "../redux/admindashboardslice";
import { storeUserObj } from "../redux/credential";

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
                dispatch(storeTempRequestApprovalArray(response.data))
            }
            else {
                const response = await getRequestApprovalFulltime();
                dispatch(storeRequestApprovalArray(response.data))
                dispatch(storeTempRequestApprovalArray(response.data))
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
                dispatch(storeTempVisitRequestArray(response.data))
            }
            else {
                const response = await getAdminVisitRequestFulltime();
                dispatch(storeVisitRequestArray(response.data))
                dispatch(storeTempVisitRequestArray(response.data))
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
                dispatch(storeTempReportArray(response.data))
            }
            else {
                const response = await getAdminReportFulltime()
                dispatch(storeAdminReportArray(response.data))
                dispatch(storeTempReportArray(response.data))
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

    const postApproval = async (userInputObj,decision,errCallback) => {
        try{
            userInputObj = {...userInputObj, status: decision}
            const response = await postAdminApproval(userInputObj)
            errCallback({msg: "Successful"})
            adminRequestApproval({errCallback});
        } catch (err) {
            // Had to change to some sort of alert
            errCallback({msg:"Unable to post data, please try again"});
        } 
    }

    const postInfo = async (userInputObj, errCallback, callback) => {
        try {
            // console.log(userInputObj)
            const response = await postAdminProfile(userInputObj);
            errCallback({msg: "Successful"})
            callback({path:"AdminProfile"});
        } catch (error) {
            // Had to change to some sort of alert
            errCallback({msg:"Unable to post data, please try again"});
        }
    }

    const postPass = async (userInputObj, errCallback, callback) => {
        try {
            const response = await postAdminPassword(userInputObj);
            // This is the response from our Server
            console.log(response.request._response);
            errCallback({msg: "Password Update Successful, please relogin again"})
            callback({path:'Logout'});
        } catch (error) {
            // Had to change to some sort of alert
            errCallback({msg:"Unable to post data, please try again"});
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

    const postAdminApproval = async (userInputObj) => {
        return conn.post('/m/adminapproval', userInputObj)
    }

    const postAdminProfile = async (userInputObj) => {
        return conn.post('/m/profile', userInputObj)
    }

    const postAdminPassword = async (userInputObj) => {
        return conn.post('/m/changepassword', userInputObj)
    }
  
    // Return object let me can select what object i can take freely. Array you need to stick on position, eg. The adminRequestApproval at second postiion, when you import you will only get the function when you import the first and the second
    return {adminDashboard,adminRequestApproval,adminVisitRequest,adminReport,adminDefaultSetting,adminProfile, postApproval, postInfo, postPass};
}
