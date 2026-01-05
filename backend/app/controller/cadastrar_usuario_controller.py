from fastapi import HTTPException
from pydantic import BaseModel

from app.dto.usuario import Usuario
from app.service.usuario import UsuarioService

class CadastroRequest(BaseModel):
  nome: str
  cpf: str
  senha: str
  confirmar_senha:str

class CadastrarUsuarioController:
    @staticmethod
    def cadastrar(dados: CadastroRequest):
      try:
        cpf = dados.cpf.strip()
        senha = dados.senha.strip()
        nome = dados.nome.strip()
        senha_confirmar = dados.confirmar_senha.strip()

        usuario = Usuario(nome, cpf, senha)
        service = UsuarioService()
        service.inserir_usuario(usuario, senha_confirmar)

        return {"mensagem":"Cadastro realizado"}
      
      except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))