import { useDispatch } from "react-redux";
import { storeAdminDashboardObj, storeRequestApprovalArray, removeAdminDashboardObj } from "../redux/admindashboardslice";

import conn from '../api/connection';

export default () => {
    const dispatch = useDispatch();

    const demo = ({errCallback}) => {
        errCallback({msg: "Unable to fetch data, please try again"});
    }

    const adminDashboard = async ({errCallback}) => {
        try{
            const response = await getDashboardContent();
            dispatch(storeAdminDashboardObj(response.data))
        } catch (err) {
            // Had to change to some sort of alert
            errCallback({msg: "Unable to fetch data, please try again"});
        }   
    }

    const adminRequestApproval = async ({errCallback}) => {
        try{
            const response = await getRequestApprovalFulltime();
            console.log(response.data.visitRequestCarList);
            dispatch(storeRequestApprovalArray(response.data))
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

  
    // Return object let me can select what object i can take freely. Array you need to stick on position, eg. The adminRequestApproval at second postiion, when you import you will only get the function when you import the first and the second
    return {adminDashboard,adminRequestApproval,demo};
}
