class Animal {
  constructor(type, age, color, legs, superPower) {
    this.type = type;
    this.age = age;
    this.color = color;
    this.legs = legs;
    this.superPower = superPower;
  }
  animalDetails() {
    return `${this.type} is ${this.age} years old and has ${this.legs} legs with a color of ${this.color}`;
  }
  animalSuperPower() {
    return `${this.type} has a special power of ${this.superPower}`;
  }
}

let animalOne = new Animal("dog", 1, "black", 4, "speed");
let animalTwo = new Animal("cat", 2, "grey", 4, "flexibility");
console.log(animalOne.animalDetails());
console.log(animalTwo.animalSuperPower());
