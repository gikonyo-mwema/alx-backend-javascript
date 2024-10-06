import { strict as assert } from 'assert'; // Importing assert from the built-in module
import { calculateNumber } from './0-calcul.js'; // Use named import

describe('calculateNumber', function () {
    describe('Two Integers', function () {
        it('should return 4 when adding 1 and 3', function () {
            assert.strictEqual(calculateNumber(1, 3), 4);
        });
    });

    describe('One Round', function () {
        it('should return 5 when adding 1 and 3.7', function () {
            assert.strictEqual(calculateNumber(1, 3.7), 5);
        });

        it('should return 5 when adding 3.7 and 1', function () {
            assert.strictEqual(calculateNumber(3.7, 1), 5);
        });

        it('should return 4 when adding 1 and 3.3', function () {
            assert.strictEqual(calculateNumber(1, 3.3), 4);
        });

        it('should return 4 when adding 3.3 and 1', function () {
            assert.strictEqual(calculateNumber(3.3, 1), 4);
        });
    });

    describe('Two Rounds', function () {
        it('should return 5 when adding 1.2 and 3.7', function () {
            assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        });

        it('should return 6 when adding 1.5 and 3.7', function () {
            assert.strictEqual(calculateNumber(1.5, 3.7), 6);
        });

        it('should return 5 when adding 3.7 and 1.2', function () {
            assert.strictEqual(calculateNumber(3.7, 1.2), 5);
        });

        it('should return 3 when adding 1.2 and 2.1', function () {
            assert.strictEqual(calculateNumber(1.2, 2.1), 3);
        });
    });

    describe('Edge Cases', function () {
        it('should return 0 when both numbers are 0', function () {
            assert.strictEqual(calculateNumber(0,0),0);
        });

        it('should return -1 when adding -1.5 and -0.5', function () {
            assert.strictEqual(calculateNumber(-1.5,-0.5),-1);
        });

        it('should return -1 when adding -1 and -0.4', function () {
            assert.strictEqual(calculateNumber(-1,-0.4),-1);
        });
    });
});
