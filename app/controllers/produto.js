module.exports = function(app){
  const controller = {};

  const produto = app.models.Produto;

  controller.salvarProduto = (req, res) => {
    produto.create(req.body).then((sucess) => {
      res.status(201).json(sucess)
    }, (error) => {
      res.status(500).json(error);
    })
  }

  return controller;
}