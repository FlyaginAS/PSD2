let db = require('db');
let User = require('./user');
function run() {
    let vasya = new User('Vasya');
    let petya = new User('Petya');
    vasya.hello(petya);

    console.log(db.getPhrase('Run successful'));
}
if(module.parent){
    exports.run = run;
} else {
    run();
}

