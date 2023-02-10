# Builder
FROM node:lts AS bundler

WORKDIR /usr/src/app
COPY . .
RUN npm i -y
RUN npm run build

# Packager
FROM node:lts-slim

WORKDIR /etc/donas
COPY --from=bundler /usr/src/app/dist ./dist
COPY --from=bundler /usr/src/app/package*.json ./
RUN npm install --only=prod

EXPOSE 3000
ENTRYPOINT [ "/bin/sh", "-c", "node /etc/donas/dist/main.js" ]
