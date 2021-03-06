var BasicCache = require('../models/basicCache'),
	assert = require('assert'),
	cache;

describe ('Basic Cache (non-amd) ', function() {
	beforeEach(function() {
		cache = new BasicCache();
	});

	it('should set a value', function() {
		cache.set('dog', 'yorkie');
		assert.equal(cache.storage.dog, 'yorkie');
		assert.notEqual(cache.storage.dog, 'poodle');
	});

	it('should unset a value', function() {
		cache.set('dog', 'yorkie');
		assert.equal(cache.storage.dog, 'yorkie');
		cache.unset('dog');
		assert.equal(cache.storage.dog, undefined);
	});

	it('should be chainable', function() {
		cache.set('dog', 'yorkie').set('soda', 'pepsi');
		assert.equal(cache.storage.dog, 'yorkie');
		assert.equal(cache.storage.soda, 'pepsi');
	});
});