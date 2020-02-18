import {all,takeLatest} from 'redux-saga/effects';
import {loginAction,otpVerifyAction,peopleListAction,planetsListAction} from './saga';
import * as Utils from '../utility';


function* watchLoginAction(){
    yield takeLatest(Utils.ApiTypes.LOGIN_METHOD, loginAction )
}
function* watchpeopleListAction(){
    yield takeLatest(Utils.ApiTypes.PEOPLE_LIST_METHOD, peopleListAction )
}
function* watchPlanetsListAction(){
    yield takeLatest(Utils.ApiTypes.PLANETS_LIST_METHOD, planetsListAction )
}






function* rootSaga(){
    yield all([
          watchLoginAction(),
          watchpeopleListAction(),
          watchPlanetsListAction()
         
    ])
}

export default rootSaga;