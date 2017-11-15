// fontFamily-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const fontFamily = new Schema({
    fontDisplayName: { type: String, required: true },
    fontName: { type: String, required: true },
    fontFile: { type: String, required: true },
    fontAccessType: { type: String, required: true },
    fontUrl: { type: String, required: true },
    forSuppliers: { type: Array,  required: true  },
    status: { type: Boolean, required: true },
    createdBy: { type: String, required: true },
    updatedBy: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  },{ collection: 'FontFamily' });

  return mongooseClient.model('fontFamily', fontFamily);
};
