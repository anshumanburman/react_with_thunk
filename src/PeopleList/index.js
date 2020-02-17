import React, { useEffect } from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {peopleListAction} from '../../src/actions';




export const PeopleData = ()=> {
    const { loginRes, fetching, error } = useSelector(state => ({
        loginRes: state.loginReducer.data,
        fetching: state.loginReducer.fetching,
        error: state.loginReducer.error,
    }), shallowEqual);
    const dispatch = useDispatch();

useEffect(()=>{
    dispatch(peopleListAction(1))
})

return { loginRes, fetching, error }

}