# Deploying JupyterHub using Bunnyshell

## Overview

Deploying JupyterHub on Bunnyshell utilizes the `zero-to-jupyterhub-k8s` Helm chart. This Helm chart provides a simple and customizable way to deploy JupyterHub on a Kubernetes cluster.

## Configuration

- **Helm Chart**: [zero-to-jupyterhub-k8s](https://github.com/jupyterhub/zero-to-jupyterhub-k8s)
- **Configuration Options**: Refer to the official [Zero to JupyterHub documentation](https://z2jh.jupyter.org/en/stable/) for detailed configuration options.

## Steps to Deploy

0. **(OPTIONAL) Clone Template**: Clone the template and customise the config.yaml to your requirements/use case. 
1. **Create Environment from Template**: Create an environment.
2. **Prepare Configuration**: Customize your `config.yaml` file to define the desired JupyterHub settings. The configuration is extensive and specific to your use case, so update it to match your requirements.
3. **Chart Version**: The only template parameter provided in the deployment is the chart version. The default value for the chart version is `3.3`.
4. **Deploy**

## References
- The helm charts full [configuration yaml](https://github.com/bunnyshell/templates/blob/main/.bunnyshell/templates/showcase-jupyter/config.yaml) file.

## Summary

- **Customize Configuration**: Update the `config.yaml` file to suit your specific requirements.
- **Chart Version**: The default chart version is `3.3`, but this can be adjusted as needed.
- **Deployment**: Use Bunnyshell to deploy JupyterHub with the customized configuration.

For more detailed instructions and advanced configurations, refer to the official [Zero to JupyterHub documentation](https://z2jh.jupyter.org/en/stable/).
