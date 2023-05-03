// Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal

class Animal {
  constructor() {
    this.move = "move";
  }
}

class Cat extends Animal {
  constructor() {
    super();
  }
}

const cat = new Cat();
console.log(cat.move); // move
