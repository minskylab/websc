FROM node:12 as builder

WORKDIR /usr/src/app

COPY package.json .
RUN yarn

COPY . .

RUN yarn build

FROM nginx

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]