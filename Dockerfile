FROM node:20-alpine as BUILD_IMAGE

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine as PRODUCTION_IMAGE

WORKDIR /app

COPY --from=BUILD_IMAGE /app/dist ./dist
COPY --from=BUILD_IMAGE /app/package.json ./
COPY --from=BUILD_IMAGE /app/package-lock.json ./
COPY --from=BUILD_IMAGE /app/vite.config.ts ./

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "preview"]
