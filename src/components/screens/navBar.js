import React from 'react';
import { Link } from "react-router-dom";


const NavBar = () => {
    const [count,setCount] = React.useState(0);
let increaseCount = (e)=>{
 setCount(count+1);
}

    return(
        <div>
        {/* <nav className="navbar navbar-dark bg-dark">
          <div style={{display:"flex"}}>
          <button onClick={increaseCount} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
        <h3>hii{count}</h3>
        </div>
   </nav> */}
    <nav class="navbar navbar-expand-lg navbar-light" style={{ zIndex: "9" }}>
    <div className="container">
    <div
            class="card shadow "
            style={{ marginTop: "-12px", border: "none" }}
          >
              <div class="card-body" style={{ padding: "1rem" }}>
              <Link to="/" class="navbar-brand">
                <img
                  src={require("../../img/logo.png")}
                  width="150"
                  height="42"
                  alt=""
                />
              </Link>
            </div>
          </div>
    </div>
    </nav>
       </div>
    );
}

export default NavBar;