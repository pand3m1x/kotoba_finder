// import { useState } from "react";
// // import { userClient } from "../clients/api"
// import { useUser } from "../context/UserContext"
// import { useNavigate } from "react-router-dom";

function Login(){
  
  // const { setUser } = useUser()

  // const navigate = useNavigate()
  // // const value = useUser()
  // // console.log (value)

  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: ''
  // })

  //  const handleChange = (e) =>{
  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value // [] makes it dynamic instead of listing each input individually
  //     })
  // }

  // const handleSubmit = async (e) => {

  //   e.preventDefault()
  //   console.log(formData)

  // }

  return(
    <div className="loginForm" style={{ border:"2px solid green",
                                        display:"flex",
                                        flexDirection:"column",
                                        alignItems:"center",
                                        padding:"10px" }}>
      <h1>Login</h1>
      <form> {/* onSubmit={handleSubmit} */}
        <label htmlFor="userName">User Name</label>
        <input type="text" id="userName" name="userName" required /><br/>

        <label htmlFor="email">Email</label>
        {/* <input value={formData.email} onChange={handleChange} type="email" id="email" name="email" required /> */}
        <input type="email" id="email" name="email" required/>
        <br/><label htmlFor="password">Password</label>
        {/* <input value={formData.password} onChange={handleChange} type="password" id="password" name="password" required /> */}
        <input type="password" id="password" name="password" required/>
        <br/><button type="submit">Login</button>

      </form>
    </div>
  )
}

export default Login