FROM node:18.17

WORKDIR /frontend

COPY package*.json ./

RUN npm install --global npm@10.5.2 && npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm", "run" ]

CMD [ "start" ]