let bmiForm = document.querySelector(".bmi-form");
bmiForm.addEventListener("submit", function (e) {
  //To prevent the default behavior of the form submission
  e.preventDefault();
  // e.target refers to the form element
  const form = e.target;

  // Access individual form elements using e.target
  const name = form.querySelector("#name").value;
  const weight = Number(form.querySelector("#weight").value);
  const height = Number(form.querySelector("#height").value);

  console.log(name, height, weight);
  //Write your logic here.
  //Logic begins
  //Logic ends
  let heightInMeters = height / 100;
  let bmi = Number((weight / heightInMeters ** 2).toFixed(2));
  console.log(
    `Height: ${height}\n${heightInMeters}\nWeight :${weight}\nBMI: ${bmi}`
  );

  if (bmi < 18.5) {
    result = `Thin`;
  } else if (bmi > 25) {
    result = `Fat!`;
  } else {
    result = `Normal`;
  }

  //Uncomment below code after writing your logic
  form.querySelector(
    "#result"
  ).textContent = `${name.toUpperCase()}, You are ${result}`;
});

//Below code is reset the form - will explain later
document.querySelector("#reset").addEventListener("click", function (e) {
  bmiForm.querySelector("#name").value = "";
  bmiForm.querySelector("#weight").value = "";
  bmiForm.querySelector("#height").value = "";
  bmiForm.querySelector("#result").textContent = "";
});
