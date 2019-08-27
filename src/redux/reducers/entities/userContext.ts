import { FETCH_USER_CONTEXT } from '../../actions/userContextActions'

const userContext = (state: any = {}, action: any) => {
    switch (action.type) {
        case FETCH_USER_CONTEXT.SUCCESS:
            return action.payload.data
        default:
            return state
    }
}

export default userContext
