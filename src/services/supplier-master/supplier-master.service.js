// Initializes the `supplierMaster` service on path `/supplier-master`
const createService = require('feathers-mongoose');
const createModel = require('../../models/supplier-master.model');
const hooks = require('./supplier-master.hooks');
const filters = require('./supplier-master.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'supplier-master',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/supplier-master', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('supplier-master');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
