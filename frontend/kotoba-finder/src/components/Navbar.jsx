import { Link } from 'react-router-dom';
import { useUser } from "../context/UserContext"

function Navbar(){

    const { user, logout } = useUser()

  return(
    <>
      <nav id="Nav" style={{border:"2px solid red",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    padding:"5px"
      }}>
       <li  style={{listStyle:"none", }}>
         <Link to="/"><b>Kotoba Finder</b></Link>
       </li>
       {user && <p>こんにちは {user.username} </p>}

        <ul style={{listStyle:"none", 
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    padding:"5px"}}>
          {user ? 
            <>
              <li><Link to="/vocab">Vocab Deck</Link></li> 
              {"|"}
              <li onClick={logout}><Link to="/login">Logout</Link></li>
            </>
            :
            <>
              <li><Link to="/"><b>Kotoba Finder</b></Link></li>
              {"|"}
              <li><Link to="/register">Register</Link></li>
              {"|"}
              <li><Link to="/login">Login</Link></li>
            </>
          }
        </ul>
      </nav> 
    </>
  )
}

export default Navbar