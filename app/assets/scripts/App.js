var $ = require('jquery');
var Person = require('./modules/Person');

var jonh = new Person("Romulo", "Red");
jonh.greet();

var jane = new Person("Jane", "Green");
jane.greet();
