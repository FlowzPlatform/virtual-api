module.exports = function () {
  return function (hook) {

    let upload = hook.app.service('upload-history').Model;

      new Promise(function(resolve, reject){
        let data = {
          state: JSON.stringify(hook.data)
        };

        upload.create(data);
        
        // const imageServer = "http://172.16.230.249:6789/check/"+hook.result.id+"?compose=1&sig=KwROfoP_7DjY&height=500&width=400";
        const imageServer = "http://172.16.230.249:6789/users/"+hook.result.id;
        const userUploadedImageUrl = "http://172.16.230.249:6789/users/"+hook.result.id;

        hook.result.imageurl = imageServer;
        
        let path = '/home/software/github/openresty-lua/html/user-uploaded-images/'+hook.result.id

        const fs = require('fs');
        fs.chmod(path, 0777, function(err){
         if(err) throw err;
        });


        // hook.result.userUploadedImageUrl = userUploadedImageUrl;
        return resolve(hook);
      })
      // .then(data => {
         
      //   new Promise(function(resolve, reject){
      //     let postData = hook.app.service('post-data').Model;
      //     let postJson = {
      //       sequence:"",
      //       request:"",
      //       session:"",
      //       companyId:""
      //     }

      //     postData.create(postJson);
      //     return resolve(hook);

      //   });
      // });
  };
};
