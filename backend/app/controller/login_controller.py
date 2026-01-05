from fastapi import HTTPException
from pydantic import BaseModel

class LoginRequest(BaseModel):
    cpf: str
    senha: str

class LoginController:
  @staticmethod
  def login(dados:LoginRequest):
      # strip: remove espaços vazios digitados pelo usuário
      cpf = dados.cpf.strip()
      senha = dados.senha.strip()

      NUM_DIGITOS_CPF = 11
      MAX_DIGITOS_SENHA = 7

      CPF = "11111111111"
      SENHA = "1111111"

      if cpf == "" and senha == "":
        raise HTTPException(status_code=400, detail="Campos cpf e senha estão vazios")
      
      if len(cpf) == 0:
        raise HTTPException(status_code=400, detail="Campo cpf está vazio")
      
      if len(senha) == 0:
        raise HTTPException(status_code=400, detail="Campo senha está vazio")

      if len(cpf) != NUM_DIGITOS_CPF:
        raise HTTPException(status_code=400, detail=f"CPF não contém os {NUM_DIGITOS_CPF} dígitos")
      
      if len(senha) < MAX_DIGITOS_SENHA:
        raise HTTPException(status_code=400, detail=f"Senha contém menos de {MAX_DIGITOS_SENHA} dígitos")
      
      if cpf == CPF and senha == SENHA:
        return {"mensagem": "Login realizado"}
      
      raise HTTPException(status_code=401, detail="CPF ou senha inválidos")