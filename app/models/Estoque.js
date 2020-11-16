const mongoose = require('mongoose');

module.exports = (app) => {
    const schema = mongoose.Schema({
        'dbref': {
            type: mongoose.Schema.ObjectId,
            ref: 'Produto',
            required: true
        },
        'qtdEstoque': {
            type: Number,
            required: true,
            min: [0, 'Valor deve ser sempre positivo']
        },
        'qtdMinEstoque': {
            type: Number,
            required: true,
            min: [1, 'Deve conter 1 ou mais produtos em estoque']
            
        },
        'created': {
            type: Date,
            default: Date.now(),
        }
    });
    return mongoose.model('Estoque', schema);
}