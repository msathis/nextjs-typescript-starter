import getAPIClient from '../utils/APIClient'

const beforeRequestCallback = config => {
    return config
}

const initilizeAPPHTTPService = () => {
    const APIClient = getAPIClient()
    APIClient.setRequestInterceptors(beforeRequestCallback)
}

export default initilizeAPPHTTPService
