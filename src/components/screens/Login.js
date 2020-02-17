import React, { useEffect, useState, useLayoutEffect } from 'react'
import './Styles.css'
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {peopleListAction} from '../../actions';
import {PeopleData} from '../../PeopleList';



const Login = ()=>{
    const { loginRes, fetching, error,peopleList } = useSelector(state => ({
        loginRes: state.loginReducer.data,
        fetching: state.loginReducer.fetching,
        error: state.loginReducer.error,
        peopleList:state.peopleReducer.data
    }), shallowEqual);
    const dispatch = useDispatch();

    const [peopleListArray, setPeopleArray] = useState([]);



    const loginClick = (e)=>{
        console.log("event ");
        
        //if (Utils.Validation.IsMobileNumber(mobileRef) === false) { return }
        // dispatch(loginAction({
        //     mobile: mobileNumber,
        //     device_id: getUniqueId(),
        //     device_type: Platform.OS === "ios" ? "I" : "A",
        //     devicetoken: token
        // }))
        
    }
   const onchange=(e)=>{
       console.log(e.target.id);
       console.log(e.target.value);
       
   }
useLayoutEffect(()=>{
    console.log("People");
    dispatch(peopleListAction(1))
   // console.log("peopleList ::::::: ",peopleList);
    //setPeopleArray(peopleList)
},[])

useEffect(()=>{
     console.log("peopleList ::::::: ",peopleList);
     setPeopleArray(peopleList)
})
useEffect(()=>{
    console.log("peopleListArray ::::::: ",peopleListArray);
},[peopleListArray])
    return(
        <div className="wrapper fadeInDown">
  <div id="formContent">
                <div className="fadeIn first">
                    <img src="https://img.icons8.com/bubbles/2x/login-rounded-right.png" id="icon" alt="User Icon" />
                </div>
                <form>
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" onChange={onchange}/>
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" onChange={onchange}/>
                    <input type="submit" className="fadeIn fourth" value="Log In" onClick={loginClick}/>
                </form>
                <div id="formFooter">
                    <a className="underlineHover" href="#">Forgot Password?</a>
                </div>
            </div>
        </div>
    )
}

export default Login;