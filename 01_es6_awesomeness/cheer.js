#!/usr/bin/env node

// const fisrtName = ["B","E","N"],
//       lastName = ["C","O","N","N","E","R"],
//       name = [...fisrtName, ...lastName],
//       person = {
//           firstName: 'JOHN',
//           lasName:'DOE'
//       },
//       {firstName, lasName } = person;
//
//
// console.log("name", name);
// const spell = ()=>{
//     let fullName;
//     for ([index, variable] of name) {
//         if(index === "J" || index === "D"){
//             console.log("Give me a", index,"!");
//             fullName = index += index;
//         }else {
//             console.log("Give me an", index,"!");
//         }
//     }
//     console.log("What does that spell?");
//     console.log(firstName, lasName'!');
// }
// spell()

// Cheer
const first = 'Ben'; //const
const second = 'Conner'; //const

// object literal shorthand
const myName = { first, second } //const

const nodeCheer = ({first, second}) => { // destructuring assignment
  let name = `${first} ${second}`.toUpperCase(); // string template literals, let
  [...first, ...second].forEach( (letter) => { // spread operator and fat arrow function
    let conj = 'aeioufhlmnrsx'.includes(letter.toLowerCase()) ? 'an' : 'a' // `includes()`. Surprise! It's ES6
    console.log(`Give me ${conj} ${letter.toUpperCase()}!`); // string template literals again
  });
  console.log(`What's that spell?\n${name}!`);
};

nodeCheer(myName);
