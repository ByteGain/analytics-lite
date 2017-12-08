'use strict';

var analytics = require('../lib');
var assert = require('proclaim');

describe('analytics', function() {
  it('should expose a .VERSION', function() {
    var pkg = require('../package.json');
    assert.equal(analytics.VERSION, pkg.version);
  });
});
