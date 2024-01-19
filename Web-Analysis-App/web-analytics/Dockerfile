FROM node:16-alpine

WORKDIR /web-analytics

COPY package*.json /web-analytics

COPY . /web-analytics

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm","run","dev"]