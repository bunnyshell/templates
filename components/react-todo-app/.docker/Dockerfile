# Use an official Node.js runtime as a parent image
FROM node:14-alpine

WORKDIR /app/

COPY ./package.json /app/

# Install dependencies
RUN npm install

# Set up an anonymous volume for the node_modules directory
VOLUME [ "/app/node_modules" ]

# Copy the build directory to the container
COPY . /app/

ENTRYPOINT [ "npm", "run", "start"]