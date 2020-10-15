class Shape {
  constructor(name) {
    this.name = name;
  }

  area() {
    return -1;
  }

  perimeter() {
    return -1;
  }
  toString() {
    return "Generic Polygon" + this.name;
  }
}

class Triangle extends Shape {
  constructor(name, base, height) {
    super(name);
    this.base = base;
    this.height = height;
  }

  area() {
    return 0.5 * this.base * this.height;
  }
  toString() {
    return "Triangle: " + this.name + ". Area: " + this.area();
  }
}

class Rectangle extends Shape {
  constructor(name, length, width) {
    super(name);
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }

  toString() {
    return (
      "Rectangle: " +
      this.name +
      ". Area: " +
      this.area() +
      ". Perimeter: " +
      this.perimeter()
    );
  }
}

class Square extends Rectangle {
  constructor(name, side) {
    super(name, side, side);
  }

  toString() {
    return (
      "Square: " +
      this.name +
      ". Area: " +
      this.area() +
      ". Perimeter: " +
      this.perimeter()
    );
  }
}

function fizzBuzz(n) {
  let printString = "";
  for (let i = 1; i <= n; i++) {
    if (n % 3 === 0) {
      printString += "Fizz";
    } else if (n % 5 === 0) {
      printString += "Buzz";
    } else if (n % 15 === 0) {
      printString += "FizzBuzz";
    } else {
      printString += i;
    }

    if (i % 10 == 0) {
      printString += "\n";
    } else if (i != n) {
      printString += ", ";
    }
  }
  console.log(printString);
}

function main() {
  fizzBuzz();
  let t1 = new Triangle("T1", 2, 3);
  let rectangle1 = new Rectangle("R1", 2, 3);
  let square1 = new Square("S1", 3);
  console.log(t1.area());
  console.log(t1.name);
}

main();
