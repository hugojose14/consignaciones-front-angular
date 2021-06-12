#Stage 0, traer la imagen de node
FROM node

#Creo el directorio de trabajo 
WORKDIR /app 

COPY package.json /.

#Corro e instalo npm install
RUN npm install

#copiar todos los archivos de mi aplicación
COPY . .
 
#build app
RUN npm run build -- --prod --output.path ./src/main/resources/static

#Stage 1, trater la imagen de nginx
FROM nginx 

#Eliminar los archivos por defecto de nginx 
RUN rm -rf /usr/share/nginx/html/*

#Copiar los archivos estáticos de prod al nginx 
COPY --from=node /app/src/main/resources/static /usr/share/nginx/html

