const mongoose = require('mongoose');

const schema = mongoose.Schema({
  "motivo": {
    type: String,
    required: true,
  },
  "dbRefProduto": {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Produto',
    required: true
  },
  "quantidade": {
    type: Number,
    required: true,
    min: [0, 'Não é possível quantidade negativa']
  },
  "created": {
    type: Date,
    default: Date.now()
  }, 
  "updated": {
    type: Date,
    default: Date.now()
  }
});
 
module.exports = app => mongoose.model('Retirada', schema);