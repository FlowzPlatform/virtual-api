const assert = require('assert');
const app = require('../../src/app');

describe('\'VirtualProductMaster\' service', () => {
  it('registered the service', () => {
    const service = app.service('virtual-product-master');

    assert.ok(service, 'Registered the service');
  });
});
