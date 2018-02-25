FROM node:9-alpine as builder

RUN mkdir /app

COPY package.json package-lock.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

RUN npm i && cp -R ./node_modules ./app

WORKDIR /app

COPY . .

RUN $(npm bin)/ng build --prod 

FROM nginx:1.13-alpine

COPY nginx/default.conf /etc/nginx/conf.d/

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
