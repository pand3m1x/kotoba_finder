// import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom' //Navigate

//import components
import Navbar from './components/Navbar'

//import pages
import Login from './pages/Login'
import Register from './pages/Register'
import GamePage from './pages/GamePage'
import Vocab from './pages/Vocab'

function App() {
  

  return (
    <>
      <Navbar />
     {/* <h1>Kotoba Finder</h1> */}
      <Routes>
          <Route path="/" element={<Navigate to="/room/69cae83de20491b659e2d66f" />} />
          <Route path="/room/:id" element={<GamePage />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/vocab" element={<Vocab />} />
      </Routes>
    </>
  )
}

export default App

//http://localhost:5173/