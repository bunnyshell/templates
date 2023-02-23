FROM node:18-alpine3.17 as dev

# App directory
WORKDIR /app

# App dependencies
COPY package*.json ./
RUN npm i

# Copy app source code
COPY . .

#Expose port and begin application
EXPOSE 9000

# Start the app
CMD [ "npm", "run", "start:dev"]

# prod stage
FROM node:16-alpine as prod

ENV NODE_ENV production

WORKDIR /app

COPY package*.json ./
RUN npm ci

# Copy app source code
COPY . .

EXPOSE 9000

CMD ["npm", "run", "start:prod"]
