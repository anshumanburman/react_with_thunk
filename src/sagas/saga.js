import { put, takeLatest, all } from 'redux-saga/effects';
import * as Utils from '../utility';
import callApis from '../services/apiCall';

export function* loginAction(action){
    console.log('action in saga :::: ',action)
      try {
        const data = yield callApis(action)
        console.log('data fetch login ::::: ',data)
        yield put({type: Utils.ApiTypes.API_LOGIN_SUCCESS,payload: data})
      }catch(e){
        yield put({type: Utils.ApiTypes.API_LOGIN_FAILURE})
      }
  }
  export function* peopleListAction(action){
    console.log('action in saga :::: ',action)
      try {
        const data = yield callApis(action)
        console.log('data fetch login ::::: ',data)
        yield put({type: Utils.ApiTypes.PEOPLE_LIST_SUCCESS,payload: data})
      }catch(e){
        yield put({type: Utils.ApiTypes.PEOPLE_LIST_FAILURE})
      }
  }
  export function* planetsListAction(action){
    console.log('action in saga :::: ',action)
      try {
        const data = yield callApis(action)
        console.log('data fetch login ::::: ',data)
        yield put({type: Utils.ApiTypes.PLANETS_LIST_SUCCESS,payload: data})
      }catch(e){
        yield put({type: Utils.ApiTypes.PLANETS_LIST_FAILURE})
      }
  }