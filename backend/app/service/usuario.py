from app.dao.usuario import UsuarioDAO
from app.dto.usuario import Usuario

from fastapi import HTTPException

class UsuarioService():
    def inserir_usuario(usuario:Usuario, senha_confirmar:str):
        if usuario.senha != senha_confirmar:
            raise ValueError("Senha e confirmação não conferem")
        
        NUM_DIGITOS_CPF = 11
        MAX_DIGITOS_SENHA = 7

        if len(usuario.cpf) == 0:
            raise HTTPException(status_code=400, detail="Campo cpf está vazio")

        if len(usuario.senha) == 0:
            raise HTTPException(status_code=400, detail="Campo senha está vazio")

        if len(usuario.cpf) != NUM_DIGITOS_CPF:
            raise HTTPException(status_code=400, detail=f"CPF não contém os {NUM_DIGITOS_CPF} dígitos")

        if len(usuario.senha) < MAX_DIGITOS_SENHA:
            raise HTTPException(status_code=400, detail=f"Senha contém menos de {MAX_DIGITOS_SENHA} dígitos")

        if len(usuario.nome) == 0:
            raise HTTPException(status_code=400, detail="Campo nome está vazio")

        if len(senha_confirmar) == 0:
            raise HTTPException(status_code=400, detail="Campo confirmar senha está vazio")
        
        dao = UsuarioDAO()
        dao.inserir(usuario)
