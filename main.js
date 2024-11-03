const display = document.querySelector(".result");
const buttons = document.querySelectorAll(".calculator-number-buttons");
let currentOperation = "";
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (value === "clear") {
      currentOperation = "";
      display.textContent = "0";
    } else if (value === "DEL") {
      currentOperation = currentOperation.slice(0, -1);
      display.textContent = currentOperation || "0";
    } else {
      currentOperation += value;
      display.textContent = currentOperation;
    }
  });
});

const equalsButton = document.querySelector(".equals-buttom");
equalsButton.addEventListener("click", () => {
  try {
    currentOperation = eval(currentOperation);
    display.textContent = currentOperation;
  } catch (error) {
    display.textContent = "Error";
  }
});
