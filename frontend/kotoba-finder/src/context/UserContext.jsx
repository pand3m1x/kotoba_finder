import { createContext, useContext, useState, useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import { token, userClient } from "../clients/api";

const UserContext = createContext(null)

// check if there's a token
const initialUser = token() ? { username: null} : null


//custom provider
function UserProvider({ children }) {

  // set the initial state to null or temporary user

  const [ user, setUser] = useState(initialUser)
  const navigate = useNavigate()
  
//useEffect that verifies the token and retrieves User Data

useEffect(() => {

  async function getUser() {
    
    try{

    // check if theres a token (if no token skip)
    if (!token()) return

    // use the token to verify the user
    const { data } = await userClient.get('/')
    console.log(data)
    // await new Promise(res => setTimeout(res, 1000)) don't need, for playing with

    // if verified legit token, take user data and save
    setUser(data)

    } catch(err) {

    // if fail logout user
      console.log(err)
      logout()

    }
  }

  getUser()

}, [])

  const logout = () => {

    // clear the user state

    setUser(null)

    // clear the local storage
    localStorage.removeItem("token")

    // navigate the user to login
    navigate("/login")
  }
  
  const value = {

    user,
    setUser,
    logout

  }

    return (

      <UserContext.Provider value={value}>
        { children }
      </UserContext.Provider>

    )
}

//custom hook to easily access context value

export function useUser() {
  return useContext( UserContext )
}

export default UserProvider