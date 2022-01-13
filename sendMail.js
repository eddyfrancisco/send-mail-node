const customExpress = require('./config/customExpress');

const app = customExpress();

app.listen(3001, () => console.log('Servidor de envio de e-mails rodando na porta 3001!'));

;
