import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import otpVerifyReducer from './otpVerifyReducer';
import peopleReducer from './peopleReducer';
import plantesReducer from './plantesReducer';


const rootReducer = combineReducers({
    loginReducer,
    peopleReducer,
    plantesReducer
});

export default rootReducer;