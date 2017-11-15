// virtualImprintMethod-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const virtualImprintMethod = new Schema({
    name: { type: String, required: true },
    magnet_id: { type: String, required: true },
    magnet_name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  }, { collection: 'VirtualImprintMethod' });

  return mongooseClient.model('virtualImprintMethod', virtualImprintMethod);
};
