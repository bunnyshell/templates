# dev stage
FROM node:18-alpine3.17 as dev

ENV NODE_ENV=development

# Needed for VS Code Remote Development
RUN apk add musl libgcc libstdc++ git curl wget bash ca-certificates gcompat openssh-client

# setup workdir (next commands will run under this context, but also the running container will inherit this - if not overriden at runtime)
WORKDIR /usr/src/app/backend

# Build App
# - copy package-lock.json (optimise image build - copy only these files and run install, if these change rarely we can reuse this image layer too)
COPY package*.json .

# - install packages (optimise image build - run just install after copying package.json, we hope these will change rarer as the code, so we can reuse this image layer too)
RUN npm install

# - copy the rest of the code (except the ones in .dockerignore) (optimise image build - we expect these to change everytime, so keep this as late as possible)
COPY . .

EXPOSE 3080

CMD ["npm", "run", "start:dev"]

# production stage
FROM node:18-alpine3.17 as prod

ENV NODE_ENV=production

WORKDIR /usr/src/app/backend

# in production we dont need dev dependencies, running `npm ci` with `NODE_ENV=production` will install only the main dependencies
COPY package*.json .
RUN npm ci

# we don't have a build stage, so just copy the files from docker context again
COPY . .

EXPOSE 3080

CMD ["npm", "start"]
