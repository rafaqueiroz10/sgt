from fastapi import FastAPI
from app.controller.cadastrar_usuario_controller import CadastrarUsuarioController, CadastroRequest
from app.controller.login_controller import LoginController, LoginRequest
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # ou ["*"] para teste
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/login")
def login(dados:LoginRequest):
  return LoginController.login(dados)

@app.post("/cadastro")
def cadastrar_usuario(dados:CadastroRequest):
  return CadastrarUsuarioController.cadastrar(dados)