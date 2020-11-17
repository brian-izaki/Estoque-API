module.exports = function(app) {
    var controller = app.controllers.estoque;
    app.post('/estoque', controller.salvarEstoque);
    // app.get('/Estoque', controller.listaEstoque);
    // app.get('/Estoque/:id', controller.obtemEstoque);
    app.put('/Estoque', controller.alteraEstoque);
    app.delete('/Estoque/:id', controller.removeEstoque);
}
