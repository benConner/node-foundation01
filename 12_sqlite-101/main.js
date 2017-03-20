'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('example.sqlite')

const dropEmployees = ()=>{
    db.run(`DROP TABLE employees`);
}

// dropEmployees()

db.run("CREATE TABLE IF NOT EXISTS employees(id INT, first TEXT, last TEXT, salary INT, dept TEXT)");


// const populateEmployees = ()=>{
//     const {list} = require('./employees.json');
//     list.forEach(each=>{
//         db.run(`INSERT INTO employees VALUES(
//             ${each.id},
//             "${each.firstName}",
//             "${each.lastName}",
//             ${each.salary},
//             "${each.dept}"
//         )`)
//     })
// };

// populateEmployees()

// db.get(`SELECT * FROM employees`, (err, row)=>{
//     console.log("row", row);
// });

db.all(`SELECT * FROM employees`, (err, rows)=>{
    // rows.forEach(({id, first, last,dept, salary})=>{
    //         console.log("newArray", newArray);
    //     }
    // })
    const result = rows.sort((a,b)=>(a.first > b.first) ? 1 : -1)
    .filter(each => each.salary > 50000)
    .map(each => `${each.first} ${each.last}s salary: ${each.salary}`)
    console.log("result", result);
})

// db.each(`SELECT * FROM employees`, (err, {id, first, last,dept, salary})=>{
//         console.log(id,first,last,salary,dept);
//     })


// j
// m
// p
// s
