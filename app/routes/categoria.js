module.exports = function(app) {
    const controller = app.controllers.categoria;
    
    app.post('/categoria', controller.salvarCategoria);
    app.get('/categoria', controller.listaCategoria);
    app.get('/categoria/:id', controller.obtemCategoria);
    app.put('/categoria', controller.alteraCategoria);
    app.delete('/categoria/:id', controller.removeCategoria);
}