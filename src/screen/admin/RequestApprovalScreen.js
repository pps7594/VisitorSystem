import React, { useEffect } from 'react'
import { View, Text, Button} from 'react-native'
import { useDispatch, useSelector } from "react-redux";
//import function
import adminFunction from '../../functions/adminFunction';

const RequestApprovalScreen = ({navigation}) => {

    const {adminRequestApproval} = adminFunction();
    const requestApprovalArray = useSelector((state) => state.admindashboardSlice.requestapprovalarray); 

    // Helper Function
    const errCallback = ({msg}) => {
        // Some refinement should be done? Like header of this alert should not only be "alert"?
        alert(msg)
    }

    useEffect(() => {
        // Trigger the API call every time we navigate to this screen, as a Event listener
        navigation.addListener('focus', () => adminRequestApproval({errCallback}));
    }, []);

    return (
        <View>
            { 
                requestApprovalArray ? 
                requestApprovalArray.map((item) => {
                    const expectedArriveDateTime = new Date (Date.parse(item.visitRequestObj.expectedArriveDateTime));
                    // var expectedArriveDateTimeAMPM = expectedArriveDateTime.getHours() >= 12 ? '\n P.M.' : '\n A.M.';
                    // const expectedArriveTime = expectedArriveDateTime.to + ' ' + expectedArriveDateTimeAMPM;

                    const expectedLeavingDateTime = new Date (Date.parse(item.visitRequestObj.expectedLeavingDateTime));
                    // var expectedLeavingDateTimeAMPM = expectedLeavingDateTime.getHours() >= 12 ? '\n P.M.' : '\n A.M.';
                    // const expectedLeavingTime = expectedLeavingDateTime.toTimeString().substring(0,5) + ' ' + expectedLeavingDateTimeAMPM;

                    const nameWithAddress = item.visitRequestObj.address.split(";")
                    return (
                    <View key={item.visitRequestObj.visitRequestId}>
                        <Text>{"#VR-" + item.visitRequestObj.visitRequestId}</Text>
                        <Text>{"Name:" + nameWithAddress[0]}</Text>
                        <Text>{"Address:" + nameWithAddress[1]}</Text>
                        {/* Date Time format need change */}
                        <Text>{"Expected Arrive Time: Some format may need to change: " + expectedArriveDateTime}</Text>
                        <Text>{"Expected Leaving Time: Some format may need to change: " + expectedLeavingDateTime}</Text>

                        {/* If statement for tagging */}
                        <Text>{"Walkin Visitor: " + item.visitRequestObj.walkInVisitor}</Text>

                        {/* The Pending tag need to appear? If yes find it here*/}
                        <Text>{"Status: " + item.visitRequestObj.status}</Text>

                        <Text>{"AdditionalNotes: "  + item.visitRequestObj.additionalNotes}</Text>
                    </View>
                    )
                }) : null
            }
            <Text>AdminRequestApprovalScreen</Text>
        </View>
    )
};

export default RequestApprovalScreen;
