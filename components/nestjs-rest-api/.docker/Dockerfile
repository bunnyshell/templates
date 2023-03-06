FROM node:18-alpine3.17 as dev

ENV NODE_ENV development

# Needed for VS Code Remote Development
RUN apk add musl libgcc libstdc++ git curl wget bash ca-certificates gcompat openssh-client

# App directory
WORKDIR /app

# App dependencies
COPY package*.json ./
RUN npm ci

# Copy app source code
COPY . .

#Expose port and begin application
EXPOSE 9000

# Start the app
CMD [ "npm", "run", "start:dev"]

# build stage
FROM node:18-alpine3.17 as build

ENV NODE_ENV production

WORKDIR /app

COPY --chown=node:node package*.json ./

COPY --chown=node:node --from=dev /app/node_modules ./node_modules

COPY --chown=node:node . .

RUN npm run build

RUN npm ci --only=production && npm cache clean --force


# prod stage
FROM node:18-alpine3.17 as prod

ENV NODE_ENV production

WORKDIR /app

COPY --chown=node:node --from=build /app/node_modules ./node_modules
COPY --chown=node:node --from=build /app/dist ./dist
COPY --chown=node:node .env ./

EXPOSE 9000

USER node

CMD ["node", "dist/main.js"]
