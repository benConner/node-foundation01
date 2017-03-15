const {assert : {isNumber, strictEqual}} = require('chai');
const div = require('../lib/div');

describe('div',()=>{
    it('should return a number', ()=>{
        isNumber(div());
    });
    it('should return 4',()=>{
        strictEqual(div(4, 1),4)
    });
});
