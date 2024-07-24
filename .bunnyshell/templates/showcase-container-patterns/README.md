# Container Patterns Template Documentation

## Overview
The `container-patterns-tpl` template demonstrates how to utilize init and sidecar containers in Bunnyshell. It provides practical examples to illustrate their setup and interaction within a containerized environment.

## Init Container
The init container is responsible for executing preliminary tasks before the main application starts. In this example, the init container is seeding the database.

### Init Container Definition
To define an init container within the main container's configuration, you use the `init_containers` field. Here's the configuration snippet:

```yaml
# Within the definition of the main container bind the init container
pod:
  init_containers:
    - from: init-db-seed
      name: init-db-seed
      shared_paths:
        - path: /tmp
          target:
            path: /tmp
            container: "@parent"
          initial_contents: "@target"
```

### Init Container Implementation
The init container uses the `busybox` image to create a file in the specified paths. Here is the definition of the init container component:

```yaml
- kind: InitContainer
    name: init-db-seed
    dockerCompose:
      image: postgres:latest
      environment:
        PGPASSWORD: "{{components.db.vars.POSTGRES_PASSWORD}}"
      command: ["/bin/sh", "-c", 'psql -h db -U postgres -f /tmp/seed.sql']
    files: 
      /tmp/seed.sql: |
        CREATE DATABASE bunny_books;
        -- Connect to the database
        \c bunny_books

        --
        -- PostgreSQL database dump
        --

        -- Dumped from database version 16.3 (Debian 16.3-1.pgdg120+1)
        -- Dumped by pg_dump version 16.3 (Debian 16.3-1.pgdg120+1)

        SET statement_timeout = 0;
        SET lock_timeout = 0;
        SET idle_in_transaction_session_timeout = 0;
        SET client_encoding = 'UTF8';
        SET standard_conforming_strings = on;
        SELECT pg_catalog.set_config('search_path', '', false);
        SET check_function_bodies = false;
        SET xmloption = content;
        SET client_min_messages = warning;
        SET row_security = off;

        SET default_tablespace = '';

        SET default_table_access_method = heap;

        --
        -- Name: books; Type: TABLE; Schema: public; Owner: postgres
        --

        CREATE TABLE public.books (
            id integer NOT NULL,
            title character varying(255),
            description character varying(255),
            available boolean,
            "createdAt" timestamp with time zone NOT NULL,
            "updatedAt" timestamp with time zone NOT NULL
        );


        ALTER TABLE public.books OWNER TO postgres;

        --
        -- Name: books_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
        --

        CREATE SEQUENCE public.books_id_seq
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE
            NO MAXVALUE
            CACHE 1;


        ALTER SEQUENCE public.books_id_seq OWNER TO postgres;

        --
        -- Name: books_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
        --

        ALTER SEQUENCE public.books_id_seq OWNED BY public.books.id;


        --
        -- Name: books id; Type: DEFAULT; Schema: public; Owner: postgres
        --

        ALTER TABLE ONLY public.books ALTER COLUMN id SET DEFAULT nextval('public.books_id_seq'::regclass);


        --
        -- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: postgres
        --

        COPY public.books (id, title, description, available, "createdAt", "updatedAt") FROM stdin;
        2	Book 1 	Description of book one	f	2024-07-24 08:15:50.226+00	2024-07-24 08:15:50.226+00
        3	Book 2 	Description of Book two	f	2024-07-24 08:16:01.531+00	2024-07-24 08:16:01.531+00
        4	Book 3 	Descriiption of book 3	f	2024-07-24 08:16:11.66+00	2024-07-24 08:16:11.66+00
        \.


        --
        -- Name: books_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
        --

        SELECT pg_catalog.setval('public.books_id_seq', 4, true);


        --
        -- Name: books books_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
        --

        ALTER TABLE ONLY public.books
            ADD CONSTRAINT books_pkey PRIMARY KEY (id);


        --
        -- PostgreSQL database dump complete
        --
```

## Sidecar Container
The sidecar container runs concurrently with the main application, providing auxiliary functions. In this template, the sidecar container sets up a VS Code web server and mounts the source code from the frontend to the workspace folder in the VS Code container.

### Sidecar Container Definition
Similar to the init container, the sidecar container is defined within the main container's configuration using the `sidecar_containers` field:

```yaml
- 
  kind: frontend
  ...
  pod: 
    sidecar_containers:
      -
        from: code-server
        name: sidecar-code-server
        shared_paths:
          -
            path: /cs_workspace
            target:
              path: /usr/src/app
              container: '@parent'
            initial_contents: '@target'
```

### Sidecar Container Implementation
The sidecar container utilizes the `code-server` image, populates environment variables via template variables, exposes the port for the VS Code web interface, and attaches a volume to persist the configuration. Here is the full definition of the sidecar container component:

```yaml
- 
  kind: SidecarContainer
  name: code-server
  dockerCompose:
    image: 'lscr.io/linuxserver/code-server:4.90.3'
    environment:
      DEFAULT_WORKSPACE: /cs_workspace
      HASHED_PASSWORD: '{{template.vars.HASHED_PASSWORD}}'
      PASSWORD: '{{template.vars.PASSWORD}}'
      PGID: '{{template.vars.PGID}}'
      PROXY_DOMAIN: '{{template.vars.PROXY_DOMAIN}}'
      PUID: '{{template.vars.PUID}}'
      SUDO_PASSWORD: '{{template.vars.SUDO_PASSWORD}}'
      SUDO_PASSWORD_HASH: '{{template.vars.SUDO_PASSWORD_HASH}}'
      TZ: '{{template.vars.TZ}}'
    ports:
      - '8443:8443'
  volumes:
    -
      name: code-server-data
      mount: /config
      subPath: ''
```

## Summary
This template showcases how to effectively use init and sidecar containers within a Bunnyshell environment:
- **Init Container**: Performs preliminary setup tasks, such as creating necessary files before the main application starts.
- **Sidecar Container**: Runs alongside the main application, providing additional services, like a web-based VS Code server.

By using these container patterns, you can modularize your application setup and improve the maintainability and scalability of your containerized solutions.