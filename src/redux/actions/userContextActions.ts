import { fetchActionTypes } from '../../utils'

export const FETCH_USER_CONTEXT = fetchActionTypes('FETCH_USER_CONTEXT')

export const fetchUserContext = () => ({
    type: [
        FETCH_USER_CONTEXT.PENDING,
        FETCH_USER_CONTEXT.SUCCESS,
        FETCH_USER_CONTEXT.FAIL,
    ],
    payload: {
        request: {
            url: `/api/userContext`,
        },
    },
})
