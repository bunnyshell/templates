# Template overview

This Environment [Template](https://documentation.bunnyshell.com/docs/templates-what-are-templates) is a basic example for creating a new environment using PyTorch. It contains an image recognition application, with two pre-trained models - MobileNet and a custom, very basic one. The training was done for the CIFAR-10 dataset, and re-training is also supported for the custom model.

The template provides the Bunnyshell configuration composed of 2 Components (frontend + backend) and the image recognition application that demonstrates how the backend might be leveraged in an environment.

An [Environment in Bunnyshell](https://documentation.bunnyshell.com/docs/environments) is a user-defined group that brings together applications and all of the services and databases those applications require.

&nbsp;

# Environment overview

# How to use this Template

You can create Environments from a [Bunnyshell Template](https://documentation.bunnyshell.com/docs/templates-what-are-templates); these Environments can have multiple purposes:

&nbsp;

## Staging / Testing

You need to ensure that the `dockerCompose.environment.DEBUG` is set to `False` for the `backend`, and then [deploy the Environment](https://documentation.bunnyshell.com/docs/environment-workflows-deploy).

&nbsp;

## Remote Development

Development Environments should be created with the `DEBUG` environment variable set to `True` (to enable hot-reloading) in order to be used for Remote Development.

[Remote Development](https://documentation.bunnyshell.com/docs/remote-development) allows you to develop directly in a cloud environment, therefore eliminating all inconsistencies and approximations of traditional local environments.

The code is executed in a container running in Kubernetes, while being synchronized real-time with your local folders.

📖 For more information on how Remote Development works in Bunnyshell, please see the [dedicated documentation](https://documentation.bunnyshell.com/docs/remote-development).

🧱 Remote Development can only be started from the CLI, so you will need to [install the Bunnyshell CLI](https://documentation.bunnyshell.com/docs/bunnyshell-cli-install) installed and to [authenticate in the CLI](https://documentation.bunnyshell.com/docs/bunnyshell-cli-authentication).

&nbsp;

### Start a Remote Development session

In order to start a Remote Development session, you must run the dedicated command from the CLI:
```
bns remote-development up --component {COMPONENT_ID}
```

The exact command can be copied from the UI: go to the Environment details screen, select the desired Component, then *Remote Development*. In case you do not specify the `component` flag, the CLI will guide you through using a wizard.

You need to provide 2 paths:
- the *local path*, for your local code files
- the *remote path*: the path where code files are located within the container (you can find this out from the `Dockerfile`, it's in the `WORKDIR` statement); for the `backend` application, it is `/app`.

💡 The wizard will require these from you, but you can also provide them as options, `-l` and `-r` respectively. . You can also define [the remote development configuration](https://documentation.bunnyshell.com/docs/remote-development-sharing-configuration) in `bunnyshell.yaml`.

After starting the Remote Development session, the Bunnyshell CLI opens a shell into the container. From it, you can run any application-related command you would run on local.  
Please note that **you must start the application** manually, as you may need to start the application in a number of ways, eg. with or without debugging.

```
$ bns remote-development up --component {YOUR_COMPONENT_ID}
? Local Path {YOUR_OWN_LOCAL_PATH}}
? Remote Path /app
/app $ python app.py
```

📖 For more information on starting a remote Development session, please see:
- [How to Start Remote Development](https://documentation.bunnyshell.com/docs/remote-development-start)
  - [with local files](https://documentation.bunnyshell.com/docs/remote-development-local-files)
  - [with remote files](https://documentation.bunnyshell.com/docs/remote-development-remote-files)

&nbsp;

### Stop a Remote Development session

In order to stop a Remote Development session, you must run the complementary command for `up` from the CLI:
```
bns remote-development down --component {YOUR_COMPONENT_ID}
```

📖 For more information on stopping a remote Development session, please see:
- [Stop Remote Development](https://documentation.bunnyshell.com/docs/remote-development-stop)

&nbsp;


---

&nbsp;

# Important Note

You must change all passwords and review all parameters to ensure that your Environment is secure.
