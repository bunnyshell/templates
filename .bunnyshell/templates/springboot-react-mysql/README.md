# Template overview

This Environment [Template](https://documentation.bunnyshell.com/docs/templates-what-are-templates) is a boilerplate for creating a new environment based on a stack using Java 17 with Spring Boot for the backend, React with Typescript for the frontend and MySQL as the database.

The template provides the Bunnyshell configuration composed of 3 Components (frontend + backend + database) and the CRUD application that demonstrates how the components work together to form an environment.

An [Environment in Bunnyshell](https://documentation.bunnyshell.com/docs/environments) is a user-defined group that brings together applications and all of the services and databases those applications require.

&nbsp;

# Environment overview

## Container images

The images for both frontend and backend have 2 possible stages: `dev` and `prod`.

The `dev` stage is suitable for development, as it contains development packages and libraries and has debugging enabled.  
The `prod` stage is meant for production/staging, as it produces an optimized image, as lightweight as possible.

The stage (`dev` or `prod`) can be set from the Environment's configuration (`bunnyshell.yaml`), within each Component's `dockerCompose.build.target` property. The default is `dev`, and it can be changed to `prod` to produce production-like images.

&nbsp;

# How to use this Template

You can create Environments from a [Bunnyshell Template](https://documentation.bunnyshell.com/docs/templates-what-are-templates); these Environments can have multiple purposes:

&nbsp;

## Staging / Testing

You need to ensure that the `dockerCompose.build.target` is set to `prod` for all the Components, and then [deploy the Environment](https://documentation.bunnyshell.com/docs/environment-workflows-deploy).

&nbsp;

## Remote Development

[Remote Development](https://documentation.bunnyshell.com/docs/remote-development) allows you to develop directly in a cloud environment, therefore eliminating all inconsistencies and approximations of traditional local environments.

The code is executed in a container running in Kubernetes, while being synchronized real-time with your local folders.

📖 For more information on how Remote Development works in Bunnyshell, please see the [dedicated documentation](https://documentation.bunnyshell.com/docs/remote-development).

🧱 Remote Development can only be started from the CLI, so you will need to [install the Bunnyshell CLI](https://documentation.bunnyshell.com/docs/bunnyshell-cli-install) installed and to [authenticate in the CLI](https://documentation.bunnyshell.com/docs/bunnyshell-cli-authentication).

&nbsp;

You need to ensure that the `dockerCompose.build.target` is set to `dev` for all the Components, and then [deploy the Environment](https://documentation.bunnyshell.com/docs/environment-workflows-deploy).

&nbsp;

### Start a Remote Development session

In order to start a Remote Development session, you must run a command from the CLI:
```
bns remote-development up --component {COMPONENT_ID}
```

The exact command can be copied from the UI: go to the Environment details screen, select the desired Component, then *Remote Development*. In case you do not specify the `component` flag, the CLI will guide you through using a wizard.

You need to provide 2 additional paths:
- the *local path*, for your local code files
- the *remote path*: the path where code files are located within the container (you can find this out from the `Dockerfile`, it's in the `WORKDIR` statement); for the `api` application, it is `/app`.

💡 The wizard will require these from you, but you can also provide them as options, `-l` and `-r` respectively. You can also define [the remote development configuration](https://documentation.bunnyshell.com/docs/remote-development-sharing-configuration) in `bunnyshell.yaml`.

After starting the Remote Development session, the Bunnyshell CLI opens a shell into the container. From it, you can run any application-related command you would run on local.  
Please note that **you must start the application** manually, as you may need to start the application in a number of ways, eg. with or without debugging.

```
$ bns remote-development up --component {YOUR_COMPONENT_ID}
? Local Path {YOUR_OWN_LOCAL_PATH}}
? Remote Path /app
/app # ./mvnw spring-boot:run
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

#### Debugging backend

When debugging with local code, you need to:
1. start the Remote Development session with port-forwarding on the debugger's port (`5005` for this example)
2. start the JVM process (eg. run `./mvnw spring-boot:run -Dspring-boot.run.jvmArguments="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005"`) in the shell you're left in after the `bns remote-development up` command finishes
3. [set up the IDE with a debugging configuration](https://documentation.bunnyshell.com/docs/remote-development-debugging-nodejs#setting-up-the-ide) on the debugger's port (`5005` for this example)
4. define a file mapping (local to remote) for the IDE configuration (eg. `{YOUR_OWN_LOCAL_PATH}}` to `/app`)
5. start the debug process from your IDE

For the `api` service, you need to run:
```
$ bns remote-development up --component {YOUR_COMPONENT_ID} --port-forward "5005>5005"
? Local Path {YOUR_OWN_LOCAL_PATH}}
? Remote Path /app
/app # ./mvnw spring-boot:run -Dspring-boot.run.jvmArguments="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005"
```

You can now add breakpoints and start debugging.

📖 For more information on debugging locally, please see:
- [Debugging locally with port forwarding](https://documentation.bunnyshell.com/docs/remote-development-debugging)
  - [Debugging node.js](https://documentation.bunnyshell.com/docs/remote-development-debugging-nodejs) for `app`
- [Debugging remotely with VS Code](https://documentation.bunnyshell.com/docs/remote-development-configure-vs-code)

&nbsp;

#### Debugging frontend

Debugging frontend applications has a different approach than debugging backend applications, as it leverage the WDS (Webpack Dev Server) technique for modern javascript frameworks.

You only need to configure your IDE for the Remote Environment, and this is a matter of following a few simple steps.

📖 For more information on debugging frontend applications, please see:
- [Debugging frontend apps](https://documentation.bunnyshell.com/docs/remote-development-debugging-frontend)

&nbsp;

---

&nbsp;

# Important Note

You must change all passwords and review all parameters to ensure that your Environment is secure.
