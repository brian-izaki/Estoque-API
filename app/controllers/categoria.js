module.exports = function (app){

    const controller = {};

    const categoria = app.models.Categoria;

    controller.salvarCategoria = (req, res) => {
        categoria
          .create(req.body)
          .then(
            (sucesso)=> {
              res.status(201).json(sucesso);
            }, 
            (error)=>{
              res.status(500).json(error);
            }
        )
      }
      
      controller.listaCategoria = function (req, res) {
        estoque.find().exec().then(
          // em caso de sucesso
          function (categoria) {
            res.status(200).json(categoria);
          },
          // em caso de erro
          function (erro) {
            console.error(erro);
            res.status(500).json(erro);
          }
        );
      }

      controller.alteraCategoria = (req, res) => {
        var _id = req.body._id;
        categoria.findByIdAndUpdate(_id, req.body).exec().then(
          (categoria) => {
            res.status(200).json(categoria);
          },
          (erro) => {
            console.error(erro);
            res.status(500).json(erro);
          }
        );
      }

      controller.obtemCategoria = function (req, res) {
        var _id = req.params.id;
        categoria.findById(_id).exec().then(
          // sucesso
          function (categoria) {
            if (!categoria) {
              res.status(404).end();
            } else {
              res.status(200).json(categoria);
            }
          },
          // erro
          function (erro) {
            console.error(erro);
            res.status(500).json(erro);
          }
        );
      }
    
      controller.removeCategoria = (req,res) => {
        var _id = req.params.id;
        categoria.findByIdAndRemove(_id, req.params).exec().then(
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