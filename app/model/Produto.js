const mongoose = require('mongoose');

module.exports = function () {
  const schema = mongoose.Schema({
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
      ref: 'Categoria',
      required: true
    },
    'ativo': {
      type: Boolean,
      default: true,
    },
  });

  return mongoose.model('Produto', schema);
}