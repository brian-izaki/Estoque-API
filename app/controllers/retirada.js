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

  controller.alteraRetirada = async (req, res) => {
    const {_id, motivo, dbRefProduto, quantidade} = req.body;

    try {
      // pesquisa pelo id
      let findRetirada = await retirada.findById(_id).exec();
      // verifica se o id existe 
      if (!findRetirada){
        res.status(404).json({"message": "retirada não encontrada"});
        return;
      }

      // começa a alteração
      let documentUpdate = {
        motivo,
        dbRefProduto,
        quantidade,
        updated: Date.now()
      };
      
      let updated = await retirada.updateOne({ _id }, documentUpdate);
      res.status(200).json(updated);
      
    } catch (error) {
      res.status(500).json(error);
    }

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