# Estructura Básica de un proyecto con NodeJS utilizando Express - PARTE 4

Este repositorio utiliza la estructura de la parte 4 y le agrega envio de mails con nodemailer.

## Archivo .env en la raiz del proyecto
Crear un archivo llamado .env con los siguientes datos:

    PORT = 8000
    ENVIRONMENT = development
    DB_NAME = mi_bd
    DB_USERNAME = postgres
    DB_PASSWORD = password
    MAIL_USER = tu_email
    MAIL_PASS = tu_password_creada_en_gmail
    

## Para ejecutar el proyecto
    
    npm install
    npm run db:create
    npm run db:seed
    npm start

## Dependencias utilizadas en el proyecto (extras a la PARTE 4)
- [nodemailer](https://nodemailer.com/about/)

## Postman
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/21047550-a20ad7f8-4968-4450-b255-342e4e6f9f9b?action=collection%2Ffork&collection-url=entityId%3D21047550-a20ad7f8-4968-4450-b255-342e4e6f9f9b%26entityType%3Dcollection%26workspaceId%3D1f4f77c5-eb75-4ee8-99d0-fbd51cc092df#?env%5BLOCALHOST%20BASE%5D=W3sia2V5IjoiVVJMIiwidmFsdWUiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAiLCJlbmFibGVkIjp0cnVlfV0=)

Documentación: https://documenter.getpostman.com/view/21047550/VUjTj2q5

---

## Más información

En este caso, agregamos envío de mail cada vez que se crea un nuevo usuario en la plataforma.

