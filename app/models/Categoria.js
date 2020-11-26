var mongoose = require('mongoose');

module.exports = (app) => {
    var schema = mongoose.Schema({
        'descricao': {
            type: String,
            required: true,
          },
          'valor': {
            type: Number,
            required: true,
            min: [0, 'Valor deve ser sempre positivo']
          },
          'created': {
            type: Date,
            default: Date.now(),
        },
        'dbref': {
            type: mongoose.Schema.ObjectId,
            ref: 'Produto',
            required: true
        },
    });
    return mongoose.model('Categoria', schema);
}