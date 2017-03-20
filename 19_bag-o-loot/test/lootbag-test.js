const {assert : {isNumber}} = require('chai'),
      lootbag = require('../lib/lootbag');



describe('lootbag',()=>{
    it('should return a function',()=>{
        isNumber(lootbag())
    })
})
