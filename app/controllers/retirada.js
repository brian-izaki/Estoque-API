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

  controller.obtemRetirada = (req, res) => {
    const _id = req.params.id;

    retirada.findOne({_id}).exec().then(
      (sucess) => {
        res.status(200).json(sucess)
      }, 
      (error) => {
        res.status(500).json(error)
      }
    )
  }

  controller.alteraRetirada = (req, res) => {
    const _id = req.body._id;
    retirada.findByIdAndUpdate(_id, req.body).exec().then(
      (sucess) => {
        if (!sucess){
          res.status(404).json(sucess)
        } else{
          res.status(200).json(sucess)
        }
      },
      (error) => {
        res.status(500).json(error)
      }
    );
  }

  controller.removeRetirada = (req, res) => {
    const _id = req.params.id;
    retirada.remove({_id}).exec().then(
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