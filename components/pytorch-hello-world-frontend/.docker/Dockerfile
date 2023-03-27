FROM nginx:1.21.3-alpine

COPY .docker/files/nginx.conf /etc/nginx/nginx.conf
COPY .docker/files/entrypoint.sh  /usr/share/entrypoint.sh
RUN chmod +x /usr/share/entrypoint.sh

COPY . /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

ENTRYPOINT ["/usr/share/entrypoint.sh"]

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]