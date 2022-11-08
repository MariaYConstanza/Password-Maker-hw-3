// Assignment Code
// var generateBtn =
 document.querySelector("#generate").addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Characters arrays choices
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "$", "?", "&"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Conformation prompts
var confirmLength = "";
var confirmNumber;
var confirmSpecial;
var confirmLowerCase;
var confirmUpperCase;

// generating password function
function generatePassword() {
  var confirmLength = window.prompt("Confirm character length amount between 8-28 and press OK to continue.");

  // confirm length array
  if (confirmLength <= 7 || confirmLength >= 29){
    window.alert("Password length must be bewteen 8-28 characters. Please try again and press OK.");
    var confirmLength = window.prompt("Confirm character length amount between 8-28 and press OK to continue.")
  }

  window.alert(`Your password will now have ${confirmLength} of character.`);

  // decalrations 
  var confirmNumber = window.prompt("Confirm if you would like to add numeric values, than press OK");
  var confirmSpecial = window.prompt("Confirm if you would like to add special values, than press OK");
  var confirmLowerCase = window.prompt("Confirm if you would like to add lower case values, than press OK");
  var confirmUpperCase = window.prompt("Confirm if you would like to add upper case values, than press OK");

  // comfirm characters array
  if (confirmNumber === false && confirmSpecial === false && confirmLowerCase === false && confirmUpperCase === false) {
    window.alert("Your password must contain these following values to create your password.");
    var confirmNumber = window.prompt("Confirm if you would like to add numeric values, than press OK");
    var confirmSpecial = window.prompt("Confirm if you would like to add special values, than press OK");
    var confirmLowerCase = window.prompt("Confirm if you would like to add lower case values, than press OK");
    var confirmUpperCase = window.prompt("Confirm if you would like to ass upper case values, than press OK");
  }
}






// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword); ^^moved to top
