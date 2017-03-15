'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon.sqlite')

// const dropTables = ()=>{
//     db.run(`DROP TABLE `);
// }

// dropTables()

db.run("CREATE TABLE IF NOT EXISTS customers(customer_id INT PRIMARY KEY, first_name TEXT, last_name TEXT, address TEXT, city TEXT, state TEXT, postal_code TEXT, phone_number TEXT)")
.run("CREATE TABLE IF NOT EXISTS payment_options(payment_options_id INT PRIMARY KEY, payment_name TEXT, payment_account INT)")
.run("CREATE TABLE IF NOT EXISTS products(product_id INT PRIMARY KEY, product_name TEXT, payment_price INT)")
.run("CREATE TABLE IF NOT EXISTS orders(order_id INT PRIMARY KEY, customer_id INT, payment_options_id INT, payed INT, FOREIGN KEY(customer_id) REFERENCES customers(customer_id), FOREIGN KEY(payment_options_id) REFERENCES payment_options(payment_options_id))")
.run("CREATE TABLE IF NOT EXISTS order_line_items(order_line_id INT PRIMARY KEY, order_id INT, product_id INT, FOREIGN KEY(order_id) REFERENCES orders(order_id))");

const popCutomers = ()=>{
    const {customer} = require('./customer.json')
    customer.forEach(each=>{
        console.log("in popCutomers", each );
        db.run(`INSERT INTO customers VALUES(
            ${each.customer_id},
            "${each.first_name}",
            "${each.last_name}",
            "${each.address}",
            "${each.city}",
            "${each.state}",
            "${each.postal_code}",
            "${each.phone_number}"
        )`)
    })
}

const popPayment = ()=>{
    const {payment} = require('./payment.json');
    payment.forEach(each=>{
        console.log("in popPayment", each );
        db.run(`INSERT INTO payment_options VALUES(
            ${each.payment_options_id},
            "${each.payment_name}",
            ${each.payment_account}
        )`)
    })
};

const popProducts = ()=>{
    const {products} = require('./products.json');
    products.forEach(each=>{
        console.log("in popProducts", each );
        db.run(`INSERT INTO payment_options VALUES(
            ${each.product_id},
            "${each.product_name}",
            ${each.payment_price}
        )`)
    })
};

popCutomers();
popPayment();
popProducts();
