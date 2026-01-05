class Usuario:
    def __init__(self, nome: str, cpf: str, senha: str):
        self.__nome = nome
        self.__cpf = cpf
        self.__senha = senha

    @property
    def nome(self) -> str:
        return self.__nome

    @nome.setter
    def nome(self, valor: str):
        if not valor:
            raise ValueError("Nome não pode ser vazio")
        self.__nome = valor

    @property
    def cpf(self) -> str:
        return self.__cpf

    @cpf.setter
    def cpf(self, valor: str):
        if len(valor) != 11:
            raise ValueError("CPF deve ter 11 dígitos")
        self.__cpf = valor

    @property
    def senha(self) -> str:
        return self.__senha

    @senha.setter
    def senha(self, valor: str):
        if len(valor) < 7:
            raise ValueError("Senha deve ter no mínimo 7 caracteres")
        self.__senha = valor