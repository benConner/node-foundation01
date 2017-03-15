const {assert : {isNumber, equal}} = require('chai');
const sub = require('../lib/sub');

describe('sub',()=>{
    it('should return a number', ()=>{
        isNumber(sub());
    });
    it('should return 3',()=>{
        equal(sub(4, 1),3)
    });
});
