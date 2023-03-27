# Template overview

This Environment [Template](https://documentation.bunnyshell.com/docs/templates-what-are-templates) is a basic example for creating a new environment using PyTorch. It contains an image recognition application, with two pre-trained models - MobileNet and a custom, very basic one. The training was done for the CIFAR-10 dataset, and re-training is also supported for the custom model.

The template provides the Bunnyshell configuration composed of 2 Components (frontend + backend) and the image recognition application that demonstrates how the backend might be leveraged in an environment.

You can extend the template by further adding Components, be them more APIs or other services, such as APIs, queues, caches, block storage etc.

&nbsp;

# Environment overview

An [Environment in Bunnyshell](https://documentation.bunnyshell.com/docs/environments) is a user-defined group that brings together applications and all of the services and databases those applications require.

This Environment Template contains 2 components:
- `frontend`, based on a `nginx` image, containing a basic HTML+CSS app
- `backend`, based on a `pytorch` image

and 1 persistent volume:
- `training-data-volume` for storing the image dataset used for training (acts as a cache)

# How to use this Template

You can create Environments from a [Bunnyshell Template](https://documentation.bunnyshell.com/docs/templates-what-are-templates); these Environments can have multiple purposes:
- Development
- Staging / Dev testing / End-to-end testing

Development Environments should be created with the `DEBUG` environment variable set to `True` *with hot-reloading) as they can be used for Remote Development.

Staging / Testing Environments should be created with the `DEBUG` environment variable set to `False`, in order to have the application running as it does in production.

&nbsp;

## Staging / Testing

For staging / testing purposes, the Environments just need to be deployed.

You need to ensure that the `dockerCompose.environment.DEBUG` is set to `False` for the `backend`, and then [deploy the Environment](https://documentation.bunnyshell.com/docs/environment-workflows-deploy).

&nbsp;

## Remote Development

[Remote Development](https://documentation.bunnyshell.com/docs/remote-development) allows you to develop directly in a cloud environment, therefore eliminating all inconsistencies and approximations of traditional local environments.

The code is ran in a container running in Kubernetes, and you can choose one of two ways to work, depending whether you prefer to keep a local copy of the code or not.

Option 1. You can have the code existing **only in the container** - you will need an IDE capable of connecting via SSH to install a headless IDE in the container, eg. VS Code or the JetBrains suite.

Option 2. You can have the code existing **on your device** and it will be synchronized into the container - any IDE or plain text editor will do.

📖 For more information on how Remote Development works in Bunnyshell, please see the [dedicated documentation](https://documentation.bunnyshell.com/docs/remote-development).

🧱 Remote Development can only be started from the CLI, so you will need to [install the Bunnyshell CLI](https://documentation.bunnyshell.com/docs/bunnyshell-cli-install) installed and to [authenticate in the CLI](https://documentation.bunnyshell.com/docs/bunnyshell-cli-authentication).

&nbsp;

### Start a Remote Development session

In order to start a Remote Development session, you must run the dedicated command from the CLI:
```
bns remote-development up
```

The CLI will present a wizard, so you can choose your Environment first, then the Component on which you want to develop on.  
You can also pass on the Component ID, to skip the wizard. The full command can be copied from the UI: go to the Environment details screen, click the desired Component and click *Remote Development*.

💡 When typing, you can use the shorter alias: `bns rdev up`

You need to choose the way you wish to work with files, before starting the Remote Development session.

&nbsp;

#### Option 1: Working with code from your machine

When working with code stored locally (the default mode), you just need to run:
```
bns remote-development up
```

And you need to provide 2 paths:
- the *local path*, for your local code files
- the *remote path*: the path where code files are located within the container (you can find this out from the `Dockerfile`, it's in the `WORKDIR` statement); for the `backend` application, it is `/app`.

💡 The wizard will require these from you, but you can also provide them as options, `-l` and `-r` respectively.

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

&nbsp;

#### Option 2: Working with code from the container

When working directly with the files from the container, you need to disable the synchronization of files, by adding the option `--sync-mode none` to the command. Usually, since you'll be using your IDE to connect to the container, you will also want to pass in `--no-tty`, to disable leaving an SSH terminal into the container, but this is optional and depends on your preferences.

You need to provide the *remote path*: the path where code files are located within the container (you can find this out from the `Dockerfile`, it's in the `WORKDIR` statement); for the `backend` application, it is `/app`.

💡 The wizard will require this from you, but you can also provide it as an option, using `-r`.

```
bns remote-development up --sync-mode none --no-tty
? Remote Path /app
Pod is ready for Remote Development.
You can find the SSH Config file in /Users/myuser/.bunnyshell/remote-dev/ssh-config
```

💡 Remember that you can pass in the optional flag `--component {YOUR_COMPONENT_ID}` to skip running the wizard to choose the Component.

Using the SSH config file, you can now configure your IDE to connect remotely to the container, via SSH.  
🚀 [See how to configure VS Code for Remote Development via SSH](https://documentation.bunnyshell.com/docs/remote-development-configure-vs-code-connection)

Please note that using the Terminal from the IDE, **you must start the application** manually, as you may need to start the application in a number of ways, eg. with or without debugging.

```
/app $ python app.py
```

📖 For more information on starting a remote Development session, please see:
- [How to Start Remote Development](https://documentation.bunnyshell.com/docs/remote-development-start)
  - [with remote files](https://documentation.bunnyshell.com/docs/remote-development-remote-files)

&nbsp;

### Stop a Remote Development session

In order to stop a Remote Development session, you must run the dedicated command from the CLI:
```
bns remote-development down
```

The CLI will present a wizard, so you can choose your Environment first, then the Component for which you want to stop the session for.  
You can also pass on the Component ID, to skip the wizard. The full command for starting a session can be copied from the UI: go to the Environment details screen, click the desired Component, then expand the *Component Actions* and select *Remote Development*. Then, you just need to replace `up` with `down.

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
