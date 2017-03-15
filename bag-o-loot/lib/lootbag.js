
const sqlite3 = require('sqlite3');
const db = require('lootbag.sqlite')

db.run("CREATE TABLE IF NOT EXISTS lootbag(id INTEGER PRIMARY KEY,name TEXT, toy TEXT, delivered INTEGER)")

module.exports = ()=>{
    return 4;
}
