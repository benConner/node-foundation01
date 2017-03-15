const {assert : {isNumber, equal}} = require('chai');
const calc = require('../lib/calculater');

describe('calc',()=>{
    it('should return 5',()=>{
        equal(calc(4, '+', 1),5)
    })
    it('should return 3',()=>{
        equal(calc(4, '-', 1),3)
    })
    it('should return 4',()=>{
        equal(calc(4, 'x', 1),4)
    })
    it('should return 4',()=>{
        equal(calc(4, '/', 1),4)
    })
})
