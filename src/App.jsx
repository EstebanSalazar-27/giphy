import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'

// Components 
import { Navbar } from './components/Navbar'


// Pages
import { Home } from './pages/Home'
import { Trending } from './pages/Trending'



function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
      </Routes>
    </div >
  )
}

export default App
