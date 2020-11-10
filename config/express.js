// importa biblioteca express-load
var load = require('express-load');
// importa biblioteca body-parser
var bodyParser = require('body-parser');
// importa biblioteca cors
var cors = require('cors');
//  importa biblioteca express
var express = require('express');
// padrão de projeto factory
module.exports = function() {
    // instancia a biblioteca express no projeto 
    var app = express();
    // define a constante "port" com a porta escolhida
    app.set('port', 3007);
    // define o uso do body-parser com URLENCODED
    app.use(bodyParser.urlencoded({
       extended: true
    }));
    // adiciona JON ao body parser
    app.use(bodyParser.json());
    // adiciona method-override
    app.use(require('method-override')());
	//enables cors
	app.use(cors({
	  'allowedHeaders': ['sessionId', 'Content-Type'],
	  'exposedHeaders': ['sessionId'],
	  'origin': '*',
	  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
	  'preflightContinue': false
	}));
	// configuração do express-load	
    load('models',{
        cwd: 'app'
    }).then('controllers').then('routes').into(app);
    return app;
};