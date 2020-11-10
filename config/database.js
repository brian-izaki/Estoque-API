var mongoose = require('mongoose');
mongoose.set('debug', true);
module.exports = function (uri) {
    mongoose.Promise = global.Promise;
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    // cria eventos
    // quando estabelecer conexao
    mongoose.connection.on('connected', function () {
       console.log('Mongoose! Conectado em '+uri);
    });
    // quando fizer desconexão
    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose! Desconectado de '+uri);
    });
    // quando a conexão falhar/cair
    mongoose.connection.on('error', function (erro) {
        console.log('Mongoose! Erro na conexão: '+erro);
    });
    // ao tentar encerrar a aplicação
    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log('Mongoose desconectado pelo término da aplicação');
            process.exit(0);
        });
    });

}