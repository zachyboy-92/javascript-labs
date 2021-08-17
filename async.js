// function findNum(user1, user2) {
//   console.log(`Hello ${user1} and ${user2}`);
// }
// setTimeout(findNum, 1000, "Zack", "John");

let intro = setInterval(() => {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
}, 200);
setTimeout(() => {
  clearInterval(intro);
}, 4000);
