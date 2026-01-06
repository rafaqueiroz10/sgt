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
        self.__nome = valor

    @property
    def cpf(self) -> str:
        return self.__cpf

    @cpf.setter
    def cpf(self, valor: str):
        self.__cpf = valor

    @property
    def senha(self) -> str:
        return self.__senha

    @senha.setter
    def senha(self, valor: str):
        self.__senha = valor