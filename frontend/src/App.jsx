import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Login from './Login/Login'
import CadastrarUsuario from './CadastrarUsuario/CadastrarUsuario'
import VerTarefas from './VerTarefas/VerTarefas'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<CadastrarUsuario />} />
      <Route path="/ver-tarefas" element={<VerTarefas />} />
    </Routes>
  )
}

export default App