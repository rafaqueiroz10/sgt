-- Database generated with pgModeler (PostgreSQL Database Modeler).
-- pgModeler version: 1.1.0-beta1
-- PostgreSQL version: 16.0
-- Project Site: pgmodeler.io
-- Model Author: ---

-- Database creation must be performed outside a multi lined SQL file. 
-- These commands were put in this file only as a convenience.

-- object: public.tarefas | type: TABLE --
-- DROP TABLE IF EXISTS public.tarefas CASCADE;
CREATE TABLE public.tarefas (
	id serial NOT NULL,
	nome varchar(50) NOT NULL,
	data date NOT NULL,
	data_criacao date NOT NULL,
	cpf_usuario varchar(11) NOT NULL,
	CONSTRAINT tarefas_pk PRIMARY KEY (id)
);
-- ddl-end --
ALTER TABLE public.tarefas OWNER TO postgres;
-- ddl-end --

-- object: public.tarefas_concluidas | type: TABLE --
-- DROP TABLE IF EXISTS public.tarefas_concluidas CASCADE;
CREATE TABLE public.tarefas_concluidas (
	id serial NOT NULL,
	data_conclusao date NOT NULL,
	CONSTRAINT tarefas_concluidas_pk PRIMARY KEY (id)
);
-- ddl-end --
ALTER TABLE public.tarefas_concluidas OWNER TO postgres;
-- ddl-end --

-- object: public.usuarios | type: TABLE --
-- DROP TABLE IF EXISTS public.usuarios CASCADE;
CREATE TABLE public.usuarios (
	cpf varchar(11) NOT NULL,
	senha varchar(7) NOT NULL,
	nome varchar(50) NOT NULL,
	CONSTRAINT usuarios_pk PRIMARY KEY (cpf)
);
-- ddl-end --
ALTER TABLE public.usuarios OWNER TO postgres;
-- ddl-end --

-- object: usuario_fk | type: CONSTRAINT --
-- ALTER TABLE public.tarefas DROP CONSTRAINT IF EXISTS usuario_fk CASCADE;
ALTER TABLE public.tarefas ADD CONSTRAINT usuario_fk FOREIGN KEY (id)
REFERENCES public.usuarios (cpf) MATCH SIMPLE
ON DELETE RESTRICT ON UPDATE RESTRICT;
-- ddl-end --

-- object: tarefa_fk | type: CONSTRAINT --
-- ALTER TABLE public.tarefas_concluidas DROP CONSTRAINT IF EXISTS tarefa_fk CASCADE;
ALTER TABLE public.tarefas_concluidas ADD CONSTRAINT tarefa_fk FOREIGN KEY (id)
REFERENCES public.tarefas (id) MATCH SIMPLE
ON DELETE RESTRICT ON UPDATE RESTRICT;
-- ddl-end --