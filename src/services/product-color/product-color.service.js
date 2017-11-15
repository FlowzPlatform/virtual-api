// Initializes the `ProductColor` service on path `/product-color`
const createService = require('feathers-mongoose');
const createModel = require('../../models/product-color.model');
const hooks = require('./product-color.hooks');
const filters = require('./product-color.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'product-color',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/product-color', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('product-color');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
