function getpin() {
  const pin = generatepin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    return getpin();
  }
}

function generatepin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

document.getElementById("generate-pin").addEventListener("click", function () {
  const successMassege = document.getElementById("pin-success");
  const failuarMassage = document.getElementById("pin-failuar");

  const pin = getpin();
  const displayPinField = document.getElementById("display-pin");
  displayPinField.value = pin;
  successMassege.style.display = "none";
  failuarMassage.style.display = "none";
});

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const character = event.target.innerText;
    const typedNumberField = document.getElementById("typed-number-display");
    const previousTypedNumber = typedNumberField.value;
    if (isNaN(character)) {
      if (character === "C") {
        typedNumberField.value = "";
      } else if (character === "<") {
        const digits = previousTypedNumber.split("");
        digits.pop();
        const remainingDigits = digits.join("");
        typedNumberField.value = remainingDigits;
      }
    } else {
      const newTypedNumber = previousTypedNumber + character;
      typedNumberField.value = newTypedNumber;
    }
  });

document.getElementById("varify-pin").addEventListener("click", function () {
  const displayPinField = document.getElementById("display-pin");
  const currentPin = displayPinField.value;

  const typedNumberField = document.getElementById("typed-number-display");
  const typedNumber = typedNumberField.value;

  const successMassege = document.getElementById("pin-success");
  const failuarMassage = document.getElementById("pin-failuar");

  if (currentPin === typedNumber && currentPin !== "") {
    successMassege.style.display = "block";
    failuarMassage.style.display = "none";
    typedNumberField.value = "";
    displayPinField.value = "";
  } else {
    failuarMassage.style.display = "block";
    successMassege.style.display = "none";
    typedNumberField.value = "";
  }
});
