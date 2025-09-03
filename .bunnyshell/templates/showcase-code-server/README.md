# VS Code Sidecar Integration with Bunnyshell

This template demonstrates how to integrate VS Code as a sidecar container for remote development using Bunnyshell. It provides a complete development environment with a full-stack application (frontend, backend, database) and VS Code accessible through a web browser.
It provides:
- **Frontend Application**: React-based web application
- **Backend API**: Node.js backend service
- **Database**: PostgreSQL database
- **VS Code**: Web-based IDE accessible from anywhere
- **Shared Workspace**: Code accessible from both the main app and VS Code

# 🚀 TL;DR

1. **Deploy the template** using Bunnyshell
2. **Access your application** at `frontend-{your-domain}` and `backend-{your-domain}`
3. **Open VS Code** at `code-server-{your-domain}` with the password: `password`

## 🚀 Usage Workflow

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   1. Deploy     │───►│   2. Access     │───►│   3. Login to   │
│   Environment   │    │   VS Code       │    │   VS Code       │
│   via Bunnyshell│    │   code-server-  │    │   with Password │
│                 │    │   {domain}      │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                       │
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   6. Changes    │◄───│   5. Start      │◄───│   4. Open       │
│   Auto-Sync     │    │   Coding in     │    │   Shared        │
│   Between       │    │   Workspace     │    │   Workspace     │
│   Containers    │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🏗️ Architecture Overview

```
                    ┌─────────────────────────────────────────────────────────────┐
                    │                    Bunnyshell Environment                   │
                    └─────────────────────────────────────────────────────────────┘
                                     │
                    ┌────────────────┼────────────────┼────────────────┐
                    │                │                │                │
         ┌─────────────────┐ ┌──────────────────┐ ┌─────────────────┐ ┌─────────────────┐
         │   Frontend      │ │   VS Code        │ │   Backend       │ │   Database      │
         │   Container     │ │   Sidecar        │ │   Container     │ │   Container     │
         │                 │ │                  │ │                 │ │                 │
         │ • React App     │ │ • Web IDE        │ │ • Node.js API   │ │ • PostgreSQL    │
         │ • Port: 8080    │ │ • Port: 8443     │ │ • Port: 3080    │ │ • Port: 5432    │
         │ • Host: frontend│ │ • Host: code-    │ │ • Host: backend │ │ • Internal      │
         │   -{domain}     │ │   server-{domain}│ │   -{domain}     │ │   access only   │
         └─────────────────┘ └──────────────────┘ └─────────────────┘ └─────────────────┘
                │                   │
                │                   │
                │                   │              
                │   ┌─────────────────────────────────┐
                │   │        Shared Workspace         │
                └───│         /cs_workspace           │
                    │         (Auto-sync)             │
                    └─────────────────────────────────┘
```
## 📁 File Structure

```
cs_workspace/                    # Shared workspace (accessible from both containers)
├── frontend/                    # React application source
│   ├── src/                    # Source code directory
│   ├── public/                 # Public assets
│   ├── package.json            # Dependencies and scripts
│   └── Dockerfile              # Frontend container build
├── backend/                     # Node.js API source
│   ├── src/                    # API source code
│   ├── routes/                 # API endpoints
│   ├── models/                 # Database models
│   ├── package.json            # Backend dependencies
│   └── Dockerfile              # Backend container build
└── README.md                   # Project documentation
```

# ⚙️ Configuration

## Template Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `PASSWORD` | VS Code web interface password | `password` | Yes |
| `SUDO_PASSWORD` | Sudo password for container | `password` | Yes |

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `HASHED_PASSWORD` | Hashed version of password | `` |
| `PUID` | User ID for container permissions | `0` |
| `PGID` | Group ID for container permissions | `0` |
| `SUDO_PASSWORD_HASH` | Hashed sudo password | `` |
| `PROXY_DOMAIN` | Custom proxy domain | `` |
| `TZ` | Timezone setting | `Etc/UTC` |

## Port Configuration

- **Frontend**: `8080` (main application)
- **Backend**: `3080` (API service)
- **Database**: `5432` (PostgreSQL)
- **VS Code**: `8443` (web IDE)

## 🔧 Key Configuration Sections

### 1. Sidecar Container Definition

```yaml
pod:
  sidecar_containers:
    - from: code-server
      name: sidecar-code-server
      shared_paths:
        - path: /cs_workspace
          target:
            path: /usr/src/app
            container: '@parent'
          initial_contents: '@target'
```

**What this does:**
- Creates a VS Code sidecar container
- Shares the `/cs_workspace` directory between containers
- Maps to `/usr/src/app` in the main application container
- Initializes with the target container's contents

### 2. Port Exposure

```yaml
ports:
  - '8080:8080'  # Frontend app
  - '8443:8443'  # VS Code sidecar
```

**Important:** Both ports must be exposed on the main application to make the sidecar accessible.

### 3. VS Code Container Configuration

```yaml
kind: SidecarContainer
name: code-server
dockerCompose:
  image: 'lscr.io/linuxserver/code-server:latest'
  environment:
    DEFAULT_WORKSPACE: /cs_workspace
    PASSWORD: '{{template.vars.PASSWORD}}'
    # ... other environment variables
  ports:
    - '8443:8443'
```

# 🔐 Security Considerations

## Default Credentials
- **VS Code Password**: `password` (change this in production!)
- **Database Password**: `need-to-replace` (must be changed!)

## Permission Management
When using custom UID/GID:
1. Set appropriate `PUID` and `PGID` values
2. Ensure consistency across containers
3. Use `id your_user` command to find your user/group IDs

# 🔍 Troubleshooting

## Common Issues

**Permission Errors:**
- Ensure `PUID` and `PGID` match your user/group IDs
- Check that shared paths have correct permissions

# 📚 Additional Resources

- [Code-Server Environment Variables](https://docs.linuxserver.io/images/docker-code-server/#environment-variables-from-files-docker-secrets)
- [Bunnyshell Documentation](https://docs.bunnyshell.com/)

# 🤝 Contributing

This template is part of the Bunnyshell template collection. Feel free to:
- Report issues
- Suggest improvements
- Submit pull requests

# 📄 License

This template is provided as-is for educational and development purposes.