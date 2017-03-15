const {assert : {isNumber, equal}} = require('chai');
const mult = require('../lib/mult');

describe('mult',()=>{
    it('should return a number', ()=>{
        isNumber(mult());
    });
    it('should return 4',()=>{
        equal(mult(4, 1),4)
    });
});
