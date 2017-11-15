// A hook that logs service method before, after and error
// const custom_hook;

module.exports = function () {
  return function (hook) {

    let ProductMaster = hook.app.service('virtual-product-master').Model;
    let Product = hook.app.service('virtual-product').Model;

    const promises = [
      new Promise(function(resolve, reject){
        ProductMaster.find({}, function(err, products) {
          var productMap = [];
          products.forEach(function(product) {
            productMap.push(products);
          });
          resolve(productMap);
          // resolve("productMap");
        });
      }),

      new Promise(function(resolve, reject){
        Product.find({}, function(err, products) {
          var productMap2 = [];
          products.forEach(function(product) {
            productMap2.push(products);
          });
          // console.log(productMap2);
          resolve(productMap2);
          // resolve("productMap2");
        });
      })
    ];

    return Promise.all(promises)
      .then(data => {
        console.log(hook.result);
        hook.result.custom = data;

        hook.data = data
        return hook;
      });

    
    // return new Promise(function(resolve, reject){
    //   ProductMaster.findOne({}, function(err, products) {
    //     var productMap = [];
    //     // products.forEach(function(product) {
    //       productMap.push(products);
    //     // });
    //     // res.send(productMap);
    //     // console.log(productMap);
    //     resolve(hook);
    //   });

    //   // Product.findOne({ '_id': '598dbc52ffec7e0d8f0f0cc1' }, function(err, products) {
    //   //   var productMap = [];
    //   //   // products.forEach(function(product) {
    //   //     productMap.push(products);
    //   //   // });
    //   //   // res.send(productMap);
    //   //   // console.log(productMap);
    //   //   resolve(hook);
    //   // });
      
    // });
  };
};
