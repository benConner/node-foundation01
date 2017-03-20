'use strict';

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazon.sqlite')

// const dropTables = ()=>{
//     db.run(`DROP TABLE `);
// }

const errhandle = (err)=>{
    if(err){
        console.log("err", err.toString());
    }
}
// dropTables()

db.run("CREATE TABLE IF NOT EXISTS customers(customer_id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, last_name TEXT, address TEXT, city TEXT, state TEXT, postal_code TEXT, phone_number TEXT)")
.run("CREATE TABLE IF NOT EXISTS payment_options(payment_options_id INTEGER PRIMARY KEY, payment_name TEXT, payment_account INTEGER)")

.run("CREATE TABLE IF NOT EXISTS products(product_id INTEGER PRIMARY KEY AUTOINCREMENT, product_name TEXT, payment_price TEXT)")

.run("CREATE TABLE IF NOT EXISTS orders(order_id INTEGER PRIMARY KEY AUTOINCREMENT, customer_id INTEGER, payment_options_id INTEGER, payed INTEGER, FOREIGN KEY(customer_id) REFERENCES customers(customer_id), FOREIGN KEY(payment_options_id) REFERENCES payment_options(payment_options_id))")

.run("CREATE TABLE IF NOT EXISTS order_line_items(order_line_id INTEGER PRIMARY KEY AUTOINCREMENT, order_id INTEGER, product_id INTEGER, FOREIGN KEY(order_id) REFERENCES orders(order_id))");

const popCutomers = ()=>{
    const {customer} = require('./customer.json')
    customer.forEach(each=>{
        db.run(`INSERT INTO customers VALUES(
            ${each.customer_id},
            "${each.first_name}",
            "${each.last_name}",
            "${each.address}",
            "${each.city}",
            "${each.state}",
            "${each.postal_code}",
            "${each.phone_number}"
        )`, errhandle)
    })
}

const popPayment = ()=>{
    const {payment} = require('./payment.json');
    payment.forEach(each=>{
        db.run(`INSERT INTO payment_options VALUES(
            ${each.payment_options_id},
            "${each.payment_name}",
            ${each.payment_account}
        )`, errhandle)
    })
};

const popProducts = ()=>{
    const {products} = require('./products.json');
    products.forEach(each=>{
        db.run(`INSERT INTO products VALUES(
            ${each.product_id},
            "${each.product_name}",
            "${each.payment_price}"
        )`, errhandle)
    })
};

const popOrders = ()=>{
    const {orders} = require('./orders.json');
    orders.forEach(each=>{
        db.run(`INSERT INTO orders VALUES(
            ${each.order_id},
            ${each.customer_id},
            ${each.payment_options_id},
            ${each.payed}
        )`, errhandle)
    })
};

const popOrderLineItem = ()=>{
    const {orderLineItem} = require('./orderLineItem.json');

    orderLineItem.forEach(each=>{
        db.run(`INSERT INTO order_line_items VALUES(
            ${each.order_line_id},
            ${each.order_id},
            ${each.product_id}
        )`, errhandle)
    })
};


popCutomers();
popPayment();
popProducts();
popOrders();
popOrderLineItem();
