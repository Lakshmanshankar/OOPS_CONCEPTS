class FirstClass {
  constructor() {
    console.log("This is constructor");
  }
  methodOfBaseClass() {
    console.log("BaseClass");
  }
}
class SecondClass extends FirstClass {
  constructor() {
    super(); // use super method to call constructor of base class
    console.log("Derived Constructor");
  }
  methodOfDerivedClass() {
    console.log("Derived Class");
  }
}

function Implementation() {
  var sc = new SecondClass();
  sc.methodOfDerivedClass();
  sc.methodOfBaseClass();
}
Implementation();

//Must call constructor of base class
