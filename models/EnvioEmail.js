class EnvioEmail {


    envioEmailDuploFatorAutenticacao(dadosEmail) {

        const { emailDestinatario, codigoAutenticacao} = dadosEmail;

        var nodemailer = require('nodemailer');

        var remetente = nodemailer.createTransport({
            host: 'smtp.office365.com',
            service: 'smtp.office365.com',
            port: 587,
            secure: false,
            auth: {
                user: 'exemplo@office.com',
                pass: 'senhaexemplo'
            }
        });


        var emailASerEnviado = {
            from: 'exemplo@office.com',
            to: emailDestinatario,
            subject: 'Autenticação',
            text: 'Autenticação',
            html: '<!DOCTYPE html>' +
                '<html><head><title>Autenticação</title>' +
                '</head><body><div>' +
                '<p>Prezado(a)</p>' +
               // '<img src="https://empbraatsstorage.blob.core.windows.net/atslogos/aaac32ce-e3e9-4502-a3f4-e051ad0acfcd_4.png" alt="" width="160">' +
                '<p>Segue autenticação:</p>' +
                '<p>Obs: A mesma é válida por 5 minutos:</p>' +
                `<p>Chave: ${codigoAutenticacao}</p>` +
                '<p>Sistemas SBK - Manager</p>' +
                '</div></body></html>'
        };

        remetente.sendMail(emailASerEnviado, function (error) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email enviado com sucesso.');
            }

        });


    }



}

module.exports = new EnvioEmail;


