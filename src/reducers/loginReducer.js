import * as Utils from '../utility';

export default function loginReducer(state = {}, action) {
    switch (action.type) {
        case Utils.ApiTypes.LOGIN_METHOD:
            return { ...state, fetching: true, error: null };
            break;
        case Utils.ApiTypes.API_LOGIN_SUCCESS:
            return { ...state, fetching: false, error: null, data: action.payload };
            break;
        case Utils.ApiTypes.API_LOGIN_FAILURE:
            return { ...state, fetching: false, error: action.error, data: null };
            break;
        default:
            return state;
    }
}