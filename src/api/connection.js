/* Communicate with API in track-server */
import axios from 'axios';

// Import AsyncStorage to extract the token
import AsyncStorage from '@react-native-async-storage/async-storage';


const axiosLink = axios.create({
    baseURL: 'http://192.168.1.18:8080' // If you run on physical device, we will run via ngrok URL (port forwarding)
});

// We want this link to do some function, which is adding a token into every request it make every time before we use this axios to send API request 
axiosLink.interceptors.request.use(
    async (config) => {

        const token = await AsyncStorage.getItem('token');

        if (token) {
            // Authorization is the header meta
            config.headers.Authorization = `BearerJmJ ${token}`;
        }

        return config;
    },
    (err) => {
        // Function 2 - Called automatically when there is error in the request, comprises of error that happen on sending (in client), in sending (at server), after sending (server response)
        return Promise.reject(err)
    }
);

export default axiosLink;