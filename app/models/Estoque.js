const mongoose = require('mongoose');

module.exports = (app) => {
    const schema = mongoose.Schema({
        dbref: {
            type: mongoose.Schema.ObjectId,
            ref: 'Produto',
            required: [true, "É obrigatório o id do Produto"]
        },
        qtdEstoque: {
            type: Number,
            required: [true, "É obrigatório informar a quantidade de produto em estoque"],
            min: [0, 'Valor deve ser sempre positivo']
        },
        qtdMinEstoque: {
            type: Number,
            required:  [true, "É obrigatório informar a quantidade minima de produto no estoque"],
            min: [1, 'Deve conter 1 ou mais produtos em estoque']   
        },
        created: {
            type: Date,
            default: Date.now(),
        },
        updated: {
            type: Date,
            default: Date.now(),
        }
    });
    return mongoose.model('Estoque', schema);
}