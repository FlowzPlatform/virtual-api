const assert = require('assert');
const app = require('../../src/app');

describe('\'ProductColor\' service', () => {
  it('registered the service', () => {
    const service = app.service('product-color');

    assert.ok(service, 'Registered the service');
  });
});
