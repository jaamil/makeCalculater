const screen = document.getElementById("screen");
const items = document.querySelectorAll("table");
let screenValue = ''
for (const item of items) {
  item.addEventListener("click", function (e) {
    const buttonText = e.target.innerText;
    if (buttonText == "X") {
      buttonText = "*";
     screenValue = screenValue + buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = " ";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
