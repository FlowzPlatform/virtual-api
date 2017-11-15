const assert = require('assert');
const app = require('../../src/app');

describe('\'virtual-product\' service', () => {
  it('registered the service', () => {
    const service = app.service('virtual-product');

    assert.ok(service, 'Registered the service');
  });
});
