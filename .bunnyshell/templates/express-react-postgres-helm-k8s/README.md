# Template overview

This Environment [Template](https://documentation.bunnyshell.com/docs/templates-what-are-templates) is a boilerplate for creating a new environment based on a stack using Node.js with Express for the backend, React with Typescript for the frontend and PostgreSQL as the database.

The template provides the Bunnyshell configuration composed of 3 Components (frontend + backend + database) and the CRUD application that demonstrates how the components work together to form an environment.

You can extend the template by further adding Components, be them more APIs or other services, such as queues, caches, block storage etc.

&nbsp;

# Environment overview

An [Environment in Bunnyshell](https://documentation.bunnyshell.com/docs/environments) is a user-defined group that brings together applications and all of the services and databases those applications require.

This Environment Template contains 3 components:
- `frontend` for frontend, using some Kubernetes manifests to deploy the component
- `frontend-image` for the container image deployed by frontend
- `api` for backend, using a Helm chart to deploy the component
- `api-image` for the container image deployed by `api`
- `postgres` for the database, using a public Bitnami chart to deploy the component

## Container images

The images for both frontend and api have 2 possible stages: `dev` and `prod`.

The `dev` stage is suitable for development, as it contains development packages and libraries and has debugging enabled.  
The `prod` stage is meant for production/staging, as it produces an optimized image, as lightweight as possible.

The stage (`dev` or `prod`) can be set from the Environment's configuration (`bunnyshell.yaml`), within each `DockerImage`'s `target` property. The default is `dev`, and it can be changed to `prod` to produce production-like images.

&nbsp;

# How to use this Template

You can create Environments from a [Bunnyshell Template](https://documentation.bunnyshell.com/docs/templates-what-are-templates); these Environments can have multiple purposes:
- Development
- Staging / Dev testing / End-to-end testing

Development Environments should be created with the `dev` target for images (see "Container images") and can be used for Remote Development.

Staging / Testing Environments should be created with the `prod` target for images, in order to have the application running as it does in production.

&nbsp;

---

&nbsp;

# Important Note

You must change all passwords and review all parameters to ensure that your Environment is secure.
