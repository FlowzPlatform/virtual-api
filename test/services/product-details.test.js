const assert = require('assert');
const app = require('../../src/app');

describe('\'productDetails\' service', () => {
  it('registered the service', () => {
    const service = app.service('product-details');

    assert.ok(service, 'Registered the service');
  });
});
