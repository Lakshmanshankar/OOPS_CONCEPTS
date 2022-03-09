class Base:
    def __init__(self):
        self.protected="Protected"
        self.__private="private"
        print("I am Protected member of base",self.protected)
    def CallPrivate(self):
        print("I am Private of Base "+self.__private)
class Derived(Base):
    def __init__(self):
        Base.__init__(self)
        print("hey I am protected of derived ",self.protected)
    def callPrivate(self):
        print("I am not visible",self.__private)

d=Derived()
b=Base()
b.CallPrivate()
try:
    d.callPrivate()
except AttributeError:
    print("Sorry private members of base is not visible in derived")