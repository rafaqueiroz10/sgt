import { useState } from 'react'

function VerTarefas() {
  function mostrarTarefas() {
    fetch('http://localhost:8001/obter-tarefas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
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

  useEffect(() => {
    mostrarTarefas()
  }, [])

  const [tarefas, setTarefas] = useState('')

  return (
    <>
      <div className="tarefas">
        <p>Olá</p>
      </div>
    </>
  )
}

export default VerTarefas