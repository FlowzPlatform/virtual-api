// ProductColor-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const productColor = new Schema({
    colorId: { type: String, required: true },
    culture: { type: String, required: true },
    colorName: { type: String, required: true },
    referenceColorId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('productColor', productColor);
};
