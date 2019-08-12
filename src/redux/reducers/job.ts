import { SET_SELECTED } from "../actions/job";

const defaultState = {
    selected: null
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case SET_SELECTED:
            return {
                ...state,
                selected: action.selected
            };

        default:
            return state;
    }
};

/*{
    job: {},
    user: {},
    
}
*/