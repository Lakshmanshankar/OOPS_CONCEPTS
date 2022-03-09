class FirstClass:
    def __init__(self):
        print("Constructor of Base Class")
    def methodOfBaseClass(self):
        print("Method of BaseClass")

class SecondClass(FirstClass):
    def __init__(self):
        super().__init__();#Use super method to call constructor of base class
        print("Constructor of Derived Class")
    def methodOfDerivedClass(self):
        print("Method of Derived Class")
        
#driver code

sc=SecondClass();
sc.methodOfBaseClass();
sc.methodOfDerivedClass()