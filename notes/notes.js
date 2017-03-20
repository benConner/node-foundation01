function func1() {
    if (true) {
        let tmp = 123;
    }
    console.log("func1 tmp", tmp);
}
//func1()

// (function func2() {
//     let foo = 5;
//     if (true) {
//         let foo = 10;
//         console.log("foo inside", foo);
//     }
//     console.log("foo", foo);
// }());

// const MAX_CAT_SIZE = {"weight" : 9001};
// MAX_CAT_SIZE.weight = 9002;
//
// console.log("MAX_CAT_SIZE", MAX_CAT_SIZE);

// var reflect = function (value) {
//     return value;
// }
//
// const reflect = value => value;
// var num = [1,2,3,4];

// var timesTwo = num.map(function(number){
//     return number * 2;
// })

// let timesTwo = num.map( number => number*2)
// console.log("timesTwo", timesTwo);
//
// const wow = "hey",
//       es6 = "hello",
//       myNum = ()=> console.log('howdy')

// const myObj = {
//     wow : wow,
//     es6 : es6,
//     myNum : myNum
// }

// const newObj = {wow, es6, myNum}
//
// console.log("newObj", newObj);
//
//
// const dog = {
//     name: "Murph",
//     breed: "dog",
//     speak: ()=> "woof"
// }

//const myDog = dog.name;

// const {name: myName, speak: speaks} = dog;
// console.log("my dog's name", myName, "my dog speaks", speaks());

// let x = [1,2,3,4,5]
// let [,, ...theOthers] = x;
//
// console.log("theOthers", theOthers);
//
// let countries = ['Moldova', 'Ukranie'];
// let otherCountries = ['USA', 'Japan'];
//
// let meldedCountries =[...countries, ...otherCountries]
// console.log("meldedCountries", meldedCountries);

var arr = [1,2,3]

for (let elem of arry){
    console.log("elem", elem);
}
