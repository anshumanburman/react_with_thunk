import React,{useState, useEffect} from 'react';
import NavBar from './navBar';

const Home = () => {
    const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      window.addEventListener("resize", handleWindowSizeChange);
  
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    });
  
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };
    return (
     <NavBar/>
  );
}

export default Home;
