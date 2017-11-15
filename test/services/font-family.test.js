const assert = require('assert');
const app = require('../../src/app');

describe('\'fontFamily\' service', () => {
  it('registered the service', () => {
    const service = app.service('font-family');

    assert.ok(service, 'Registered the service');
  });
});
