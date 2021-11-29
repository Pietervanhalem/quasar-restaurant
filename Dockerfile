FROM node:14
WORKDIR /app
RUN npm install @quasar/cli -g

# add & copy files in this repo
COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY .eslintignore .
COPY .eslintrc.js .
COPY .postcssrc.js .

COPY jsconfig.json .
COPY babel.config.js .
COPY quasar.conf.js .

COPY src src/

RUN quasar build -m spa