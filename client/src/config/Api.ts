import axios, { AxiosError, AxiosResponse } from 'axios';

import { ApiError } from '@/types';

const baseUrl = process.env.VITE_API_BASE_URL;
const instance = axios.create({ withCredentials: true });

const handleError = (error: AxiosError): ApiError => {
    const customError: ApiError = { message: "" }

    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        customError.message = error.response.data as string;
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        customError.message = "The server is unreachable.";
        console.error(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        customError.message = "The client can't send request";
        console.error('Error', error.message);
      }
      return customError;
}

export const Api = {
    get<T>(endpoint: string): Promise<T> {
        return new Promise((resolve, reject) => {
            instance.get(`${baseUrl}${endpoint}`)
                .then((response: AxiosResponse) => resolve(response.data as T))
                .catch((err: AxiosError) => reject(handleError(err)));
        });
    },
    post<T>(endpoint: string, body: object): Promise<T> {
        return new Promise((resolve, reject) => {
            instance.post(`${baseUrl}${endpoint}`, body)
                .then((response: AxiosResponse) => resolve(response.data as T))
                .catch((err: AxiosError) => reject(handleError(err)))
        });
    },
    patch<T>(endpoint: string, body: unknown): Promise<T> {
        return new Promise((resolve, reject) => {
            instance.patch(`${baseUrl}${endpoint}`, body)
                .then((response: AxiosResponse) => resolve(response.data as T))
                .catch((err: AxiosError) => reject(handleError(err)));
        });
    },
    delete<T>(endpoint: string): Promise<T> {
        return new Promise((resolve, reject) => {
            instance.delete(`${baseUrl}${endpoint}`)
                .then((response: AxiosResponse) => resolve(response.data as T))
                .catch((err: AxiosError) => reject(handleError(err)));
        });
    },
}