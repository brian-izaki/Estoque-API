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

  controller.listarEstoque = (req, res) => {
    estoque.find({}).exec().then(
      (sucess) => {
        res.status(200).json(sucess)
      },
      (error) => {
        res.status(500).json(error)
      }
    )
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