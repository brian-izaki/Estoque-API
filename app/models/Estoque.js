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
        },
        'qtdMinEstoque': {
            type: Number,
            required: true
        },
        'created': {
            type: Date,
            default: Date.now(),
        }
    });
    return mongoose.model('Estoque', schema);
}