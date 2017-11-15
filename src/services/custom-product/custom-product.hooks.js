const custom_hook = require('../../hooks/custom_hook');
const upload_image = require('../../hooks/upload_image');
const dauria = require('dauria');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [function(hook) {
              let crypto = require("crypto");

              let id = crypto.randomBytes(20).toString('hex');

              hook.data.id = id+"-user-uploaded-image.png";

              // let path = '/home/software/openresty-lua/html/user-uploaded-images/'+hook.data.id

              // const fs = require('fs');
              // fs.chmod(path, 0777, function(err){
              //  if(err) throw err;
              // });

              if (!hook.data.uri && hook.params.file){
                const file = hook.params.file;
                const uri = dauria.getBase64DataURI(file.buffer, file.mimetype);
                hook.data = {uri: uri};
              }
            }],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [custom_hook()],
    get: [],
    create: [upload_image()],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
