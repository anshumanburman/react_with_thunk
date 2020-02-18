import React,{useState, useEffect, Fragment, useMemo} from 'react';
import NavBar from './navBar';
import Login from './Login';
import './Styles.css';
import {planetsListAction} from '../../actions';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import * as Utils from '../../utility';
import UserDetails from '../pages/UserDetails';

const Home = ({history}) => {
  const { planetsList } = useSelector(state => ({
    planetsList: state.plantesReducer.data,
    fetching: state.plantesReducer.fetching,
    error: state.plantesReducer.error,
}), shallowEqual);
const dispatch = useDispatch();


    const [width, setWidth] = useState(window.innerWidth);
    const [searchListData, setSearchListData] = useState([]);
  
    useEffect(() => {
      dispatch(planetsListAction())
      console.log("home >>>>>>>>>",history);
      console.log("planetsList >>>>>>>>>",planetsList);
      
      window.addEventListener("resize", handleWindowSizeChange);
  
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    },[]);
  useEffect(()=>{
    console.log("get serach list :::::: ",planetsList);
    
  })
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };
    const onchange = (e) => {
      //console.log(e.target.id);
      console.log(e.target.value);
      let searchItems = planetsList.filter(element => {
        return element.name.toLowerCase().includes(e.target.value.toLowerCase());
      })
      console.log("searched items :::::::::::: ",searchItems);
      e.target.value!==""?setSearchListData(searchItems):setSearchListData([])
      
      // switch (e.target.id) {
      //     case "login":
      //         setLoginInput(e.target.value)
      //         break;
      //     case "password":
      //         setPasswordInput(e.target.value)
      //         break;
      //     default:
      //         break;
      // }

  }
const onSearchBtn = (e)=>{
  console.log("search :::::  ");
        e.preventDefault()
}


    return (
      <Fragment>
      <NavBar/>
      <div className="home_container">
      <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={onchange}/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={onSearchBtn}>Search</button>
    </form>
    <div className="row search-list">
      {searchListData!= undefined && searchListData.map((item, index)=>{
        return <div key={index} className="col-md-12 card">{item.name}</div>
      })}
      {/* <UserDetails /> */}
      {/* <div className="col-md-12 card">label1</div>
      <div className="col-md-12 card">label1</div>
      <div className="col-md-12 card">label1</div>
      <div className="col-md-12 card">label1</div> */}
    </div>
      </div>
    </Fragment>
  );
}

export default Home;
