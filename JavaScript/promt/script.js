/*let username = prompt(`What is Your Name?`, "name");
console.log(`${username} welcome to my page! please take a look`);

let alertMessage = alert("Welcome to Page!");
console.log(alertMessage);*/

let username = prompt(`what is Your Name ?`);
console.log(`${username} Welcome to page!`);
let height = prompt(`Please Enter your height in (cms)`);
let weight = prompt(`Please Enter your height in (kg)`);

let heightInMeters = height / 100;
let bmi = Number((weight / heightInMeters ** 2).toFixed(2));
console.log(
  `Height: ${height}\n${heightInMeters}\nWeight :${weight}\nBMI: ${bmi}`
);

if (bmi < 18.5) {
  console.log(`Thin`);
} else if (bmi > 25) {
  console.log(`Fat!`);
} else {
  console.log(`Normal`);
}
