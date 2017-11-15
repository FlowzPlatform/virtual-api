const assert = require('assert');
const app = require('../../src/app');

describe('\'UploadImage\' service', () => {
  it('registered the service', () => {
    const service = app.service('upload-image');

    assert.ok(service, 'Registered the service');
  });
});
