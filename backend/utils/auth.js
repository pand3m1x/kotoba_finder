import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET

export async function authMiddleware( req, res, next ) {
// console.log("HEADERS:", req.headers); it works! :D
  try{

  let token = req.headers.authorization

  // check if there is a token
  if (!token) {
    return res.status(403).json({ message: 'no token provided' })
  }

  // remove the 'Bearer' from the token
  token = token.split(' ').pop().trim()

  // verify the token
  const { data } = jwt.verify(token, secret)

  // pass the payload
  req.user = data

  // move onto the route
  next()
  
} catch(err) {

  console.log(err.message)
  res.status(400).json({ message: err.message })

}};