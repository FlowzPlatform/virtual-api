// Initializes the `VirtualProductMaster` service on path `/virtual-product-master`
const createService = require('feathers-mongoose');
const createModel = require('../../models/virtual-product-master.model');
const hooks = require('./virtual-product-master.hooks');
const filters = require('./virtual-product-master.filters');
const swagger = require('feathers-swagger');


module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'virtual-product-master',
    Model,
    paginate
  };

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
  }
  app.use('/virtual-product-master', events)

  // Initialize our service with any options it requires
  // app.use('/virtual-product-master', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('virtual-product-master');

  // app.service('virtual-product-master').find({
  //   query: {
  //     sku: "MUG550"
  //   }
  // }).then(product => console.log(product));


  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
