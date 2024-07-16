# Template overview

This Environment [Template](https://documentation.bunnyshell.com/docs/templates-what-are-templates) is a working Magento 2.4 instance, ready for you to build upon.

The template provides the Bunnyshell configuration for a Magento-based development environment.

An [Environment in Bunnyshell](https://documentation.bunnyshell.com/docs/environments) is a user-defined group that brings together applications and all of the services and databases those applications require.

## Template specifics

### Magento Keys !!
Adobe requires a developer account to be able to install Magento.
In order for the environment to successfully deploy, you MUST fill in this Magento auth secret variables with the values from your Adobe account:
- `MAGE_PRIVKEY`
- `MAGE_PUBKEY`

### ElasticSearch Resources
Elasticsearch is configured to use 1GB of RAM. Edit the environment yaml ( `resources` section of the `elasticsearch` component) to set a different value.


&nbsp;

# Environment overview

# How to use this Template

You can create Environments from a [Bunnyshell Template](https://documentation.bunnyshell.com/docs/templates-what-are-templates); these Environments can have multiple purposes:

&nbsp;

## Staging / Testing

You only need to [deploy the Environment](https://documentation.bunnyshell.com/docs/environment-workflows-deploy).

&nbsp;

## Remote Development

[Remote Development](https://documentation.bunnyshell.com/docs/remote-development) allows you to develop directly in a cloud environment, therefore eliminating all inconsistencies and approximations of traditional local environments.

The code is executed in a container running in Kubernetes, while being synchronized real-time with your local folders.

📖 For more information on how Remote Development works in Bunnyshell, please see the [dedicated documentation](https://documentation.bunnyshell.com/docs/remote-development).

🧱 Remote Development can only be started from the CLI, so you will need to [install the Bunnyshell CLI](https://documentation.bunnyshell.com/docs/bunnyshell-cli-install) installed and to [authenticate in the CLI](https://documentation.bunnyshell.com/docs/bunnyshell-cli-authentication).


&nbsp;

### Start a Remote Development session

In order to start a Remote Development session, you must run a command from the CLI:
```
bns remote-development up --component {COMPONENT_ID}
```

The exact command can be copied from the UI: go to the Environment details screen, select the desired Component, then *Remote Development*. In case you do not specify the `component` flag, the CLI will guide you through using a wizard.

You need to provide 2 additional paths:
- the *local path*, for your local code files
- the *remote path*: the path where code files are located within the container (you can find this out from the `Dockerfile`, it's in the `WORKDIR` statement); for Magento application, it is `/app`.

💡 The wizard will require these from you, but you can also provide them as options, `-l` and `-r` respectively. You can also define [the remote development configuration](https://documentation.bunnyshell.com/docs/remote-development-sharing-configuration) in `bunnyshell.yaml`.

After starting the Remote Development session, the Bunnyshell CLI opens a shell into the container. From it, you can run any application-related command you would run on local.  
Please note that **you must start the php-fpm process** manually.

```
$ bns remote-development up --component {YOUR_COMPONENT_ID}
? Local Path {YOUR_OWN_LOCAL_PATH}}
? Remote Path /app
/var/www # php-fpm -R
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

### Debugging in a Remote Development session

You can debug your code even if it's running in a container in Kubernetes, just like you would on your local machine: use breakpoints, control the flow of execution, see variable values and call stacks etc.

The configuration differs based on the way you chose to work, and also on your IDE of choice.

&nbsp;

#### Debugging

The image is [already prepared for debugging](https://documentation.bunnyshell.com/docs/remote-development-debugging-php#prepare-the-container-image) with Xdebug.

⚠️ Do not forget to replace the build argument `XDEBUG_IDE_KEY` from the `magento` service with your IDE's correct value.

When debugging with local code, you need to:
1. start the Remote Development session with reverse port-forwarding on the debugger's port (`9003` for `xdebug`)
2. start the php-fpm process (eg. run `php-fpm`) in the shell you're left in after the `bns remote-development up` command finishes
3. [set up the IDE with a debugging configuration](https://documentation.bunnyshell.com/docs/remote-development-debugging-php#setting-up-the-ide) on the debugger's port (`9003` for `xdebug`); for PhpStorm, you just need to start listening for incoming connections to start this process
4. define a file mapping (local to remote) for the IDE configuration (eg. `{YOUR_OWN_LOCAL_PATH}}` to `/var/www`)
5. have the debug listening process started from your IDE

For the `magento` service, you need to run:
```
$ bns remote-development up --component {YOUR_COMPONENT_ID} --port-forward "9003<9003"
? Local Path {YOUR_OWN_LOCAL_PATH}}
? Remote Path /app
/var/www # php-fpm
```

You can now add breakpoints and start debugging.

📖 For more information on debugging locally, please see:
- [Debugging locally with port forwarding](https://documentation.bunnyshell.com/docs/remote-development-debugging)
  - [Debugging PHP](https://documentation.bunnyshell.com/docs/remote-development-debugging-php) for `symfony`
- [Debugging remotely with VS Code](https://documentation.bunnyshell.com/docs/remote-development-configure-vs-code)

&nbsp;

---

&nbsp;

# Important Note

You must change all passwords and review all parameters to ensure that your Environment is secure.
