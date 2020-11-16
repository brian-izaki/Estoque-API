module.exports = function (app){

  const controller = {};

  const retirada = app.models.Retirada;

  controller.salvarRetirada = (req, res) => {
    retirada
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

  controller.listarRetiradas = (req, res) => {
    retirada.find({}).exec().then(
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