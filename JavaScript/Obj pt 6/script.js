// let dhoni = {
//   name: `Mahendra Singh Dhoni`,
//   age: 42,
//   "is he captain cool?": true,
//   teams: [`India, CSK`],
//   stats: {
//     matches: 538,
//     runs: 17266,
//     centuries: 16,
//   },
//   retire: function () {
//     return `${this.name} retired from the international cricket in 2020.`;
//   },
// };
// console.log(dhoni.name);
// console.log(dhoni.stats.runs);
// console.log(dhoni.teams[0]);
// console.log(dhoni.retire());

let calulator = {
  add: function (a, b) {
    return a + b;
  },
  substact: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

console.log(calulator.add(5, 3));
console.log(calulator.substact(5, 3));
console.log(calulator.multiply(5, 3));
