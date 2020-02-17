import {all,takeLatest} from 'redux-saga/effects';
import {loginAction,otpVerifyAction,peopleListAction} from './saga';
import * as Utils from '../utility';


function* watchLoginAction(){
    yield takeLatest(Utils.ApiTypes.LOGIN_METHOD, loginAction )
}
function* watchpeopleListAction(){
    yield takeLatest(Utils.ApiTypes.PEOPLE_LIST_METHOD, peopleListAction )
}






function* rootSaga(){
    yield all([
          watchLoginAction(),
          watchpeopleListAction()
         
    ])
}

export default rootSaga;