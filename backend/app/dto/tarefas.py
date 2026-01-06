class Tarefa:
    def __init__(self, nome: str, data:str):
        self.__nome = nome
        self.__data = data

    @property
    def nome(self) -> str:
        return self.__nome

    @nome.setter
    def nome(self, valor: str):
        self.__nome = valor

    @property
    def data(self) -> str:
        return self.__data

    @data.setter
    def data(self, data: str):
        self.__data = data