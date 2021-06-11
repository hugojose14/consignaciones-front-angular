#Stage 0, traer la imagen de node
FROM node:latest as node
WORKDIR /app 
#copiar todos los archivos de mi aplicación
COPY ./ /app/
#Corro e instalo npm install
RUN npm install 
RUN ng build -- --prod --output-path /app/src/main/resources/static

#Stage 1, trater la imagen de nginx
FROM nginx 
#Copiar los archivos estáticos de prod al nginx 
COPY --from=node /app/src/main/resources/static /usr/share/nginx/html

