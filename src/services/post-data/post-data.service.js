// Initializes the `PostData` service on path `/post-data`
const createService = require('feathers-mongoose');
const createModel = require('../../models/post-data.model');
const hooks = require('./post-data.hooks');
const filters = require('./post-data.filters');


module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'post-data',
    Model,
    paginate
  };

  // Initialize our service with any options it requires

  
  /*trying to implemenmt swagger*/
  // app.use('/post-data', createService(options));

  const events = createService(options)
  events.docs = {
    //overwrite things here.
    //if we want to add a mongoose style $search hook to find, we can write this:
    find: {
      parameters: [
        {
          description: 'Number of results to return',
          in: 'query',
          name: '$limit',
          type: 'integer'
        },
        {
          description: 'Number of results to skip',
          in: 'query',
          name: '$skip',
          type: 'integer'
        },
        {
          description: 'Property to sort results',
          in: 'query',
          name: '$sort',
          type: 'string'
        },
        {
          description: 'Property to query results',
          in: 'query',
          name: '$search',
          type: 'string'
        }
      ]
    }
    // //if we want to add the mongoose model to the 'definitions' so it is a named model in the swagger ui:
    // definitions: {
    //   event: mongooseToJsonLibraryYouImport(Model) //import your own library, use the 'Model' object in this file.
    //   'event list': { //this library currently configures the return documentation to look for ``${tag} list`
    //        type: 'array',
    //        schema: { $ref: '#/definitions/event' }
    //      }
    // }
  }
  app.use('/post-data', events)

  



  // Get our initialized service so that we can register hooks and filters
  const service = app.service('post-data');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
