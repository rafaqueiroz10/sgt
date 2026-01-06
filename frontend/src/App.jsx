import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Login from './Login/Login'
import CadastrarUsuario from './CadastrarUsuario/CadastrarUsuario'
import VerTarefas from './VerTarefas/VerTarefas'
import CriarTarefa from './CriarTarefa/CriarTarefa'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<CadastrarUsuario />} />
      <Route path="/ver-tarefas" element={<VerTarefas />} />
      <Route path="/criar-tarefa" element={<CriarTarefa />} />
    </Routes>
  )
}

export default App