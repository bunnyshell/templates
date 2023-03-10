# dev stage
FROM node:18-alpine3.17 AS dev

ENV NODE_ENV development

ARG API_URL
ENV API_URL=$API_URL

# setup workdir (next commands will run under this context, but also the running container will inherit this - if not overriden at runtime)
WORKDIR /usr/src/app/

# Needed for VS Code Remote Development
RUN apk add musl libgcc libstdc++ git curl wget bash ca-certificates gcompat openssh-client

# Build App
# - copy package.json and yarn.lock (optimise image build - copy only these files and run install, if these change rarely we can reuse this image layer too)
COPY package*.json ./

# - install packages (optimise image build - run just install after copying package.json, we hope these will change rarer as the code, so we can reuse this image layer too)
RUN npm ci

# Copy the source code to the container
COPY . .

EXPOSE 8080

ENTRYPOINT [".docker/files/entrypoint.sh"]

# Start the app with ng serve
CMD ["npm", "start"]



# prod (and build) stages
FROM dev AS build

ENV NODE_ENV production

# Build the app
RUN npm run build --configuration=production



# Nginx stage
FROM nginx:1.21.3-alpine AS prod

# Copy the built app to the Nginx HTML directory
COPY --from=build /usr/src/app/dist/frontend-angular /usr/share/nginx/html

COPY .docker/files/nginx.conf  /etc/nginx/conf.d/default.conf
COPY .docker/files/entrypoint.sh  /usr/share/entrypoint.sh

# Expose port 80
EXPOSE 8080

ENTRYPOINT ["/usr/share/entrypoint.sh"]

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
