'use strict'
const add = require('../lib/add');
const sub = require('../lib/sub');
const  mult= require('../lib/mult');
const div = require('../lib/div');

module.exports = (num1, op, num2)=>{
    if(op === '+'){
        console.log("add", add);
        return add(num1, num2)
    }else if (op === '-') {
        console.log("sub", sub);
        return sub(num1, num2)
    }else if (op === 'x') {
        console.log("mult", mult);
        return mult(num1, num2)
    }else if (op === '/') {
        console.log("div", div);
        return div(num1, num2)
    }
}
