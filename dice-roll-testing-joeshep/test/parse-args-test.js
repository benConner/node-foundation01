'use strict';

const { assert:{deepEqual, isObject} } = require('chai')
const parseArgs = require('../lib/parse-args')
describe('parse-args', ()=>{
    it('should return an object', ()=>{
        isObject(parseArgs())
    })
    it('should return to properties : count and sides', ()=>{
        deepEqual({count: '', sides: ''}, parseArgs())
    })

})
