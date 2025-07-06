// let sureshAge, harishAge, nareshAge;

// let currentTotalAge = 0;

// sureshAge = Number(prompt(`Suresh what is your Age : `));
// thankYouMessage(`Suresh`, sureshAge);

// harishAge = Number(prompt(`Harish what is your Age : `));
// thankYouMessage(`Harish`, harishAge);

// nareshAge = Number(prompt(`Naresh what is your Age : `));
// thankYouMessage(`Naresh`, nareshAge);

// function thankYouMessage(name, age) {
//   console.log(`${name} age is : ${age || "not Entered!"}`);
//   currentTotalAge = currentTotalAge + age;
//   let cAge = age > 18;
//   if (cAge) {
//     console.log(`${name} You will get DL!`);
//   } else {
//     console.log(
//       `${name} You need to wait for ${18 - age} more years to get DL!`
//     );
//   }
//   console.log(`Curreent total age is ${currentTotalAge}`);
//   console.log(`Thank You for Answering!`);
//   if (cAge) {
//     console.log(`Please Subscribe to Channel`);
//   }
// }
let ageCount = 0;
let rameshAge = Number(prompt("Ramesh Enter Your age : "));
message(`Ramesh:`, rameshAge);

let sureshAge = +prompt(`Suresh Enter Your age : `);
message(`Suresh`, sureshAge);

let nareshAge = Number(prompt("Naresh Enter Your age :"));
message(`Naresh`, nareshAge);

function message(name, age) {
  console.log(`${name} Your age is : ${age || "Not Entered!"}`);
  console.log(`Thank you for entering your age`);

  ageCount = ageCount + age;
  console.log(ageCount);
  if (age > 18) {
    console.log(`Eligible for DL`);

    console.log(`Please Subscribe to my channel!`);
  } else if (age < 18) {
    console.log(`Not Eligible you have wait ${18 - age} years`);
  }
}
