import Axios from 'axios';

export type ErrorResponse = {
    name: string,
    httpStatus: string,
    message: string,
};

export const axios = Axios.create({
    baseURL: `http://${process.env.BACK_END_URL || "localhost:3000"}`,
    headers: {
        Accept: "application/json",
    },
});

axios.interceptors.request.use((req) => {
    console.log(JSON.stringify({
        timestamp: new Date().toISOString(),
        type: "AXIOS_API_CALL",
        content: {
            method: `HTTP_${req.method?.toUpperCase()}`,
            url: req.url,
        },
    }));
    return req;
});

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const message = error.response?.data?.message || error.message;
        console.error(message);
        return Promise.reject(error);
    }
);
