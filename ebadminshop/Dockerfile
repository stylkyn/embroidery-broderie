FROM node:22.9.0

WORKDIR /app/medusa

COPY package.json .
COPY tsconfig.json .

RUN apt-get update

RUN apt-get install -y python3

RUN yarn global add npm@latest

RUN yarn global add @medusajs/medusa-cli@latest

COPY . .

ENTRYPOINT ["./develop.sh", "develop"]
CMD [ "yarn", "start" ]