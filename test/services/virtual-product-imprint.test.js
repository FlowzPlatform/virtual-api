const assert = require('assert');
const app = require('../../src/app');

describe('\'virtualProductImprint\' service', () => {
  it('registered the service', () => {
    const service = app.service('virtual-product-imprint');

    assert.ok(service, 'Registered the service');
  });
});
