let db = require('db');
db.connect();
function User(name) {
    this.name = name;
}
User.prototype.hello = function (who) {
    console.log(db.getPhrase("hello") + who.name);
};
console.log('user.js is required');
module.exports = User;
// console.log(module);
