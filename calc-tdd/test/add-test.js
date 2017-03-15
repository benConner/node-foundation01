const {assert : {isNumber, equal}} = require('chai');
const add = require('../lib/add');

describe('add',()=>{
    it('should return a number', ()=>{
        isNumber(add());
    })
    it('should return 5',()=>{
        equal(add(4, 1),5)
    })
})
