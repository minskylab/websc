FROM node:12 as build

WORKDIR /usr/src/app

COPY package.json .
RUN yarn

COPY . .

RUN yarn build

FROM nginx
COPY --from=build /usr/src/app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]