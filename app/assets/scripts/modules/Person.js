class Person {
  constructor(name,color){
    this.name = name;
    this.color =color;
  }
 
 greet() {
    console.log("Hello my name is " + this.name + " my color is " + this.color );
  } 
}

// module.exports = Person;
export default Person;
