"""
Composition:
When a object can access another object then that relationship is called aggregation.
Objects can exits independentely in this relationship
"""
#create instance within your class

class Salary:
    def __init__(self,pay):
        self.pay=pay
    def payYear(self):
        return self.pay*12

class Employee:
    def __init__(self,Name,pay):
        self.Name=Name
        self.pay=pay
        self.YearPay=Salary(self.pay)
    def GetPay(self):
        CP=self.YearPay
        print(CP.payYear(),"is your Annual Pay")
def DriverFunction():
    ee=Employee("EmployeeName",12000);
    ee.GetPay()
DriverFunction()

    