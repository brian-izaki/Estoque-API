module.exports = function (app) {

  const controller = {};

  const estoque = app.models.Estoque;

  controller.salvarEstoque = (req, res) => {
    estoque
      .create(req.body)
      .then(
        (sucesso) => {
          res.status(201).json(sucesso);
        },
        (error) => {
          res.status(500).json(error);
        }
      )
  }

  controller.listaEstoque = function(req, res) {
    estoque.find().exec().then(
        // em caso de sucesso
        function(estoque) {
            res.status(200).json(estoque);
        },
        // em caso de erro
        function(erro) {
            console.error(erro);
            res.status(500).json(erro);
        }
    );
}

  controller.alteraEstoque = (req, res) => {
    var _id = req.body._id;
    estoque.findByIdAndUpdate(_id, req.body).exec().then(
      (estoque) => {
        res.status(200).json(estoque);
      },
      (erro) => {
        console.error(erro);
        res.status(500).json(erro);
      }
    );
  }


  return controller;
}