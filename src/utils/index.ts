import {
    REDUX_ASYNC_PENDING,
    REDUX_ASYNC_SUCCESS,
    REDUX_ASYNC_FAIL,
} from './constants'

export const fetchActionTypes = (actionValue: string) => ({
    PENDING: `${actionValue}_${REDUX_ASYNC_PENDING}`,
    SUCCESS: `${actionValue}_${REDUX_ASYNC_SUCCESS}`,
    FAIL: `${actionValue}_${REDUX_ASYNC_FAIL}`,
})
