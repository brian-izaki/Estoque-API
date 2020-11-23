const mongoose = require("mongoose");

const schema = mongoose.Schema({
  motivo: {
    type: String,
    required: [true, "É obrigatório o motivo da retirada"],
    validate: {
      validator: (value) => {
        return value.length < 51;
      },
      message: "É permitido até 50 caracteres",
    },
  },
  dbRefProduto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Produto",
    required: [true, "É obrigatório o id do Produto"],
  },
  quantidade: {
    type: Number,
    required: [true, "É obrigatório a quantidade da retirada"],
    min: [0, "Não é possível quantidade negativa"],
  },
  created: {
    type: Date,
    default: Date.now(),
  },
  updated: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = (app) => mongoose.model("Retirada", schema);
