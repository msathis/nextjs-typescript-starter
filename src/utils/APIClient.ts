import axios, {
    AxiosRequestConfig,
    Method,
    AxiosResponse,
    AxiosInstance,
} from 'axios'

let instance: APIClient = null

type BeforeCallback<V> = (config: V) => V
type ErrorCallback = (error: any) => any

class APIClient {
    private axios: AxiosInstance
    constructor(options: AxiosRequestConfig) {
        this.axios = axios.create(options)
    }

    getHTTPServiceInstance(): AxiosInstance {
        return this.axios
    }

    errorInterceptorsCallback(error: any): any {
        return Promise.reject(error)
    }

    setRequestInterceptors(
        beforeRequestCallback: BeforeCallback<AxiosRequestConfig>,
        errorRequestCallback?: ErrorCallback,
    ) {
        errorRequestCallback =
            errorRequestCallback || this.errorInterceptorsCallback
        this.axios.interceptors.request.use(
            beforeRequestCallback,
            errorRequestCallback,
        )
    }

    setResponseInterceptors(
        beforeResponseCallback: BeforeCallback<AxiosResponse>,
        errorResponseCallback?: ErrorCallback,
    ) {
        errorResponseCallback =
            errorResponseCallback || this.errorInterceptorsCallback
        this.axios.interceptors.response.use(
            beforeResponseCallback,
            errorResponseCallback,
        )
    }

    setHeader(headerName: string, value?: any, method?: Method) {
        this.axios.defaults.headers[method || 'common'][headerName] =
            value || ''
    }

    errorHandler(error: any) {
        if (error.response) {
            return error.response
        }
    }

    get(url: string, config: AxiosRequestConfig) {
        return new Promise((resolve, reject) => {
            this.axios
                .get(url, config)
                .then((response: any) => {
                    resolve(response)
                })
                .catch((error: any) => {
                    reject(this.errorHandler(error))
                })
        })
    }

    // post(url: string, data: any, config: AxiosRequestConfig) {}
    // put(url: string, data: any, config: AxiosRequestConfig) {}
    // patch(url: string, data: any, config: AxiosRequestConfig) {}
    // delete(url: string, config: AxiosRequestConfig) {}
}

const getAPIClient = (options: AxiosRequestConfig = {}): APIClient => {
    if (!instance) instance = new APIClient(options)
    return instance
}

export default getAPIClient
