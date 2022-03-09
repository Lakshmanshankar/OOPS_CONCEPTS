class Salary {
  constructor(Pay) {
    this.Pay = Pay;
  }
  PayYear() {
    return this.Pay * 12;
  }
}
class Employee {
  constructor(name, pay) {
    this.name = name;
    this.pay = pay;
    this.YearPay = new Salary(this.pay);
  }
  GetYear() {
    console.log(this.YearPay.PayYear() + " is your annual salary");
  }
}

function DriverCode() {
  var ee = new Employee("EmployeeName", 12000);
  ee.GetYear();
}
DriverCode();
