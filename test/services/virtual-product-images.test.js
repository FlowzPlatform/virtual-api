const assert = require('assert');
const app = require('../../src/app');

describe('\'virtualProductImages\' service', () => {
  it('registered the service', () => {
    const service = app.service('virtual-product-images');

    assert.ok(service, 'Registered the service');
  });
});
