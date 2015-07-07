'use strict';

/* deps: mocha */
var assert = require('assert');
var isValidGlob = require('./');

describe('isValidGlob', function () {
  it('should return true when the pattern is a valid glob pattern:', function () {
    assert.equal(isValidGlob('a'), true);
    assert.equal(isValidGlob('a.js'), true);
    assert.equal(isValidGlob('*.js'), true);
    assert.equal(isValidGlob(['a', 'b']), true);
    assert.equal(isValidGlob(['a/**/*.js', '*.js']), true);

    // neither of these should blow up
    assert.equal(isValidGlob([]), true);
  });

  it('should return false when the pattern is not a valid glob pattern:', function () {
    assert.equal(isValidGlob(), false);
    assert.equal(isValidGlob(''), false);
    assert.equal(isValidGlob({}), false);
    assert.equal(isValidGlob(null), false);
    assert.equal(isValidGlob(undefined), false);
    assert.equal(isValidGlob(new Buffer('foo')), false);
    assert.equal(isValidGlob(['foo', [[]]]), false);
    assert.equal(isValidGlob(['foo', [['bar']]]), false);
    assert.equal(isValidGlob(['foo', {}]), false);
    assert.equal(isValidGlob(['']), false);
  });
});
