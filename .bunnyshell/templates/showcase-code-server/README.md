# Integrating VS Code as a Sidecar Container using Bunnyshell
This documentation provides a step-by-step guide to integrate VS Code as a sidecar container for remote development using Bunnyshell. The provided `bunnyshell.yaml` template showcases how to achieve this setup effectively.

## Pre-Requisites

If your application uses a specified UID/GID please adjust the PUID and GUID template variables to reflect the id of the user being created to avoid permission issues. 

### Understanding the Need for PUID and GUID

When mounting volumes across containers, permission issues can arise between the main and sidecar containers. Specifying the user PUID and group PGID ensures consistency and avoids these issues. Use the command `id your_user` to find your user and group IDs.

## Template Variables Explained

### Crucial Lines in the `bunnyshell.yaml`

1. **Exposing the Port for the Sidecar Container:**

    ```yaml
    dockerCompose:
        ports:
            - '8080:8080' # main app port
            - '8443:8443' # code-server port 
    ```

2. **Defining the Sidecar Container:**

    ```yaml
    dockerCompose:
        pod:
            sidecar_containers:
                -
                    from: code-server
                    name: sidecar-code-server
                    shared_paths:
                        -
                            path: /config/workspace
                            target:
                                path: /path/to/src/in/main/container
                                container: '@parent'
                            initial_contents: '@target'
    ```

    - `shared_paths[0].path`: The default workspace opened in the IDE.
    - `shared_paths[0].target.path`: The path where the source code is in the main pod.

3. **Generating the Hostname for the Code Server Sidecar:**

    ```yaml
    hosts:
        ... # host for main application
        -
            hostname: '{{template.vars.CODE_SERVER_HOST}}'
            path: /
            servicePort: '8443'
    ```

4. **Code-Server Environment Variables:**

    Refer to [Code-Server Environment Variables Documentation](https://docs.linuxserver.io/images/docker-code-server/#environment-variables-from-files-docker-secrets).

    ```yaml
    dockerCompose:
        environment:
            DEFAULT_WORKSPACE: '/config/workspace'
            HASHED_PASSWORD: {{template.vars.HASHED_PASSWORD}}
            PASSWORD: {{template.vars.PASSWORD}}
            PGID: '{{template.vars.PGID}}'
            PROXY_DOMAIN: {{template.vars.PROXY_DOMAIN}}
            PUID: '{{template.vars.PUID}}'
            SUDO_PASSWORD: {{template.vars.SUDO_PASSWORD}}
            SUDO_PASSWORD_HASH: {{template.vars.SUDO_PASSWORD_HASH}}
            TZ: {{ template.vars.TZ }}
    ```

    - `PUID=1000`: UserID.
    - `PGID=1000`: GroupID.
    - `TZ=Etc/UTC`: Specify a timezone.
    - `PASSWORD=password`: Optional web GUI password.
    - `HASHED_PASSWORD=`: Optional hashed web GUI password.
    - `SUDO_PASSWORD=password`: Optional sudo password.
    - `SUDO_PASSWORD_HASH=`: Optionally set sudo password via hash.
    - `PROXY_DOMAIN=code-server.my.domain`: Optional proxy domain.
    - `DEFAULT_WORKSPACE=/config/workspace`: Default workspace directory.

## Example `bunnyshell.yaml` File

Below is the full `bunnyshell.yaml` configuration template:

```yaml
kind: Environment
name: code-server
type: primary
templateVariables:
    CODE_SERVER_HOST: code-server-{{env.base_domain}}
    HASHED_PASSWORD: ''
    PASSWORD: password
    PGID: '1000'
    PROXY_DOMAIN: ''
    PUID: '1000'
    SUDO_PASSWORD: password
    SUDO_PASSWORD_HASH: ''
    TZ: Etc/UTC
components:
    -
        kind: Application
        name: sample-app
        gitRepo: 'https://github.com/githubuser/example.git'
        gitBranch: master
        gitApplicationPath: /
        dockerCompose:
            ... 
            ports:
                - ... # App Port
                - '8443:8443'
        pod:
            sidecar_containers:
                -
                    from: code-server
                    name: sidecar-code-server
                    shared_paths:
                        -
                            path: /config/workspace
                            target:
                                path: /usr/share/nginx/html
                                container: '@parent'
                            initial_contents: '@target'
        hosts:
            - ... # main app host
            -
                hostname: '{{template.vars.CODE_SERVER_HOST}}'
                path: /
                servicePort: '8443'
    -
        kind: SidecarContainer
        name: code-server
        dockerCompose:
            image: 'lscr.io/linuxserver/code-server:latest'
            environment:
                DEFAULT_WORKSPACE: '/config/workspace'
                HASHED_PASSWORD: {{template.vars.HASHED_PASSWORD}}
                PASSWORD: {{template.vars.PASSWORD}}
                PGID: '{{template.vars.PGID}}'
                PROXY_DOMAIN: {{template.vars.PROXY_DOMAIN}}
                PUID: '{{template.vars.PUID}}'
                SUDO_PASSWORD: '{{template.vars.SUDO_PASSWORD}}'
                SUDO_PASSWORD_HASH: '{{template.vars.SUDO_PASSWORD_HASH}}'
                TZ: '{{template.vars.TZ}}'
            ports:
                - '8443:8443'
```

This template facilitates the integration of VS Code as a sidecar container for remote development, ensuring a seamless and efficient development workflow. Adjust the provided `bunnyshell.yaml` and Dockerfile snippets to suit your application's needs. For further customization, refer to the [Code-Server Environment Variables Documentation](https://docs.linuxserver.io/images/docker-code-server/#environment-variables-from-files-docker-secrets).