import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import otpVerifyReducer from './otpVerifyReducer';
import peopleReducer from './peopleReducer';


const rootReducer = combineReducers({
    loginReducer,
    peopleReducer
});

export default rootReducer;