FROM node:latest

COPY . /app
WORKDIR /app

RUN npm install -g parcel-bundler
RUN npm ci

EXPOSE 1234
EXPOSE 1235
ENV CHOKIDAR_USEPOLLING=1

CMD ["parcel","index.html","--hmr-port","1235"]