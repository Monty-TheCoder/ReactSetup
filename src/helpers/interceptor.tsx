import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_APP_API_SERVER_URL}/`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});
export const useGlobalLoader = () => {
    const [isLoading, setIsloading] = useState(false);// ti is planning for globally loader setting if u dont want then reamove it
    // Interceptor for handling request errors
    axiosInstance.interceptors.request.use(
        (config) => {
            setIsloading(true)
            const token = localStorage.getItem('YOUR_TOKEN');
            if (token) {
                config.headers.set("Authorization", `Bearer ${import.meta.env.VITE_APP_TOKEN || token}`);
            }
            return config;
        },
        (error) => {
            setIsloading(false)
            return Promise.reject(error);
        }
    );

    // Interceptor for handling response errors
    axiosInstance.interceptors.response.use(
        (response) => {
            setIsloading(true)
            return response;
        },
        (error: AxiosError) => {
            setIsloading(false)
            if (error.message === "Network Error") {
                toast.error("Network issue. Please try again later.");
                return Promise.reject(error);
            }
            if (error.status !== 500) {
                toast.error(error.message, { duration: 3000 })
                return Promise.reject(error);
            }
        }
    );
    return isLoading
}

export default axiosInstance;
