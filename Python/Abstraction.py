from abc import ABC,abstractclassmethod, abstractmethod

class Shapes:
    
    @abstractmethod
    def howManySides(self):
        pass
class Triangle(Shapes):
    def howManySides(self):
        print("I have three sides ")
class Square(Shapes):
    def howManySides(self):
        print("I have four sides ")

def mainCallback():
    Tri=Triangle()
    Tri.howManySides()
    # Square
    Sqr=Square()
    Sqr.howManySides()
    if(issubclass(Triangle,Shapes)):
        print("true")
    else:
        print("false")
mainCallback();