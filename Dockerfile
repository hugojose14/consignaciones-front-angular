#Stage 0, traer la imagen de node
FROM node:14 as build

#Creo el directorio de trabajo 
WORKDIR /usr/app 

#Copio los archivos del package json y resto de archivos
COPY package.json ./

#Corro e instalo npm install
RUN npm install

#copiar todos los archivos de mi aplicación
COPY . .
 
#build app
RUN npm run build --prod  

#Stage 1, trater la imagen de nginx
FROM nginx as prod-stage

#Eliminar los archivos por defecto de nginx 
RUN rm -rf /usr/share/nginx/html/*

#Copiar los archivos estáticos de prod al nginx 
COPY --from=build /usr/app/dist/app-base /usr/share/nginx/html

#Puerto
#EXPOSE 80
#CMD ["nginx","-g", "daemon off;"]
