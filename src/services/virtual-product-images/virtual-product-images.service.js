// Initializes the `virtualProductImages` service on path `/virtual-product-images`
const createService = require('feathers-mongoose');
const createModel = require('../../models/virtual-product-images.model');
const hooks = require('./virtual-product-images.hooks');
const filters = require('./virtual-product-images.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'virtual-product-images',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/virtual-product-images', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('virtual-product-images');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
