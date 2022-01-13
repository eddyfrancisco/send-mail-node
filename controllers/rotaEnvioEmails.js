const EnvioEmail = require('../models/EnvioEmail');


module.exports = app => {

    app.post('/email/duploFatorAutenticacao', (req, res) => {
        
        const dadosEmail = req.body;

        EnvioEmail.envioEmailDuploFatorAutenticacao(dadosEmail);

        res.send('POST email/duploFatorAutenticacao, com os seguintes parâmetros:  ' + JSON.stringify(dadosEmail));
    });
}