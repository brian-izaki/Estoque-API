const mongoose = require("mongoose");

module.exports = (app) => {
  const schema = mongoose.Schema({
    descricao: {
      type: String,
      required: [true, "É obrigatória a descrição do produto "],
    },
    valor: {
      type: Number,
      required: true,
      min: [0, "Valor deve ser sempre positivo"],
    },
    dbref: {
      type: mongoose.Schema.ObjectId,
      ref: "Categoria",
      required: [true, "É obrigatório o id de referência da Categoria"],
    },
    ativo: {
      type: Boolean,
      default: true,
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

  return mongoose.model("Produto", schema);
};
