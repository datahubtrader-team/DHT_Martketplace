module.exports = (app) => {
    const dataproviders = require('../controllers/data-providers.controller.js');

    // Data providers broadcasting their data to the market place
    app.post('/marketplace/dataprovider', dataproviders.create);

    // Retrieve all DataProviders on the market place
    app.get('/marketplace/dataproviders', dataproviders.findAll);

    // Retrieve a single DataProvider with dataproviderId
    app.get('/marketplace/dataproviders/:dataproviderId', dataproviders.findOne);

    // // Update a DataProvider with dataproviderId
    // app.put('/marketplace/:dataproviderId', dataproviders.update);

    // // Delete a DataProvider with dataproviderId
    // app.delete('/marketplace/:dataproviderId', dataproviders.delete);
}