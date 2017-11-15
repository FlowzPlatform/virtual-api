// Initializes the `virtual-product` service on path `/virtual-product`
const createService = require('feathers-mongoose');
const createModel = require('../../models/virtual-product.model');
const hooks = require('./virtual-product.hooks');
const filters = require('./virtual-product.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'virtual-product',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/virtual-product', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('virtual-product');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
