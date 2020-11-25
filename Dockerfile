FROM node:alpine as builder
RUN apk update && apk add python make g++
WORKDIR '/app'
COPY ./package.json ./
RUN npm install --production
COPY . . 
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html