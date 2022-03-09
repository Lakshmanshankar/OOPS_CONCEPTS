class Shapes {
  howManySides() {
    //not a constructor
    this.sides = null;
  }
}

class Triangle extends Shapes {
  howManySides() {
    this.sides = " Triangle have Three sides";
    console.log(this.sides);
  }
}

class Square extends Shapes {
  howManySides() {
    this.sides = " Square have four sides";
    console.log(this.sides);
  }
}

function mainCallBack() {
  var Tri = new Triangle();
  Tri.howManySides();
  Sqr = new Square();
  Sqr.howManySides();

  if (Tri instanceof Shapes && Sqr instanceof Shapes) {
    console.log("true");
  } else {
    console.log("no");
  }
}
mainCallBack();
