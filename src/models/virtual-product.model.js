// virtual-product-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const virtualProduct = new Schema({
  	virtualProductMasterId: { type: String, required: true },
  	title: { type: String, required: true },
  	description: { type: String, required: true },
    mainProductKey: { type: String, required: true },
    cultureSlug: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  }, { collection: 'VirtualProduct' });

  return mongooseClient.model('virtualProduct', virtualProduct);
};
