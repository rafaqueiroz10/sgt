import { useState } from 'react'
import './CadastrarUsuario.css'
import { Link } from 'react-router-dom'
import '../Login/Login.css'

function CadastrarUsuario() {
  function cadastrar() {
    fetch('http://localhost:8001/cadastro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: nome, 
        cpf: cpf, 
        senha: senha, 
        confirmar_senha: senhaConfirmar
      })
    })
    .then(async response => {
      const data = await response.json()

      if (!response.ok) {
        setMensagem(data.detail || 'Erro ao realizar login')
        return
      }

      setMensagem(data.mensagem)
    })
    .catch(() => {
      setMensagem('Erro ao conectar ao servidor')
    })
  }

  const [cpf, setCpf] = useState('')
  const [senha, setSenha] = useState('')
  const [senhaConfirmar, setSenhaConfirmar] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [nome, setNome] = useState('')

  return (
    <>
      <div className="cadastro">
        <div className="inputs-cadastro">
          <input type="text" minLength={11} maxLength={11} name="" id="" placeholder='nome' value={nome} onChange={(e) => setNome(e.target.value)} />
          <input type="text" minLength={11} maxLength={11} name="" id="" placeholder='cpf' value={cpf} onChange={(e) => setCpf(e.target.value)} />
          <input type="text" minLength={7} name="" id="" placeholder='senha' value={senha} onChange={(e) => setSenha(e.target.value)}/>
          <input type="text" minLength={7} name="" id="" placeholder='Confirmar senha' value={senhaConfirmar} onChange={(e) => setSenhaConfirmar(e.target.value)}/>
          <button onClick={cadastrar} className="cadastrar">Cadastrar</button>
        </div>
        <div className="msgs">
          <p className="mensagem-status-conexao">{mensagem}</p>
        </div>
      </div>
    </>
  )
}

export default CadastrarUsuario