

module.exports = {
  before: {
    all: [ 
      function(hook) {
       
      }
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
      function(hook) {
        let ProductMaster = hook.app.service('virtual-product-master').Model;
        let Product = hook.app.service('virtual-product').Model;
        // console.log(hook.params)
        
        let params = {
          sku: hook.params.query.sku,
          supplierMasterId: hook.params.query.supplierMasterId,
          status: hook.params.query.status,
          personalized: hook.params.query.personalized
        }

        console.log(params);

        const promises = [
          new Promise(function(resolve, reject){
            ProductMaster.find(params, function(err, products) {
              resolve(products[0]);
            });
          }),

          new Promise(function(resolve, reject){
            Product.find({}, function(err, products) {
              resolve(products[0]);
            });
          })
        ];
        hook.result.imageurl = "imageServer";
        return Promise.all(promises)
          .then(data => {
            let res
            if(data[0] && data[1]){
              res = {status:true, data: data[0]._id}
            } else {
              res = {status:false, data: ''}
            }
            hook.result = res
            return hook;
          });


      }
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
