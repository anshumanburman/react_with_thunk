import * as Utils from '../utility';

export default function planetsReducer(state = {}, action) {
    switch (action.type) {
        case Utils.ApiTypes.PLANETS_LIST_METHOD:
            return { ...state, fetching: true, error: null };
            break;
        case Utils.ApiTypes.PLANETS_LIST_SUCCESS:
            return { ...state, fetching: false, error: null, data: action.payload.results };
            break;
        case Utils.ApiTypes.PLANETS_LIST_FAILURE:
            return { ...state, fetching: false, error: action.error, data: null };
            break;
        default:
            return state;
    }
}