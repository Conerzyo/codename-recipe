FROM node:12.13.0-alpine As development

ENV NODE_ENV=development

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:12.13.0-alpine as production


ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

COPY --from=development /usr/src/app/dist ./dist

ENV PORT 8000

CMD ["node", "dist/src/main"]