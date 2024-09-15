const lengthInput = document.getElementById("length");
const upperCaseCheckbox = document.getElementById("upperCase");
const lowerCaseCheckbox = document.getElementById("lowerCase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateButton  = document.getElementById("generatePassword");
const passwordOutput = document.getElementById("password");

function generatePassword() {
  const length = parseInt(lengthInput.value);
  let password = "";

  const charSets = [];
  if (upperCaseCheckbox.checked) charSets.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  if (lowerCaseCheckbox.checked) charSets.push("abcdefghijklmnopqrstuvwxyz");
  if (numbersCheckbox.checked) charSets.push("0123456789");
  if (symbolsCheckbox.checked) charSets.push("!@#$%^&*()_+{}[]<>?");

  if (charSets.length === 0) {
    alert("Please select at least one character type.");
    return;
  }

  for (let i = 0; i < length; i++) {
    const randomCharSetIndex = Math.floor(Math.random() * charSets.length);
    const randomCharIndex = Math.floor(Math.random() * charSets[randomCharSetIndex].length);
    password += charSets[randomCharSetIndex][randomCharIndex];
  }

  passwordOutput.textContent = password;
}

generateButton.addEventListener("click", generatePassword);