import { useState } from 'react'
import CriarTarefa from '../CriarTarefa/CriarTarefa'
import './VerTarefas.css'
import {useNavigate} from 'react-router-dom'

function VerTarefas() {
    function obterTarefas() {
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

    /*useEffect(() => {
        obterTarefas()
    }, [])*/

    const [tarefas, setTarefas] = useState('')
    const navigate = useNavigate()

    return (
        <>
        <div className='ver-tarefas'>
            <div className='botoes'>
                <button onClick={() => navigate('/criar-tarefa')}>+</button>
            </div>
            <div className="tarefas">
                <div className='tarefa'>
                    <div className='informacoes'>
                        <span className='nome'>Nome da tarefa: </span>
                        <span className='data-criacao-tarefa'>Tarefa criada em: 06/01/2026</span>
                        <span className='data-conclusao'>Conclusão em: 10/01/2026</span>
                    </div>
                    <div className='concluir'>
                        <button className='button-concluir'>Concluir</button>
                        <button className='button-excluir'>Excluir</button>
                    </div>
                </div>

                <div className='tarefa'>
                    <div className='informacoes'>
                        <span className='nome'>Nome da tarefa: </span>
                        <span className='data-criacao-tarefa'>Tarefa criada em: 06/01/2026</span>
                        <span className='data-conclusao'>Conclusão em: 10/01/2026</span>
                    </div>
                    <div className='concluir'>
                        <button className='button-concluir'>Concluir</button>
                        <button className='button-excluir'>Excluir</button>
                    </div>
                </div>

                <div className='tarefa'>
                    <div className='informacoes'>
                        <span className='nome'>Nome da tarefa: </span>
                        <span className='data-criacao-tarefa'>Tarefa criada em: 06/01/2026</span>
                        <span className='data-conclusao'>Conclusão em: 10/01/2026</span>
                    </div>
                    <div className='concluir'>
                        <button className='button-concluir'>Concluir</button>
                        <button className='button-excluir'>Excluir</button>
                    </div>
                </div>

                <div className='tarefa'>
                    <div className='informacoes'>
                        <span className='nome'>Nome da tarefa: </span>
                        <span className='data-criacao-tarefa'>Tarefa criada em: 06/01/2026</span>
                        <span className='data-conclusao'>Conclusão em: 10/01/2026</span>
                    </div>
                    <div className='concluir'>
                        <button className='button-concluir'>Concluir</button>
                        <button className='button-excluir'>Excluir</button>
                    </div>
                </div>

                <div className='tarefa'>
                    <div className='informacoes'>
                        <span className='nome'>Nome da tarefa: </span>
                        <span className='data-criacao-tarefa'>Tarefa criada em: 06/01/2026</span>
                        <span className='data-conclusao'>Conclusão em: 10/01/2026</span>
                    </div>
                    <div className='concluir'>
                        <button className='button-concluir'>Concluir</button>
                        <button className='button-excluir'>Excluir</button>
                    </div>
                </div>

                <div className='tarefa'>
                    <div className='informacoes'>
                        <span className='nome'>Nome da tarefa: </span>
                        <span className='data-criacao-tarefa'>Tarefa criada em: 06/01/2026</span>
                        <span className='data-conclusao'>Conclusão em: 10/01/2026</span>
                    </div>
                    <div className='concluir'>
                        <button className='button-concluir'>Concluir</button>
                        <button className='button-excluir'>Excluir</button>
                    </div>
                </div>

                <div className='tarefa'>
                    <div className='informacoes'>
                        <span className='nome'>Nome da tarefa: </span>
                        <span className='data-criacao-tarefa'>Tarefa criada em: 06/01/2026</span>
                        <span className='data-conclusao'>Conclusão em: 10/01/2026</span>
                    </div>
                    <div className='concluir'>
                        <button className='button-concluir'>Concluir</button>
                        <button className='button-excluir'>Excluir</button>
                    </div>
                </div>

                <div className='tarefa'>
                    <div className='informacoes'>
                        <span className='nome'>Nome da tarefa: </span>
                        <span className='data-criacao-tarefa'>Tarefa criada em: 06/01/2026</span>
                        <span className='data-conclusao'>Conclusão em: 10/01/2026</span>
                    </div>
                    <div className='concluir'>
                        <button className='button-concluir'>Concluir</button>
                        <button className='button-excluir'>Excluir</button>
                    </div>
                </div>

                <div className='tarefa'>
                    <div className='informacoes'>
                        <span className='nome'>Nome da tarefa: </span>
                        <span className='data-criacao-tarefa'>Tarefa criada em: 06/01/2026</span>
                        <span className='data-conclusao'>Conclusão em: 10/01/2026</span>
                    </div>
                    <div className='concluir'>
                        <button className='button-concluir'>Concluir</button>
                        <button className='button-excluir'>Excluir</button>
                    </div>
                </div>

                <div className='tarefa'>
                    <div className='informacoes'>
                        <span className='nome'>Nome da tarefa: </span>
                        <span className='data-criacao-tarefa'>Tarefa criada em: 06/01/2026</span>
                        <span className='data-conclusao'>Conclusão em: 10/01/2026</span>
                    </div>
                    <div className='concluir'>
                        <button className='button-concluir'>Concluir</button>
                        <button className='button-excluir'>Excluir</button>
                    </div>
                </div>

                <div className='tarefa'>
                    <div className='informacoes'>
                        <span className='nome'>Nome da tarefa: </span>
                        <span className='data-criacao-tarefa'>Tarefa criada em: 06/01/2026</span>
                        <span className='data-conclusao'>Conclusão em: 10/01/2026</span>
                    </div>
                    <div className='concluir'>
                        <button className='button-concluir'>Concluir</button>
                        <button className='button-excluir'>Excluir</button>
                    </div>
                </div>

                <div className='tarefa'>
                    <div className='informacoes'>
                        <span className='nome'>Nome da tarefa: </span>
                        <span className='data-criacao-tarefa'>Tarefa criada em: 06/01/2026</span>
                        <span className='data-conclusao'>Conclusão em: 10/01/2026</span>
                    </div>
                    <div className='concluir'>
                        <button className='button-concluir'>Concluir</button>
                        <button className='button-excluir'>Excluir</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default VerTarefas