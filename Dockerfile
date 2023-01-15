FROM node:10
ENV PORT 3000
EXPOSE 3000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]
#CMD ["npm", "dev"]
#
# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
# https://docker-handbook.farhan.dev/containerizing-a-javascript-application
