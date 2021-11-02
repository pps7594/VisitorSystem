import { useSelector, useDispatch } from "react-redux";
import { storeWalkInAllowed, storeCurrentVisitorlist, storeQRVisitRequest } from '../redux/guardslice'
import { storeUserObj } from "../redux/credential";

import conn from '../api/connection';



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

    const guardScanQR = async ({data, errCallback,callback}) => {
        try {
            const response = await getvisitrequest(data);
            dispatch(storeQRVisitRequest(response.data))
            errCallback({msg: "Successful"})
            callback({path:"GuardCheckIn"});
        } catch (error) {
            // Had to change to some sort of alert
            errCallback({msg:"Unable to get data, please try again"});
            // console.log(response)
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

    const getvisitrequest = async (data) => {
        return conn.get(`${data}`,{
            data: {},
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    return {guardWalkInAllowed,guardCurrentVisitorlist,guardScanQR};
}
