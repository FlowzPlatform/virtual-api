// virtualProductImprint-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const virtualProductImprint = new Schema({
    location: { type: String, required: true },
    imprintParam: { type: String, required: true },
    imprintSettings: { type: {}, required: true },
    virtualProductMasterId: { type: String, required: true },
    locationKey: { type: String, required: true },
    imprintMethod: { type: {}, required: true },
    order: { type: Number, required: true },
    defaultImprintMethod: { type: String, required: true },
    status: { type: Boolean, required: true },
    createdBy: { type: String, required: false },
    updatedBy: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  }, { collection: 'VirtualProductImprint' });

  return mongooseClient.model('virtualProductImprint', virtualProductImprint);
};
