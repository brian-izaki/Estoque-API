module.exports = (app) => {
    var controller = app.controllers.estoque;
    app.post('/estoque', controller.salvarEstoque);
}