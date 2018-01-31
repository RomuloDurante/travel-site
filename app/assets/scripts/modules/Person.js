function Person(name, color) {
  this.name = name,
  this.color =color,
  this.greet = function(){
    console.log("Hello my name is " + this.name + " my color is " + this.color );
  } 
}

module.exports = Person;
