let currentInput = "";
let memory = 0;

const display = document.getElementById("display");
const memoryStatus = document.getElementById("memory-status");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerHTML;

    switch (value) {
      case "=":
        try {
          currentInput = eval(currentInput) || "0";
        } catch {
          currentInput = "Error";
        }
        break;
      case "C":
        currentInput = "";
        break;
      case "DEL":
        currentInput = currentInput.slice(0, -1);
        break;
      case "M+":
        memory += parseFloat(currentInput) || 0;
        memoryStatus.textContent = `Memory: ${memory}`;
        return;
      case "M-":
        memory -= parseFloat(currentInput) || 0;
        memoryStatus.textContent = `Memory: ${memory}`;
        return;
      case "MR":
        currentInput = memory.toString();
        break;
      default:
        currentInput += value;
    }

    display.value = currentInput;
  });
});
