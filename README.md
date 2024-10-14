Prueba Técnica - Aplicación Web de Noticias
Este proyecto es una aplicación web que permite a los periodistas almacenar y visualizar artículos de noticias, incluyendo título, descripción, imagen y video. Está desarrollado con React (frontend) y Node.js/Express (backend), usando MongoDB como base de datos.

Tecnologías
Frontend: React, Axios
Backend: Node.js, Express, Mongoose, Swagger
Base de Datos: MongoDB

Instrucciones de Instalación
1. Clonar el Repositorio

2. Instalación de Dependencias
Navega a la carpeta backend y ejecuta: npm install
Navega a la carpeta frontend y ejecuta: npm install

3. Configuración de Variables de Entorno
En la carpeta backend, crea un archivo .env con el siguiente contenido:
PORT=5000
MONGO_URI=mongodb://localhost:27017/prueba_tecnica

4. Ejecutar el Proyecto
En la carpeta backend, inicia el servidor con: node server.js

En la carpeta frontend, inicia la aplicación con: npm run dev

5. Población de Datos
Ejecuta el script para insertar los 10 artículos en la base de datos: node backend/insertArticles.js o node insertArticles.js si ya se encuentra en la carpeta.
