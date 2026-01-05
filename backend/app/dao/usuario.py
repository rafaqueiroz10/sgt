from app.connection import get_connection

from app.dto.usuario import Usuario

class UsuarioDAO:
    def inserir(usuario:Usuario) -> None:
        sql = """
            INSERT INTO usuario (nome, cpf, senha)
            VALUES (%s, %s, %s)
        """

        with get_connection() as conn:
            with conn.cursor() as cur:
                cur.execute(sql, (usuario.nome, usuario.cpf, usuario.senha))
                conn.commit()
