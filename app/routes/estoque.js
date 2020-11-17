module.exports = function(app) {
    var controller = app.controllers.estoque;
    app.post('/estoque', controller.salvarEstoque);
    // app.get('/Estoque', controller.listaEstoque);
    // app.get('/Estoque/:id', controller.obtemEstoque);
    app.put('/estoque', controller.alteraEstoque);
    app.delete('/estoque/:id', controller.removeEstoque);
}
