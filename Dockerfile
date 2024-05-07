FROM node:latest

WORKDIR /usr/app

COPY package*.json ./

RUN npm install --silent

COPY . .

RUN mv .env.example .env

RUN npm run build

EXPOSE 5173

CMD [ "npm" , "run", "dev" ]