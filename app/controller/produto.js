const produto = require('../model/Produto');

module.exports = {

  // async listarProdutos (req, res) {
  //   try {
  //     const lista = await produto.find().exec();
  //     res.status(200).json(lista);
      
  //   } catch (error) {
  //     res.status(500).json(error);
  //   }
  // },

  async salvarProduto (req, res) {
    try {
      const cadastro = await produto.create(req.body)
      res.status(201).json(cadastro);
    } catch (error) {
      res.status(500).json(error);
    }
  } 
}