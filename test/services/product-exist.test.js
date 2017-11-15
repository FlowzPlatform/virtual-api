const assert = require('assert');
const app = require('../../src/app');

describe('\'productExist\' service', () => {
  it('registered the service', () => {
    const service = app.service('product-exist');

    assert.ok(service, 'Registered the service');
  });
});
