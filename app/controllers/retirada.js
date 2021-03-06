module.exports = function (app) {
  const controller = {};

  const retirada = app.models.Retirada;

  controller.salvarRetirada = (req, res) => {
    retirada.create(req.body).then(
      (sucesso) => {
        res.status(201).json(sucesso);
      },
      (error) => {
        res.status(500).json(error);
      }
    );
  };

  controller.listarRetiradas = (req, res) => {
    retirada
      .find({})
      .populate({ 
        path: "dbRefProduto",
        populate: {
          path: "dbref"
        } 
      })
      .exec()
      .then(
        (sucess) => {
          res.status(200).json(sucess);
        },
        (error) => {
          res.status(500).json(error);
        }
      );
  };

  controller.obtemRetirada = (req, res) => {
    const _id = req.params.id;

    retirada
      .findOne({ _id })
      .populate({
        path: "dbRefProduto",
        populate: {
          path: "dbref"
        }
      })
      .exec()
      .then(
        (sucess) => {
          if (!sucess)
            return res.status(404).send({ message: "Item não encontrado!" });

          res.status(200).json(sucess);
        },
        (error) => {
          res.status(500).json(error);
        }
      );
  };

  controller.alteraRetirada = async (req, res) => {
    const { _id, motivo, dbRefProduto, quantidade } = req.body;

    try {
      // pesquisa pelo id
      let temRetirada = await retirada.findById(_id).exec();
      // verifica se o id existe
      if (!temRetirada)
        return res.status(404).json({ message: "retirada não encontrada" });

      // começa a alteração
      let documentUpdate = {
        motivo,
        dbRefProduto,
        quantidade,
        updated: Date.now(),
      };

      let updated = await retirada.updateOne({ _id }, documentUpdate);
      res.status(200).json(updated);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  controller.removeRetirada = (req, res) => {
    const _id = req.params.id;

    retirada
      .findOneAndRemove({ _id })
      .exec()
      .then(
        (sucess) => {
          if (!sucess) {
            // é necessário dar return pois assim termina a execução da função
            return res
              .status(404)
              .send({ message: "Este id não existe na base de dados" });
          }
          // status 204 é pra confirmar a exclusão e que não precisa de mais nenguma informação
          res.status(204).end();
        },
        (error) => {
          res.status(500).json(error);
        }
      );
  };

  return controller;
};
