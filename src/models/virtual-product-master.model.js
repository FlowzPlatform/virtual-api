// VirtualProductMaster-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const virtualProductMaster = new Schema({
    sku: { type: String, required: true },
    supplierMasterId: { type: String, required: true },
    productId: { type: String, required: true },
    category: { type: Array,  required: true },
    personalized: { type: Number, required: true },
    status: { type: Boolean, required: true },
    cultureSlugs: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  }, { collection: 'VirtualProductMaster' });

  return mongooseClient.model('virtualProductMaster', virtualProductMaster);
};
