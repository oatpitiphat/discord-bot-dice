FROM node:10-slim

RUN mkdir -p /src
WORKDIR /src

COPY package.json /src
RUN npm install
COPY . /src

EXPOSE 3000

CMD [ "npm", "start" ]