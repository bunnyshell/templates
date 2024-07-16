# Template overview

This Environment [Template](https://documentation.bunnyshell.com/docs/templates-what-are-templates) is a working Magento 2.4 instance, ready for you to build upon.

The template provides the Bunnyshell configuration for a Magento-based production environment.

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

## Production / Staging / Testing

You only need to [deploy the Environment](https://documentation.bunnyshell.com/docs/environment-workflows-deploy).

&nbsp;

---

&nbsp;

# Important Note

You must change all passwords and review all parameters to ensure that your Environment is secure.
