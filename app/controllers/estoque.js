module.exports = function (app){

    const controller = {};
  
    const estoque = app.models.Estoque;
  
    controller.salvarEstoque = (req, res) => {
      estoque
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
    return controller;
  }