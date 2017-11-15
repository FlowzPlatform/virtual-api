// Initializes the `UploadHistory` service on path `/upload-history`
const createService = require('feathers-mongoose');
const createModel = require('../../models/upload-history.model');
const hooks = require('./upload-history.hooks');
const filters = require('./upload-history.filters');


module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'upload-history',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/upload-history', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('upload-history');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
