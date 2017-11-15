// virtualProductImages-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const virtualProductImages = new Schema({
    virtualProductMasterId: { type: String, required: true },
    virtualImages: { type: {}, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  }, { collection: 'VirtualProductImages' });

  return mongooseClient.model('virtualProductImages', virtualProductImages);
};
