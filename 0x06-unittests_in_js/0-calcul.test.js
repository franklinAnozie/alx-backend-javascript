const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
    it('should return 2', function () {
        assert.strictEqual(calculateNumber(1.1, 1.1), 2);
    });
    it('should return 3', function () {
        assert.strictEqual(calculateNumber(1.3, 2.4), 3);
    });
    it('should return 4', function () {
        assert.strictEqual(calculateNumber(1.5, 1.5), 4);
    });
    it('should return 2', function () {
        assert.strictEqual(calculateNumber(1.4, 0.9), 2);
    });
    it('should return 5', function () {
        assert.strictEqual(calculateNumber(1.6, 2.5), 5);
    });
    it('should return 4', function () {
        assert.strictEqual(calculateNumber(1.0, 3.0), 4);
    });
    it('should return 4', function () {
        assert.strictEqual(calculateNumber(1.99, 1.99), 4);
    });
    it('should return 0', function () {
        assert.strictEqual(calculateNumber(0, 0), 0);
    });
    it('should return 1', function () {
        assert.strictEqual(calculateNumber(0.4, 0.5), 1);
    });
})