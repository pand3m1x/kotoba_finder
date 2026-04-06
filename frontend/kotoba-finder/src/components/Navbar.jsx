import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext'
import kotobaLogo from '../assets/Logo.svg'

function Navbar(){

    const { user, logout } = useUser()

  return(
    <>
      <nav id="Nav" style={{border:"2px solid rgba(91, 0, 85, 0.75)",
                    backgroundColor:"rgba(108, 1, 101, 0.75)",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    
                    color:"white",
                    height:"80px",
                    width:"99.8%"}}>

       <li  style={{listStyle:"none", }}>
         <Link to="/"><img src={kotobaLogo} alt="kotoba finder logo" style={{ height: "80px", paddingLeft:"20px" }}/></Link>
       </li>
       
       {user && <p style={{fontSize:"1.5rem"}}>こんにちは <i>{user.username} </i></p>}

        <ul style={{listStyle:"none", 
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    paddingRight:"40px",
                    gap:"40px",
                    }}>
          {user ? 
            <>
              <li><Link to="/vocab">Vocab Deck</Link></li> 
              {"|"}
              <li onClick={logout}><Link to="/login">Logout</Link></li>
            </>
            :
            <>
              {/* <li><Link to="/"><b>Kotoba Finder</b></Link></li>
              {"|"} */}
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