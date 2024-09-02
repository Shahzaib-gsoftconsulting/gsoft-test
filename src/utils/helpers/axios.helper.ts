import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const apiClient: AxiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor
apiClient.interceptors.request.use(
    (config) => {
        // config.headers['Authorization'] = 'Bearer YOUR_TOKEN';
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// Response Interceptor
apiClient.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError) => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // Handle unauthorized access
                    break;
                case 403:
                    // Handle forbidden access
                    break;
                case 500:
                    // Handle server errors
                    break;
                default:
                    break;
            }
        }
        return Promise.reject(error);
    }
);

// Utility functions
export const apiGet = <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    apiClient.get<T>(url, config).then((response: AxiosResponse<T>) => response.data);

export const apiPost = <T, U = unknown>(url: string, data: U, config?: AxiosRequestConfig): Promise<T> =>
    apiClient.post<T>(url, data, config).then((response: AxiosResponse<T>) => response.data);

export const apiPut = <T, U = unknown>(url: string, data: U, config?: AxiosRequestConfig): Promise<T> =>
    apiClient.put<T>(url, data, config).then((response: AxiosResponse<T>) => response.data);

export const apiPatch = <T, U = unknown>(url: string, data: U, config?: AxiosRequestConfig): Promise<T> =>
    apiClient.patch<T>(url, data, config).then((response: AxiosResponse<T>) => response.data);

export const apiDelete = <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    apiClient.delete<T>(url, config).then((response: AxiosResponse<T>) => response.data);