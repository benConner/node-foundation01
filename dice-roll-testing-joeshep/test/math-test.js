const { assert: {isFunction, oneOf} } = require('chai');
const {randomInt} = require('../lib/math');

describe('math', ()=>{
    describe('randomInt', ()=>{
        it('should be a function',()=>{
            isFunction(randomInt)
        })
        it('should return a number', ()=>{
            for (let i = 0; i < 100; i++) {
                oneOf(randomInt(1,6),[1,2,3,4,5,6])
            }
        });
        it('should handle args that are not numbers', () => {
            oneOf(randomInt("1","6"),[1,2,3,4,5,6])
        })
        it('should handle a single argument', () => {
            oneOf(randomInt(1,6),[1,2,3,4,5,6])
        })
    });
})
