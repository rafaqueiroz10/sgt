import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Login from './Login/Login'
import CadastrarUsuario from './CadastrarUsuario/CadastrarUsuario'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<CadastrarUsuario />} />
    </Routes>
  )
}

export default App