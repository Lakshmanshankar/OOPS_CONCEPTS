class BaseClass:
    def __init__(self):
        self.base="Base class"
    def InvokeBase(self):
        print(self.base)
class DerivedClass:
    def __init__(self):
        self.derived="Derived class"
    def InvokeBase(self):
        print(self.derived)
obj1= BaseClass();
obj2 =DerivedClass();
for i in (obj1,obj2):
    i.InvokeBase()
# for i,index in enumerate(zip((1,2,4))):
#     print(i,index)