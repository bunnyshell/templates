# Template overview

This Environment [Template](https://documentation.bunnyshell.com/docs/templates-what-are-templates) is a working Sylius Standard Edition instance, ready for you to build upon.

The template provides the Bunnyshell configuration for a Sylius-based environment.

An [Environment in Bunnyshell](https://documentation.bunnyshell.com/docs/environments) is a user-defined group that brings together applications and all of the services and databases those applications require.

## Template specifics

The template is configured so it inserts some demo data.  
After the first deployment, you should set the evnironment variable `LOAD_FIXTURES` to `0` on the component `init-migrations`.

&nbsp;

# Environment overview

# How to use this Template

You can create Environments from a [Bunnyshell Template](https://documentation.bunnyshell.com/docs/templates-what-are-templates); these Environments can be used for production or staging.

&nbsp;

## Production / Staging / Testing

You only need to [deploy the Environment](https://documentation.bunnyshell.com/docs/environment-workflows-deploy).

&nbsp;

---

&nbsp;

# Important Note

You must change all passwords and review all parameters to ensure that your Environment is secure.
