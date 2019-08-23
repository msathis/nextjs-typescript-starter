import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import axiosMiddleware from 'redux-axios-middleware'
import { createLogger } from 'redux-logger'

import rootReducer from './reducers'
import getAPIClient from '../utils/APIClient'

const logger = createLogger()
const APPHTTPService = getAPIClient().getHTTPServiceInstance()

export function configureStore(initialState = {}) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk, axiosMiddleware(APPHTTPService), logger),
        ),
    )
}
