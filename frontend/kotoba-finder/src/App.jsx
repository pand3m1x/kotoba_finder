// import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom' //Navigate

//import components
import Navbar from './components/Navbar'
// import Spinner from './components/Spinner';

//import pages
import Login from './pages/Login'
import Register from './pages/Register'
import GamePage from './pages/GamePage'
import Vocab from './pages/Vocab'

// import contexts
import { useUser } from './context/UserContext'

function App() {
  
  const { user } = useUser()
  console.log(user)

  return (
    <>
      <Navbar />
      {user ? 
        <Routes>
          <Route path="/vocab" element={<Vocab />} />
          <Route path="/" element={<Navigate to="/room/69cae83de20491b659e2d66f" />} />
          <Route path="/room/:id" element={<GamePage />} />
        </Routes> 
        : 
      <Routes>
          <Route path="/" element={<Navigate to="/room/69cae83de20491b659e2d66f" />} />
          <Route path="/room/:id" element={<GamePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
      }
    </>
  )
}

export default App
