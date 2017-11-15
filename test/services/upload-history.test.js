const assert = require('assert');
const app = require('../../src/app');

describe('\'UploadHistory\' service', () => {
  it('registered the service', () => {
    const service = app.service('upload-history');

    assert.ok(service, 'Registered the service');
  });
});
