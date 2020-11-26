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
    estoque.find().exec().then(
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

  controller.obtemEstoque = async (req, res) => {
    const {_id, dbref, qtdEstoque, qtdMinEstoque} = req.body;

    try {
      let temEstoque = await estoque.findById(_id).exec();

      if(!temEstoque){
        res.status(404).json({"message": "Produto não se encontra em estoque!"});
      }

      let documentUpdate = {
        dbref,
        qtdEstoque,
        qtdMinEstoque,
        updated: Date.now()
      }

      let updated = await estoque.updateOne({_id}, documentUpdate);
      res.status(200).json(updated);
      
    }catch(error){
      res.status(500).json(error);
    }
  }

  controller.removeEstoque = (req,res) => {
    var _id = req.params.id;
    estoque.findByIdAndRemove(_id, req.params).exec().then(
      (sucess) => {
        res.status(200).json(sucess)
      },
      (error) => {
        res.status(500).json(error)
      }
    );
  }

  return controller;
}