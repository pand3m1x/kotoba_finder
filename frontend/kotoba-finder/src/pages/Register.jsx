import { useState } from "react";
import { userClient } from "../clients/api"
import { useUser } from "../context/UserContext"
import { useNavigate } from "react-router-dom";

function Register() {

  const { setUser } = useUser()

  const navigate = useNavigate()
  // const value = useUser()
  // console.log (value)

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleChange = (e) =>{
      setFormData({
        ...formData,
        [e.target.name]: e.target.value // [] makes it dynamic instead of listing each input individually
      })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()
    console.log(formData)

    // send the form data to our backend
    try {

      const { data } = await userClient.post('/register', formData) // response.data also works: where the Response has other properties (like the HTTP code, error information etc)
      console.log(data)

      // take the token and store it locally
  
        localStorage.setItem("token", data.token) //or response.data.token
        
      // save some user data in our state
  
      setUser(data.user)
        
      // take the user to a different page

      navigate('/')

    } catch (err) {

        console.log(err)
        alert(err.message)

    }
  }

  return(
    <div className="registerForm" style={{ border:"2px solid green",
                                        display:"flex",
                                        flexDirection:"column",
                                        alignItems:"center",
                                        padding:"10px" }}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>

        <label htmlFor="username">Username</label>
        <input value={formData.username} onChange={handleChange} type="text" id="username" name="username" required/><br/>
        {/* <input type="text" id="userName" name="userName" required /><br/> */}

        <label htmlFor="email">Email</label>
        <input value={formData.email} onChange={handleChange} type="email" id="email" name="email" required />
        {/* <input type="email" id="email" name="email" required/> */}

        <br/><label htmlFor="password">Password</label>
        <input value={formData.password} onChange={handleChange} type="password" id="password" name="password" required />
        {/* <input type="password" id="password" name="password" required/> */}
        <br/><button type="submit">Register</button>

      </form>
    </div>
  )

}

export default Register;