import { REDUX_ASYNC_PENDING } from '../../../utils/constants'

const loader = (state: any = {}, action: any) => {
    const { type } = action
    const matches = /(.*)_(PENDING|SUCCESS|FAIL)/.exec(type)

    // not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them
    if (!matches) return state
    console.log('matches', matches)
    const [, requestName, requestState] = matches
    return {
        ...state,
        // Store whether a request is happening at the moment or not
        // e.g. will be true when receiving GET_TODOS_REQUEST
        //      and false when receiving GET_TODOS_SUCCESS / GET_TODOS_FAILURE
        [requestName]: requestState === REDUX_ASYNC_PENDING,
    }
}

export default loader
