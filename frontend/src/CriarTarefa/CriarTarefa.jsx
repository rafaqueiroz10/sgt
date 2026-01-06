import { useState } from 'react'
import './CriarTarefa.css'

function CriarTarefa() {
  function adicionarTarefa() {
    fetch('http://localhost:8001/adicionar-tarefa', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: nome, 
        data_conclusao: dataConclusao
      }),
    })
    .then(async response => {
      const data = await response.json()

      if (!response.ok) {
        setTarefas(data.detail || 'Erro ao realizar login')
        return
      }

      setTarefas(data.mensagem)
    })
    .catch(() => {
      setMensagem('Erro ao conectar ao servidor')
    })
  }

  const [nome, setNome] = useState('')
  const [dataConclusao, setDataConclusao] = useState('')

  return (
    <>
        <div className='criar-tarefa'>
            <div className='inputs'>
              <input type="text" placeholder="Nome" name="" id="" value={nome} onChange={(e) => setNome(e.target.value)} />
              <input type="text" placeholder="Data estimada para conclusao" value={dataConclusao} onChange={(e) => setDataConclusao(e.target.value)} />
            </div>
            <button onClick={adicionarTarefa}>Adicionar tarefa</button>
        </div>
    </>
  )
}

export default CriarTarefa