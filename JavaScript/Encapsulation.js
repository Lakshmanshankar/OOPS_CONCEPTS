class Encapsulation {
  constructor() {
    var PrivateVar;
  }
  setPrName(SrName) {
    this.PrName = SrName;
  }
  getPrName() {
    return this.PrName;
  }
}
function Implementation() {
  var e = new Encapsulation();
  e.setPrName("your name");
  var eVar = e.getPrName();
  console.log(eVar);
  var nVar = e.PrivateVar;
  console.log(nVar); // Original variable is not Accessible outside
}
Implementation();
