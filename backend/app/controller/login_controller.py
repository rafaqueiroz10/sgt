from fastapi import HTTPException
from pydantic import BaseModel

from app.service.usuario import UsuarioService

class LoginRequest(BaseModel):
    cpf: str
    senha: str

class LoginController:
  @staticmethod
  def login(dados:LoginRequest):
      try:
        # strip: remove espaços vazios digitados pelo usuário
        cpf = dados.cpf.strip()
        senha = dados.senha.strip()

        service = UsuarioService()
        service.buscar_usuario(cpf, senha)
        
        return {"mensagem": "Login realizado"}
        
      except HTTPException:
        raise
      
      except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))