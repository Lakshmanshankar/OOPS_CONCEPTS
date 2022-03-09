// Type One
class NewBaseClass1 {
  NewValue() {
    console.log("i am of base");
  }
}
class Polymorphism2 extends NewBaseClass1 {
  NewValue() {
    console.log("I am value of Derived");
  }
}
var both = [new NewBaseClass1(), new Polymorphism2()];
both.forEach((values) => {
  values.NewValue();
});

// Type two optional

class NewBaseClass {
  NewValue() {
    console.log("i am of base class");
  }
}
class Polymorphism extends NewBaseClass {
  constructor() {
    super();
  }
  NewValue1() {
    console.log("I am of derived");
  }
}
var p = new Polymorphism();

p.NewValue();
p.NewValue1();
