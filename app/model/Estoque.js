var mongoose = require('mongoose');

module.exports = () => {
    var schema = mongoose.Schema({
        qtdEstoque: {
            type: Number,
            required: true,
        },
        qtdMinEstoque: {
            type: Number,
            required: true
        }
    });
    return mongoose.model('Estoque', schema);
}