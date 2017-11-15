const assert = require('assert');
const app = require('../../src/app');

describe('\'supplierMaster\' service', () => {
  it('registered the service', () => {
    const service = app.service('supplier-master');

    assert.ok(service, 'Registered the service');
  });
});
