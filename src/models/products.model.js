// Products-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const products = new Schema({
    sku: { type: String, required: true },
    supplierMasterId: { type: String, required: true },
    category: { type: Array, required: true },
    productType: { type: String, required: true },
    updatedBy: { type: String, required: true },
    personalized: { type: Number, required: true },
    configurationOptions: { type: {}, required: true },
    images: { type: Array, required: true },
    imprint_color: { type: Array, required: true },
    productDetail: { type: Array, required: true },
    imprintDetail: { type: Array, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  }, { collection: 'Products' });

  return mongooseClient.model('products', products);
};
