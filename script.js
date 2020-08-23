// Password list
const lowerLetter = "abcdefghijklmnopqrstuvwxyz";
const upperLetterList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberList = "0123456789";
const specialLetterList = "~!@#$%^&*()_+-=[];',./{}:<>?";

var userPasswordInput = "";
var userPasswordOutput = "";

// Password questions\
function userPasswordInputConfirm() {
  // Password length
  var passwordNumber = prompt("How many?");
  while (passwordNumber < 8 || passwordNumber > 128) {
    alert("Password should be between 8 and 128 characters");
    var passwordNumber = prompt("How many?");
  }
  // Password characters
  const lowerLetterConfirm = confirm("Lower Letter?");
  const upperLetterConfirm = confirm("Upper Letter?");
  const numberConfirm = confirm("Number?");
  const specialCharacterConfirm = confirm("Special Character?");

  if (lowerLetterConfirm == true) {
    userPasswordInput += lowerLetter;
  }
  if (upperLetterConfirm == true) {
    userPasswordInput += upperLetterList;
  }
  if (numberConfirm == true) {
    userPasswordInput += numberList;
  }
  if (specialCharacterConfirm == true) {
    userPasswordInput += specialLetterList;
  }
  // If the user select all questions as false, it will be reloaded.
  if (
    lowerLetterConfirm == false &&
    upperLetterConfirm == false &&
    numberConfirm == false &&
    specialCharacterConfirm == false
  ) {
    alert("You must choose at least one of the previous characters");
    location.reload();
  }

  var userPasswordList = userPasswordInput.split("");

  for (i = 0; i < passwordNumber; i++) {
    userPasswordOutput +=
      userPasswordList[Math.floor(Math.random() * userPasswordInput.length)];

    document.getElementById("password").placeholder = userPasswordOutput;
    // Reset the varianbles
  }
}

document.getElementById("generate").addEventListener("click", function (e) {
  userPasswordInputConfirm();
  document.getElementById("generate").style.display = "none";
});

document.getElementById("reset").addEventListener("click", function (e) {
  location.reload();
});

// userPasswordInput = "";
// console.log(userPasswordInput);
// console.log(userPasswordOutput);
// console.log(userPassword);

// console.log(userPassword.length);

// console.log(userPasswordList);

// // Assignment Code
// const generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// function generatePassword() {
//   var passwordLength = prompt(
//     "How many letters do you want in your password? (8-128)"
//   );

//   if (passwordLength > 7 && passwordLength < 129) {
//     var lowerLetterPassword = confirm(
//       "Do you want LOWERLETTERS in your password?"
//     );
//     var upperLetterPassword = confirm(
//       "Do you want UPPERLETTERS in your password?"
//     );
//     var numberPassword = confirm("Do you want NUMBERS in your password?");
//     var specialPassword = confirm(
//       "Do you want SPECIAL LETTERS in your password?"
//     );
//   } else {
//     window.alert(
//       "Password should be greater than 8 letter and less than 128 letters"
//     );
//     prompt("How many letters do you want in your password? (8-128)");
//   }

//   console.log(passwordLength);
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // GIVEN I need a new, secure password
// // WHEN I click the button to generate a password
// // THEN I am presented with a series of prompts for password criteria

// // WHEN prompted for password criteria
// // THEN I select which criteria to include in the password

// // WHEN prompted for the length of the password
// // THEN I choose a length of at least 8 characters and no more than 128 characters

// // WHEN prompted for character types to include in the password
// // THEN I choose lowercase, uppercase, numeric, and/or special characters

// // WHEN I answer each prompt
// // THEN my input should be validated and at least one character type
// // should be selected

// // WHEN all prompts are answered
// // THEN a password is generated that matches the selected criteria

// // WHEN the password is generated
// // THEN the password is either displayed in an alert or written to the page
