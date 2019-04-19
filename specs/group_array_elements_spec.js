const assert = require('assert');
const groupArrayElements= require('../utils/group_array_elements.js');

describe('groupArrayElements', function() {


    it('should return 3 arrays of length 4, with no remainder', function(){
        const actual = groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],3);
        assert.deepStrictEqual(actual, [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]);
    });

    it('should return 2 arrays of length 2 and 1 array of length 1 checking a remainder of > 0.5', function(){
        const actual = groupArrayElements([1 , 2, 3, 4, 5], 3);
        assert.deepStrictEqual(actual, [[1, 2], [3, 4], [5]]);
    });

    it('should return 2 arrays of length 3 and 1 array of length 1, checking a remainder of < 0.5', function(){
        const actual = groupArrayElements([1, 2, 3, 4, 5, 6, 7],3) ;
        assert.deepStrictEqual(actual,[[1, 2, 3], [4, 5, 6], [7]]);
    });

     it('should return 1 array of length 5, and 1 array of length 4, checking a remainder = 0.5', function(){
        const actual = groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 2) ;
        assert.deepStrictEqual(actual,[[1, 2, 3, 4, 5], [6, 7, 8, 9]]);
    });

      it('should return 2 arrays of length 1 only, checking newArraySize < numOfArrays', function(){
        const actual = groupArrayElements([1, 2], 5) ;
        assert.deepStrictEqual(actual,[[1], [2]]);
    });

    it('should return 0 arrays, checking a 0 array length splitting into a numOfArrays', function(){
        const actual = groupArrayElements([], 5) ;
        assert.deepStrictEqual(actual,[]);
    });

});
