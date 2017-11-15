
const search = require('feathers-mongodb-fuzzy-search')

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [ 
      async function(hook) {

        // let params = {
        //   productId: hook.params.query.productId,
        //   query: {
        //     cultureSlugs: { $search: hook.params.query.locale },
        //   }
        // }

        let productMasterParams = { _id: hook.params.query._id, status: true }
        let productParams = { virtualProductMasterId: hook.params.query._id, cultureSlug: 'en_us' }
        let productImprintParams = { virtualProductMasterId: hook.params.query._id, status: true}
        let productImagesParams = { virtualProductMasterId: hook.params.query._id}

        // let params = { query: { cultureSlugs: { $search: hook.params.query.locale } }, productId: hook.params.query.productId }
        // params = { productId: hook.params.query.productId }
        // params = { query: { $search: hook.params.query.locale } , productId: hook.params.query.productId }

        
        let ProductMaster = hook.app.service('virtual-product-master').Model;
        let Product = hook.app.service('virtual-product').Model;
        let ProductImprint = hook.app.service('virtual-product-imprint').Model;
        let ProductImages = hook.app.service('virtual-product-images').Model;

        let productMasterData = await ProductMaster.findOne(productMasterParams);
        let productData = await Product.findOne(productParams);
        let productImprintData = await ProductImprint.find(productImprintParams);
        let productImagesData = await ProductImages.findOne(productImagesParams);

        // console.log(productMasterData)
        // console.log(productData)
        
        // console.log(productImprintData)
        // console.log(productImprintParams)
        
        let response = {
          productMaster: productMasterData,
          product: productData,
          productImprint: productImprintData,
          productImages: productImagesData
        }
      
        hook.result = response

        return hook

      }
    ],
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
