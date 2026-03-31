// import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom' //Navigate

//import pages
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  

  return (
    <>
     <h1>Kotoba Finder</h1>
      <Routes>
          {/* <Route path="/" element={<GamePage />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App

//http://localhost:5173/