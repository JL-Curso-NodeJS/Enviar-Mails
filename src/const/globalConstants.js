// ESTAN TODAS LAS CONSTANTES DE LA API EN ESTE ARCHIVO

require('dotenv').config() // importar dotenv para obtener las variables de entorno

module.exports = {
    PORT: process.env.PORT || 5000, // obtener el puerto de la aplicación desde el archivo .env o si no existe, usar el puerto 5000
    DB_NAME: process.env.DB_NAME,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,

    MAX_FILE_SIZE: 1024 * 1024 * 20, // peso maximo para los archivos

    // variables de entorno para el envio de correos electronicos
    MAIL_USER: process.env.MAIL_USER,
    MAIL_PASS: process.env.MAIL_PASS,
    
}
