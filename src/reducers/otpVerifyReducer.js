import * as Utils from '../utility';

export default function otpVerifyReducer(state = {}, action) {
    switch (action.type) {
        case Utils.ApiTypes.OTP_VERIFY_METHOD:
            return { ...state, fetching: true, error: null };
            break;
        case Utils.ApiTypes.API_OTP_VERIFY_SUCCESS:
            return { ...state, fetching: false, error: null, data: action.payload };
            break;
        case Utils.ApiTypes.API_OTP_VERIFY_FAILURE:
            return { ...state, fetching: false, error: action.error, data: undefined };
            break;
        default:
            return state;
    }
}