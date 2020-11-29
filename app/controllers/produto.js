module.exports = (app) => {
  /// cria a variável que vai conter as funções da controller
  var controller = {};
  // cria variável que irá acessar a model
  var produto = app.models.Produto;

  // cria a função de cadastrar produto
  controller.salvarProduto = (req, res) => {
    produto.create(req.body).then(
      function (produto) {
        res.status(201).json(produto);
      },
      function (erro) {
        console.error(erro);
        res.status(500).json(erro);
      }
    );
  };

  // função que retorna os produtos cadastrados
  controller.listaProduto = (req, res) => {
    // executa um find para retornar os produtos
    produto
      .find()
      .populate("dbref")
      .exec()
      .then(
        // em caso de sucesso
        function (produto) {
          res.status(200).json(produto);
        },
        // em caso de erro
        function (erro) {
          console.error(erro);
          res.status(500).json(erro);
        }
      );
  };

  controller.obtemProduto = (req, res) => {
    var _id = req.params.id;
    produto
      .findById(_id)
      .populate("dbref")
      .exec()
      .then(
        // sucesso
        function (produto) {
          if (!produto) {
            res.status(404).end();
          } else {
            res.status(200).json(produto);
          }
        },
        // erro
        function (erro) {
          console.error(erro);
          res.status(500).json(erro);
        }
      );
  };

  // atualiza produtos já cadastrados
  controller.alteraProduto = async (req, res) => {
    try {
      const { _id, descricao, valor, dbref, ativo } = req.body;

      const temProduto = await produto.findById(_id).exec();

      if (!temProduto) {
        return res.status(404).send({ message: "produto não encontrado" });
      }

      const documentoAlterado = {
        descricao,
        valor,
        dbref,
        ativo,
        updated: Date.now(),
      };

      const alterado = await produto.updateOne({ _id }, documentoAlterado);
      res.status(200).json(alterado);
    } catch (error) {
      console.log(error);
    }
  };

  // remove produtos cadastrados
  controller.removeProduto = (req, res) => {
    var _id = req.params.id;
    produto
      .remove({ _id: _id })
      .exec()
      .then(
        // em caso de sucesso
        function (produto) {
          res.status(204).end();
        },
        // em caso de erro
        function (erro) {
          console.error(erro);
          res.status(500).json(erro);
        }
      );
  };

  return controller;
};
