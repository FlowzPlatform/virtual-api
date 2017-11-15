// Initializes the `fontFamily` service on path `/font-family`
const createService = require('feathers-mongoose');
const createModel = require('../../models/font-family.model');
const hooks = require('./font-family.hooks');
const filters = require('./font-family.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'font-family',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/font-family', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('font-family');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
