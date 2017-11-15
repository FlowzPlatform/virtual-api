const assert = require('assert');
const app = require('../../src/app');

describe('\'PostData\' service', () => {
  it('registered the service', () => {
    const service = app.service('post-data');

    assert.ok(service, 'Registered the service');
  });
});
