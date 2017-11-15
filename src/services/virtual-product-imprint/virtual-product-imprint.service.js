// Initializes the `virtualProductImprint` service on path `/virtual-product-imprint`
const createService = require('feathers-mongoose');
const createModel = require('../../models/virtual-product-imprint.model');
const hooks = require('./virtual-product-imprint.hooks');
const filters = require('./virtual-product-imprint.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'virtual-product-imprint',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/virtual-product-imprint', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('virtual-product-imprint');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
