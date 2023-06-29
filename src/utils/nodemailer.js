const nodemailer = require('nodemailer');
const globalConstants = require('../const/globalConstants')

async function enviarMail(destino, asunto, texto) {
    // Configurar el transporte
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: globalConstants.MAIL_USER,
            pass: globalConstants.MAIL_PASS
        }
    });

    try {
        // Enviar el correo electrónico
        let info = await transporter.sendMail({
            from: globalConstants.MAIL_USER,
            to: destino,
            subject: asunto,
            text: texto
        });

        console.log('Correo electrónico enviado:', info.messageId);
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
    }
}

module.exports = { enviarMail }

