# Symfony + React + MySQL

This is a boilerplate for creating a new environment using PHP, Symfony, React and MySQL.

It contains the needed components (frontend + backend + database) and a CRUD application that demonstrates how the components fit together.

## Environment

The Environment contains 3 main components:
- `frontend` based on a `node` image
- `symfony` based on a `php-fpm` image, with a sidecar container for the webserver (`nginx`)
- `database` using a `mysql` image

and 2 persisnet volumes:
- `database-data`
- `symfony-cache`

## Container images

The images for frontend and backend have 2 possible stages, `dev` and `prod`, suitable for development and production/staging respectively. The former has development packages and libraries included and debugging enabled, while the former has an optimizied image, as lightweight as possible.

The `dev` or `prod` stage can be set from `bunnyshell.yaml`, within the `components.[*].dockerCompose.build.target` property.

## Remote development

For information about using Remote development on Bunnyshell, please check the following resources.

#### Start / Stop Remote Development
- [How to Start Remote Development](https://documentation.bunnyshell.com/docs/remote-development-start)
- [Stop Remote Development](https://documentation.bunnyshell.com/docs/remote-development-stop)

#### Debugging while working with code on your machine
- [Debugging locally with port forwarding](https://documentation.bunnyshell.com/docs/remote-development-debugging)
  - [Debugging node.js](https://documentation.bunnyshell.com/docs/remote-development-debugging-nodejs) for `frontend`
  - [Debugging PHP](https://documentation.bunnyshell.com/docs/remote-development-debugging-php) for `symfony`
  
#### Debugging while working with code in the container
- [Debugging remotely with VS Code](https://documentation.bunnyshell.com/docs/remote-development-configure-vs-code)

---

## Important

You need to change all passwords and review all parameters to ensure that the environment is secure.
