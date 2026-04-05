import { useState } from "react";
import { userClient } from "../clients/api"
import { useUser } from "../context/UserContext"
import { useNavigate } from "react-router-dom";

function Login(){
  
  const { setUser } = useUser()

  const navigate = useNavigate()
  // const value = useUser()
  // console.log (value)

  const [formData, setFormData] = useState({
    userName: '',
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

     try {

      const { data } = await userClient.post('/login', formData) // response.data also works: where the Response has other properties (like the HTTP code, error information etc)
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
    <div className="loginForm" style={{
                                        display:"flex",
                                        flexDirection:"column",
                                        alignItems:"center",
                                        padding:"10px" }}>
      <h1>Login・ログイン</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">User Name・ユーザー名</label>
        <input value={formData.userName} onChange={handleChange} type="text" id="userName" name="userName" placeholder="Your cool username here!" required /><br/>

        <label htmlFor="email">Email・メール</label>
        <input value={formData.email} onChange={handleChange} type="email" id="email" name="email" placeholder="The email you used to signup!" required />
        
        <br/><label htmlFor="password">Password・パスワード</label>
        <input value={formData.password} onChange={handleChange} type="password" id="password" name="password" placeholder="Your secret password!" required />
      
        <br/><button type="submit">Login・ログインする</button>

      </form>
    </div>
  )
}

export default Login