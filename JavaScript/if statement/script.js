// let user = prompt(`Orey Book Good or Not Good!`);
// console.log(user);
// console.log(user.toLowerCase());

// if (user.toLowerCase() == `yes`) {
//   console.log(`Buy Book!`);
// } else {
//   console.log(`Don't Buy Book!`);
// }

//console.log(`Don't But Book!`);

let totalScore = Number(prompt("What is Your Total Score? : "));
console.log(totalScore);
// console.log(user.toLowerCase());

if (totalScore === 25) {
  console.log("Excellent!");
} else if (totalScore >= 20 && totalScore < 25) {
  console.log("Good!");
} else if (totalScore < 20) {
  console.log("Average!");
} else {
  console.log("Invalid!");
}
