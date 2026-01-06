from datetime import date
from fastapi import HTTPException

class TarefaRequest:
    nome: str
    data_conclusao: str

class AdicionarTarefaController:
    @staticmethod
    def adicionar(dados:TarefaRequest):
        try:
            data_conclusao = dados.data_conclusao.strip()
            nome = dados.nome.strip()
            data_tarefa = date.today()
        
        except HTTPException:
            raise
      
        except ValueError as e:
            raise HTTPException(status_code=400, detail=str(e))