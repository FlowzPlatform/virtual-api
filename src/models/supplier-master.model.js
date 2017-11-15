// supplierMaster-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const supplierMaster = new Schema({
    configurationOptions: { type: {}, required: true },
    createdBy: { type: String, required: true },
    isSyncProductsWithCron: { type: Boolean, required: false },
    referenceId: { type: String, required: false },
    supplierClientSiteUrl: { type: String, required: false },
    supplierCustomCss: { type: String, required: false },
    supplierEmail: { type: String, required: true },
    supplierId: { type: String, required: true },
    supplierLogoOnProductUrl: { type: String, required: false },
    supplierLogoeverythingUrl: { type: String, required: false },
    supplierName: { type: String, required: true },
    supplierType: { type: String, required: true },
    supplierVersion: { type: String, required: true },
    supplierVirtualHtml: { type: String, required: false },
    supportedCultures: { type: String, required: true },
    updatedBy: { type: String, required: true },
    supplierDisclaimer: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  }, { collection: 'SupplierMaster' });

  return mongooseClient.model('supplierMaster', supplierMaster);
};
