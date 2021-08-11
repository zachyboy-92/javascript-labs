let student = {
  firstName: "Zack",
  lastName: "Merfouk",
  grade: 12,
  age: 17,
  gende: "Male",
  maths: 81,
  science: 79,
  english: 93,

  average() {
    let average = Math.floor((this.maths + this.science + this.english) / 3);
    return `${this.firstName} ${this.lastName} has an average of ${average}`;
  },

  creditsTograduation(credit) {
    if (credit >= 41) {
      return `You have enough credits to graduate`;
    } else {
      return `You need ${41 - credit} to graduate`;
    }
  },
};

console.log(student.average());
console.log(student.creditsTograduation(50));
