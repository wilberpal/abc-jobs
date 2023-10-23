FROM nginx:1.17.1-alpine

EXPOSE 80
EXPOSE 4200
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY www /usr/share/nginx/html