// Initializes the `UploadImage` service on path `/upload-image`
const createService = require('feathers-mongoose');
const createModel = require('../../models/upload-image.model');
const hooks = require('./upload-image.hooks');
const filters = require('./upload-image.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'upload-image',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/upload-image', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('upload-image');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
