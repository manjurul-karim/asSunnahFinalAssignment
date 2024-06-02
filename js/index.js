let currentNumber = "";
let previousNumber = "";
let operation = null;

function appendNumber(number) {
  currentNumber += number;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("result").textContent = currentNumber;
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operation = null;
  document.getElementById("result").textContent = "0";
}

function setOperation(op) {
  if (currentNumber === "" && op !== "percentage") return;
  if (operation !== null) calculateResult();
  if (op === "percentage") {
    previousNumber = currentNumber;
    operation = op;
    calculateResult();
  } else {
    previousNumber = currentNumber;
    currentNumber = "";
    operation = op;
  }
}

function calculateResult() {
  let result;
  let num1 = parseFloat(previousNumber);
  let num2 = parseFloat(currentNumber);

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
    case "remainder":
      result = num1 % num2;
      break;
    case "percentage":
      result = num1 / 100;
      break;
    default:
      return;
  }

  currentNumber = result.toFixed(2);
  operation = null;
  updateDisplay();
}
// ! interest part start
let serial = 0;
function calculateInterest() {
  let principal = parseFloat(document.getElementById("principal").value);
  let rate = parseFloat(document.getElementById("rate").value);
  let time = parseFloat(document.getElementById("time").value);

  let interest = (principal * rate * time) / 100;
  document.getElementById("interestResult").textContent = interest.toFixed(2);
}

// ! interest part end

// !Fahrenheit to Celsius  calculation
document
  .getElementById("f-to-c-calculate-btn")
  .addEventListener("click", function () {
    serial += 1;
    const name = document.getElementById("fahrenheit-celsius").innerText;

    const FahrenheitInput = parseFloat(
      document.getElementById("Fahrenheit").value
    );
    const unit = "&#8451";
    if (isNaN(FahrenheitInput) || FahrenheitInput <= 0) {
      alert("Please enter a valid positive number for the radius.");
      return;
    }
    const FahrenheitToCelcius = ((FahrenheitInput - 32) * 5) / 9;

    displayCalculation(name, FahrenheitToCelcius, unit);
  });
// ! Celsius to Fahrenheit calculation

document
  .getElementById("c-to-f-calculate-btn")
  .addEventListener("click", function () {
    serial += 1;
    const name = document.getElementById("celsius-fahrenheit").innerText;

    const celsiusInput = parseFloat(document.getElementById("Celsius").value);
    const unit = "&#8457;";
    if (isNaN(celsiusInput)) {
      alert("input field can't be blank");
      return;
    }
    const celciusToFarhenheit = celsiusInput - 9 / 5 + 32;

    displayCalculation(name, celciusToFarhenheit, unit);
  });
// !Circle calculation
document
  .getElementById("circle-calculate-btn")
  .addEventListener("click", function () {
    serial += 1;
    const name = document.getElementById("circle-shape").innerText;

    const radius = parseFloat(
      document.getElementById("circle-radius-input").value
    );
    const unit = document.getElementById("cmSquare").innerText;

    if (isNaN(radius) || radius <= 0) {
      alert("Please enter a valid positive number for the radius.");
      return;
    }
    const circleAreaCalculation = Math.PI * radius * radius;
    console.log(circleAreaCalculation);
    displayCalculation(name, circleAreaCalculation, unit);
  });

//  ! Rectangle Calculation
document
  .getElementById("rectangle-calculate-btn")
  .addEventListener("click", function () {
    serial += 1;
    const name = document.getElementById("rectangle-shape").innerText;
    const length = parseFloat(
      document.getElementById("rectangle-length-input").value
    );
    const width = parseFloat(
      document.getElementById("rectangle-width-input").value
    );
    const unit = document.getElementById("cmSquare").innerText;
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
      alert("Please enter valid positive numbers for length and width.");
      return;
    }
    const rectangleAreaCalculation = length * width;
    displayCalculation(name, rectangleAreaCalculation,unit);
  });

// !Square Calculation
document
  .getElementById("square-calculate-btn")
  .addEventListener("click", function () {
    serial += 1;

    const name = document.getElementById("square-shape").innerText;
    const sideInput = document.getElementById("square-side-input").value;
    const unit = document.getElementById("cmSquare").innerText;
    if (sideInput === "") {
      alert("input Filed cannot be blank");
    } else {
      if (isNaN(sideInput) || sideInput <= 0) {
        alert("invalid input value");
      }
      const squareAreaCalculation = 6 * sideInput * sideInput;

      displayCalculation(name, squareAreaCalculation,unit);
    }
  });

//  !triangle Calculation

document
  .getElementById("triangle-calculate-btn")
  .addEventListener("click", function () {
    serial += 1;
    const name = document.getElementById("triangle-shape").innerText;
    const baseInput = parseFloat(
      document.getElementById("triangle-base-input").value
    );
    const heightInput = parseFloat(
      document.getElementById("triangle-height-input").value
    );
    const unit = document.getElementById("cmSquare").innerText;

    if (isNaN(baseInput) || isNaN(heightInput)) {
      alert("Input fields cannot be blank");
      return;
    }

    if (baseInput <= 0 || heightInput <= 0) {
      alert("Invalid input value");
      return;
    }

    const triangleAreaCalculation = 0.5 * baseInput * heightInput;
    console.log(triangleAreaCalculation);
    displayCalculation(name, triangleAreaCalculation,unit);
  });

//  ! parallelogram calculation

document
  .getElementById("parallelogram-calculate-btn")
  .addEventListener("click", function () {
    serial += 1;
    const name = document.getElementById("parallelogram-shape").innerText;
    const baseInput = parseFloat(
      document.getElementById("parallelogram-base-input").value
    );
    const heightInput = parseFloat(
      document.getElementById("parallelogram-height-input").value
    );
    const unit = document.getElementById("cmSquare").innerText;
    if (isNaN(baseInput) || isNaN(heightInput)) {
      alert("invalid input value");
      return;
    }
    if (baseInput <= 0 || heightInput <= 0) {
      alert("Input Valid positive value");
      return;
    }
    const parallelogramAreaCalculation = baseInput * heightInput;
    displayCalculation(name, parallelogramAreaCalculation,unit);
  });

//  ! Rhombus Calculation

document
  .getElementById("rhombus-calculate-btn")
  .addEventListener("click", function () {
    serial += 1;
    const name = document.getElementById("rhombus-shape").innerText;
    const diagonal1Input = parseFloat(
      document.getElementById("rhombus-diagonal1-input").value
    );
    const diagonal2Input = parseFloat(
      document.getElementById("rhombus-diagonal2-input").value
    );
    const unit = document.getElementById("cmSquare").innerText;
    
    if (diagonal1Input === "" || diagonal2Input === "") {
      alert("input Filed cannot be blank");
    } else {
    }
    if (
      isNaN(diagonal1Input) ||
      isNaN(diagonal2Input || diagonal1Input <= 0 || diagonal2Input <= 0)
    ) {
      alert("input valid postive value");
      return;
    }

    const rhombusAreaCalculation = 0.5 * diagonal1Input * diagonal2Input;
    displayCalculation(name, rhombusAreaCalculation ,unit);
  });
//!  Trapezoid calculation
document
  .getElementById("trapezoid-calculate-btn")
  .addEventListener("click", function () {
    serial += 1;
    const name = document.getElementById("trapezoid-shape").innerText;
    const base1Input = parseFloat(
      document.getElementById("trapezoid-base1-input").value
    );
    const base2Input = parseFloat(
      document.getElementById("trapezoid-base2-input").value
    );
    const heightInput = parseFloat(
      document.getElementById("trapezoid-height-input").value
    );
    const unit = document.getElementById("cmSquare").innerText;
    
    if (base1Input === "" || base2Input === "" || heightInput === "") {
      alert("input Filed cannot be blank");
    } else {
      if (
        isNaN(base1Input) ||
        isNaN(base1Input) ||
        isNaN(heightInput) ||
        base1Input <= 0 ||
        base2Input <= 0 ||
        heightInput <= 0
      ) {
        alert("input valid positive value");
      }
      const trapezoidAreaCalculation =
        0.5 * (base1Input + base2Input) * heightInput;

      displayCalculation(name, trapezoidAreaCalculation ,unit);
    }
  });

//  ! Ellipse Calculation
document
  .getElementById("ellipse-calculate-btn")
  .addEventListener("click", function () {
    serial += 1;
    const name = document.getElementById("ellipse-shape").innerText;
    const aAxisInput = parseFloat(
      document.getElementById("ellipse-aAxis-input").value
    );
    const bAxisInput = parseFloat(
      document.getElementById("ellipse-bAxis-input").value
    );
    const unit = document.getElementById("cmSquare").innerText;
    if (aAxisInput === "" || bAxisInput === "") {
      alert(" input field can't be blank");
    } else {
      if (
        isNaN(aAxisInput) ||
        isNaN(bAxisInput) ||
        aAxisInput <= 0 ||
        bAxisInput <= 0
      ) {
        alert("Input Valid Positive value");
        return;
      }
    }
    const ellipseAreaCalculation = Math.PI * aAxisInput * bAxisInput;

    displayCalculation(name, ellipseAreaCalculation,unit);
  });
// ! Cube calculation
document
  .getElementById("cube-calculate-btn")
  .addEventListener("click", function () {
    serial += 1;

    const name = document.getElementById("cube-shape").innerText;
    const edgeInput = document.getElementById("cube-edge-input").value;
    const unit = document.getElementById("unit-select").innerText;
    if (edgeInput === "") {
      alert("input Filed cannot be blank");
    } else {
      if (isNaN(edgeInput) || edgeInput <= 0) {
        alert("invalid input value");
      }
      const cubeAreaCalculation = 6 * edgeInput * edgeInput;

      displayCalculation(name, cubeAreaCalculation, unit);
      clearInputFields();
    }
  });
//  !common function for display calculation

function displayCalculation(nameOfShape, Calculation, unit) {
  const container = document.getElementById("table-container");

  const tr = document.createElement("tr");
  tr.innerHTML = `
<td> ${serial}. </td>
<td> ${nameOfShape} </td>
<td> =${Calculation.toFixed(2)} ${unit}  </td>

`;
  container.appendChild(tr);
}
