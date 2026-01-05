from fastapi import FastAPI
from app.controller.cadastrar_usuario_controller import CadastrarUsuarioController, CadastroRequest
from app.controller.login_controller import LoginController, LoginRequest

app = FastAPI()

@app.post("/login")
def login(dados:LoginRequest):
  return LoginController.login(dados)

@app.post("/cadastro")
def cadastrar_usuario(dados:CadastroRequest):
  return CadastrarUsuarioController.cadastrar(dados)