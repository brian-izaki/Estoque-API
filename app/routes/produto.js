module.exports = function(app) {
    var controller = app.controllers.produto;
    // post - envia dados para o servidor cadastrar algo
    app.post('/produto', controller.salvarProduto);
    app.get('/produto', controller.listaProduto);
    app.get('/produto/:id', controller.obtemProduto);
    app.put('/produto', controller.alteraProduto);
    app.delete('/produto/:id', controller.removeProduto);
}