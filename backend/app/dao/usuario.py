from app.connection import get_connection

from app.dto.usuario import Usuario

class UsuarioDAO:
    def inserir(self, usuario:Usuario) -> None:
        sql = """
            INSERT INTO usuarios (nome, cpf, senha)
            VALUES (%s, %s, %s)
        """

        with get_connection() as conn:
            with conn.cursor() as cur:
                cur.execute(sql, (usuario.nome, usuario.cpf, usuario.senha))
                conn.commit()

    def buscar_usuario(self, cpf:str, senha:str):
        sql = f"""
            SELECT nome, cpf, senha from usuarios where cpf=%s and senha=%s
        """

        with get_connection() as conn:
            with conn.cursor() as cur:
                cur.execute(sql, (cpf, senha))
                row = cur.fetchone()
                
                if row:
                    return Usuario(nome=row[0], cpf=row[1], senha=row[2])

        return None