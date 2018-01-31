var $ = require('jquery');
// var Person = require('./modules/Person');
import Person from './modules/Person';

class Adult extends Person {
  payTaxes(){
    console.log(this.name +' Now Iam pay taxes !');
  }
}

var jonh = new Person("Maria", "Red");
jonh.greet();

var jane = new Adult("jane", "Orange");
jane.greet();
jane.payTaxes();
