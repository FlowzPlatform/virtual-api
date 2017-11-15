const assert = require('assert');
const app = require('../../src/app');

describe('\'custom-product\' service', () => {
  it('registered the service', () => {
    const service = app.service('custom-product');

    assert.ok(service, 'Registered the service');
  });
});
