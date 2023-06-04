# Use an official Node.js image as the base
FROM node:16-alpine

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
