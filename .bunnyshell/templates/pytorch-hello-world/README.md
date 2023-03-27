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
