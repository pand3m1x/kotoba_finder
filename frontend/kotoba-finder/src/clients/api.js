import axios from 'axios'


const BASE_URL = import.meta.env.VITE_BASE_URL
console.log(BASE_URL)

export const token = () => localStorage.getItem("token")

export const userClient = axios.create({
  
  baseURL:  BASE_URL + '/api/users', // Or +
   headers: {
        Authorization: `Bearer ${token()}`
      }  
})

export const roomClient = axios.create({

  baseURL: `${BASE_URL}/api/rooms` //temperate literal
  
})

// export const itemClient = axios.create({

//   baseURL: `${BASE_URL}/api/rooms` //temperate literal
  
// })

// use the latest version of the token in local storage
// postClient.interceptors.request.use((req) => {
  
//   if (token()) {
//     req.headers.Authorization = `Bearer ${token()}`
//   }
//   return req
// })