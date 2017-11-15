// Initializes the `productExist` service on path `/product-exist`
const createService = require('./product-exist.class.js');
const hooks = require('./product-exist.hooks');
const filters = require('./product-exist.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    name: 'product-exist',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/product-exist', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('product-exist');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
