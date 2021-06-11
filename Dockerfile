#Stage 0, traer la imagen de node
FROM node
#Creo una carpeta app
RUN mkdir /app
WORKDIR /app 
#copiar todos los archivos de mi aplicación
COPY . /app
#Corro e instalo npm install
RUN npm install 
#build app
RUN npm run build -- --prod --output-path=./dist/out

#Stage 1, trater la imagen de nginx
FROM nginx 

#Eliminar los archivos por defecto de nginx 
RUN rm -rf /usr/share/nginx/html/*

#Copiar los archivos estáticos de prod al nginx 
COPY --from=node /app/dist/out /usr/share/nginx/html

