// Initializes the `productDetails` service on path `/product-details`
const createService = require('./product-details.class.js');
const hooks = require('./product-details.hooks');
const filters = require('./product-details.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    name: 'product-details',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/product-details', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('product-details');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
