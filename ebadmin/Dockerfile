FROM node:16
# RUN apt-get install libvips-dev -y
# RUN apt-get update && apt-get install libvips-dev -y

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY yarn.lock /app
COPY . /app

RUN yarn config set network-timeout 600000 -g
RUN yarn install
RUN yarn build
EXPOSE 1337

CMD ["yarn", "start"]
