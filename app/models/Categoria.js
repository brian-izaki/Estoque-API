var mongoose = require("mongoose");

module.exports = (app) => {
  var schema = mongoose.Schema({
    descricao: {
      type: String,
      required: [true, 'É necessário uma descrição'],
    },
    created: {
      type: Date,
      default: Date.now(),
    }
  });

  return mongoose.model("Categoria", schema);
};
