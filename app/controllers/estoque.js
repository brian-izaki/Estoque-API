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

  controller.listaEstoque = function (req, res) {
    estoque
    .find()
    .populate({
      path: 'dbref',
      populate: {
        path: 'dbref'
      }
    })
    .exec()
    .then(
        // em caso de sucesso
        function (estoque) {
          res.status(200).json(estoque);
        },
        // em caso de erro
        function (erro) {
          console.error(erro);
          res.status(500).json(erro);
        }
      );
  }

  controller.alteraEstoque = async (req, res) => {
    const {_id, dbref, qtdEstoque, qtdMinEstoque} = req.body;

    try {
      // pesquisa pelo id
      let temEstoque = await estoque.findById(_id).exec();
      // verifica se o id existe 
      if (!temEstoque){
        res.status(404).json({"message": "Nem um produto foi encontrado em estoque"});
        return;
      }

      // começa a alteração
      let documentUpdate = {
        dbref,
        qtdEstoque,
        qtdMinEstoque,
        updated: Date.now()
      };
      
      let updated = await estoque.updateOne({ _id }, documentUpdate);
      res.status(200).json(updated);
      
    } catch (error) {
      res.status(500).json(error);
    }

  }

  controller.obtemEstoque = function (req, res) {
    var _id = req.params.id;
    estoque
      .findById(_id)
      .populate({
        path: 'dbref', 
        populate: {
          path: 'dbref'
        }
      })
      .exec()
      .then(
        // sucesso
        function (estoque) {
          if (!estoque) {
            res.status(404).end();
          } else {
            res.status(200).json(estoque);
          }
        },
        // erro
        function (erro) {
          console.error(erro);
          res.status(500).json(erro);
        }
      );
  }

  controller.removeEstoque = (req,res) => {
    var _id = req.params.id;
    estoque.findByIdAndRemove(_id, req.params).exec().then(
      (sucess) => {
        res.status(204).end()
      },
      (error) => {
        res.status(500).json(error)
      }
    );
  }

  return controller;
}