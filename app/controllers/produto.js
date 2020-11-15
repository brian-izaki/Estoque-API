module.exports = function(app) {
    /// cria a variável que vai conter as funções da controller
    var controller = {};
    // cria variável que irá acessar a model
    var contato = app.models.Produto;

    // cria a função de cadastrar produto
    controller.salvarProduto = function(req, res) {
        contato.create(req.body).then(
            function(produto) {
                res.status(201).json(produto);
            },
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    // função que retorna os produtos cadastrados
    controller.listaProduto = function(req, res) {
        // executa um find para retornar os produtos
        produto.find().populate('dbref').exec().then(
            // em caso de sucesso
            function(produto) {
                res.status(200).json(produto);
            },
            // em caso de erro
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }


    // atualiza produtos já cadastrados
    controller.alteraProduto = function(req, res) {
        var _id = req.body._id;
        produto.findByIdAndUpdate(_id, req.body).exec().then(
            // em caso de sucesso
            function(produto) {
                res.status(200).json(produto);
            },
            // em caso de erro
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }


    // remove produtos cadastrados
    controller.removeProduto = function(req, res) {
        var _id = req.params.id;
        contato.remove({ "_id": _id }).exec().then(
            // em caso de sucesso
            function(produto) {
                res.status(204).end();
            },
            // em caso de erro
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }



    controller.obtemProduto = function(req, res) {
        var _id = req.params.id;
        contato.findById(_id).populate('dbref').exec().then(
            // sucesso
            function(produto) {
                if (!produto) {
                    res.status(404).end();
                } else {
                    res.status(200).json(produto);
                }
            },
            // erro
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }


    return controller;
}