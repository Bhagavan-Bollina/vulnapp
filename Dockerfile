FROM node:alpine

WORKDIR /usr/nodeapp

COPY ./package.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]

EXPOSE 3000