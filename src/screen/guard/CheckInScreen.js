import React from 'react'
import { View, Text, Button} from 'react-native'
import { useDispatch, useSelector } from "react-redux";

const CheckInScreen = () => {
    const QRVisitRequest = useSelector((state) => state.guard.qrvisitrequest);

    console.log(QRVisitRequest)

    // Sample Output Result as follows
    /*
    "ResidentDetails": Object {
        "residentObj": Object {
            "houseNumber": 12,
            "houseStreet": "avx",
            "residentsTel": "3333333333",
            "userID": 1002,
            "userRole": "R",
        },
        "userObj": Object {
            "actives": "ACTIVE",
            "userEmail": "resident@gmail.com",
            "userID": 1002,
            "userName": "resident",
            "userPassword": "$2a$10$YKv4XZzkfnZ7IT/gnPZdOet70Jx//TEwkvs9ZgwkAr6Sd2idhlQK.",
            "userRole": "R",
        },
    },
    "SpecificVisitRequest": Object {
        "visitRequestCarList": Array [
            Object {
                "peopleCount": 2,
                "vehicleTypeNotes": "",
                "visitRequestCarID": 1000000039,
                "visitRequestID": "10045",
                "visitorName": "secondcar",
                "visitorPlateNum": "C11",
                "visitorTel": "0123456",
                "visitorVehicleType": "",
            },
            Object {
                "peopleCount": 1,
                "vehicleTypeNotes": "",
                "visitRequestCarID": 1000000040,
                "visitRequestID": "10045",
                "visitorName": "T",
                "visitorPlateNum": "A123",
                "visitorTel": "019191991",
                "visitorVehicleType": "",
            },
        ],
        "visitRequestObj": Object {
            "additionalNotes": "3days",
            "address": "address ",
            "expectedArriveDateTime": "2021-11-01T19:00:00",
            "expectedLeavingDateTime": "2021-11-02T21:46:06.33",
            "reason": "ga",
            "status": "Approved",
            "userID": 1002,
            "userRole": "R",
            "visitRequestId": "10045",
            "visitorType": "1",
            "walkInVisitor": 1,
        },
    },
    */
    return (
        <View>
            <Text>CheckInScreen</Text>
        </View>
    )
};

export default CheckInScreen;