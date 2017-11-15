const custom_hook = require('../../hooks/custom_hook');
const search = require('feathers-mongodb-fuzzy-search')


module.exports = {
  before: {
    all: [
      search(), // full text search on text indexes
      search({  // regex search on given fields
        fields: ['cultureSlugs']
      })
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [
      // function(hook) {
      //   console.log(hook.params.query)

      //   let Product = hook.app.service('virtual-product').Model;

      //   new Promise(function(resolve, reject){
      //     Product.find({'virtualProductMasterId': hook.result.data[0]._id}, function(err, products) {
      //       var productMap = [];
      //       // console.log(products);

      //       products.forEach(function(product) {
      //         productMap.push(products);
      //       });
      //       resolve(productMap);
      //     });
      //   });

      // }
    ],

    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
