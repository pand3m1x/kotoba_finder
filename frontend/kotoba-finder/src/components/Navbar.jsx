import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar(){

  return(
    <>
      <nav id="Nav" style={{border:"2px solid red",}}>

        <ul style={{listStyle:"none", 
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    padding:"5px"}}>
          <li><Link to="/"><b>Kotoba Finder</b></Link></li>
          {"|"}
          <li><Link to="/register">Register</Link></li>
          {"|"}
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar