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

// creating roomClient methods to simplify both API routes
export const roomAPI = {
  
  //room api
  getRoom: async (id) => { 
      console.log("grabbing room data") // can console logs work here?
      const res = await roomClient.get(`/${id}`)
      console.log(res.data)
      return res.data
  },
  //item api
  getItems: async (id) => {
    console.log("grabbing item info") // can console logs work here?
    const res = await roomClient.get(`/${id}/items`)
    console.log(res.data)
    return res.data
  }
}

// get test route for vocab : test route /vocab/test
// vobab userid (Jimmy : 69cbe3abb03793bb77a07ea1)

export const vocabClient = axios.create({

  baseURL: `${BASE_URL}/api/vocab`, //temperate literal
  // baseURL: `${BASE_URL}/api/vocab/test`, //temperate literal
  headers: {
        Authorization: `Bearer ${token()}`
      }  
},
console.log("grabbing learned vocab"))




// javascript.info/object-methods
// https://www.geeksforgeeks.org/javascript/objects-in-javascript/
// https://medium.com/@sandeep.h.hullatti/javascript-normal-function-versus-arrow-function-in-simple-way-281e70ef9a21

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