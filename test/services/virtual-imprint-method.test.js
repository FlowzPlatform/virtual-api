const assert = require('assert');
const app = require('../../src/app');

describe('\'virtualImprintMethod\' service', () => {
  it('registered the service', () => {
    const service = app.service('virtual-imprint-method');

    assert.ok(service, 'Registered the service');
  });
});
