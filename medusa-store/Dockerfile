FROM node

WORKDIR /app/medusa

COPY package.json .
COPY yarn.lock .

RUN apt-get update
RUN apt-get install -y python3

RUN yarn global add @medusajs/medusa-cli@latest
RUN yarn install

COPY . .

ENTRYPOINT ["./develop.sh"]
CMD ["yarn", "dev"]