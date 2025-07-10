FROM nginx:stable-alpine

COPY ./dist /usr/share/nginx/html

# RUN find /usr/share/nginx/html -name "*.map" -type f -delete

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
