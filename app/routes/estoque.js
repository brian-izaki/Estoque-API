module.exports = function(app) {
    var controller = app.controllers.estoque;
    app.post('/estoque', controller.salvarEstoque);
    app.get('/estoque', controller.listaEstoque);
    app.get('/estoque/:id', controller.obtemEstoque);
    app.put('/estoque', controller.alteraEstoque);
    app.delete('/estoque/:id', controller.removeEstoque);
}
