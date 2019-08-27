import getAPIClient from '../utils/APIClient'

const beforeRequestCallback = config => {
    config.headers['x-auth'] = 'hello'
    return config
}

const initilizeAPPHTTPService = () => {
    const APIClient = getAPIClient()
    APIClient.setRequestInterceptors(beforeRequestCallback)
}

export default initilizeAPPHTTPService
