// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var length = ''
var lowercase = ''
var uppercase = ''
var numeric = ''
var special = ''
var arrLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var arrUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var arrNumeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var arrSpecial = ['!', '@', '#', '$', '%', '&', '=', '+', '?']



// Write password to the #password input
function writePassword() {
// create length of password
  length = prompt('how many characters do you want in your password?', '8-128')
  var lengthMessage = (length)
// >128 invalid
  if (lengthMessage > 128) {
    result = alert('Invalid response')
    console.log('Invalid response')
    writePassword();
    return
  }
  // <8 invalid
  else if (lengthMessage < 8) {
    result = alert('Invalid response')
    console.log('Invalid response')
    writePassword();
    return
  }
  // valid length
  else (lengthMessage > 7, lengthMessage < 129); {
    result = alert('You chose ' + lengthMessage + ' characters.')
    console.log('Length of password is', lengthMessage, 'characters.')
// lowercase prompt alert
    lowercase = prompt('Do you want lowercase characters in your password?', 'y/n')
    var lowercaseMessage = (lowercase)
  }
// lowercase included in password
  if (lowercaseMessage === 'y') {
    result = alert('You want lowercase characters.')
    console.log('You want lowercase characters.')
  }
// lowercase not included
  else if (lowercaseMessage === 'n') {
    result = alert('You do not want lowercase characters.')
    console.log('You do not want lowercase characters.')
  }
// lowercase invalid
  else if (lowercaseMessage !== 'y') {
    result = alert('Invalid response.')
    console.log('Invalid response.')
  }
// lowercase invalid
  else if (lowercaseMessage !== 'n') {
    result = alert('Invalid response.')
    console.log('Invalid response.')
  }
// uppercase prompt alert
  uppercase = prompt('Do you want uppercase characters in your password?', 'y/n')
  var uppercaseMessage = (uppercase)
// uppercase included in password
  if (uppercaseMessage === 'y') {
    result = alert('You want uppercase characters.')
    console.log('You want uppercase characters.')
  }
  // uppercase included in password

  else if (uppercaseMessage === 'n') {
    result = alert('You do not want uppercase characters.')
    console.log('You do not want uppercase characters.')
  }
  // uppercase invalid

  else if (uppercaseMessage !== 'y') {
    result = alert('Invalid response.')
    console.log('Invalid response.')

  }
  // uppercase invalid

  else if (uppercaseMessage !== 'n') {
    result = alert('Invalid response.')
    console.log('Invalid response.')

  }
// numeric prompt alert

  numeric = prompt('Do you want numeric symbols in your password?', 'y/n')
  var numericMessage = (numeric)
// numeric included in password

  if (numericMessage === 'y') {
    result = alert('You want numeric symbols.')
    console.log('You want numeric symbols.')
  }
  // numeric not included

  else if (numericMessage === 'n') {
    result = alert('You do not want numeric symbols.')
    console.log('You do not want numeric symbols.')
  }
  // numeric invalid

  else if (numericMessage !== 'y') {
    result = alert('Invalid response.')
    console.log('Invalid response.')
  }
  // numeric invalid

  else if (numericMessage !== 'n') {
    result = alert('Invalid response.')
    console.log('Invalid response.')

  }
  // special characters prompt alert

  special = prompt('Do you want special symbols in your password?', 'y/n')
  var specialMessage = (special)
// special characters included in password

  if (specialMessage === 'y') {
    result = alert('You want special symbols.')
    console.log('You want special symbols.')
  }
  // special characters not included

  else if (specialMessage === 'n') {
    result = alert('You do not want special symbols.')
    console.log('You do not want special symbols.')
  }
  // special characters invalid

  else if (specialMessage !== 'y') {
    result = alert('Invalid response.')
    console.log('Invalid response.')

  }
  // special characters invalid

  else if (specialMessage !== 'n') {
    result = alert('Invalid response.')
    console.log('Invalid response.')

  }
  // all 4 charater types included
  if (lowercaseMessage === 'y' && uppercaseMessage === 'y' && numericMessage === 'y' && specialMessage === 'y') {
    var passwordArray = arrLowercase.concat(arrUppercase, arrNumeric, arrSpecial);
    result = alert('You have chosen lowercase, uppercase, numeric, and special characters.')
    console.log('You have chosen lowercase, uppercase, numeric, and special characters.')
    console.log(passwordArray)
    
  }
  // 1,2,3 charater types included
  else if (lowercaseMessage === 'y' && uppercaseMessage === 'y' && numericMessage === 'y' && specialMessage !== 'y') {
    var passwordArray = arrLowercase.concat(arrUppercase, arrNumeric);
    result = alert('You have chosen lowercase, uppercase,  and numeric characters.')
    console.log('You have chosen lowercase, uppercase, and numeric characters.')
    console.log(passwordArray)
    
  }
  // 1,2,4 charater types included
  else if (lowercaseMessage === 'y' && uppercaseMessage === 'y' && numericMessage !== 'y' && specialMessage === 'y') {
    var passwordArray = arrLowercase.concat(arrUppercase, arrSpecial);
    result = alert('You have chosen lowercase, uppercase, and special characters.')
    console.log('You have chosen lowercase, uppercase, and special characters.')
    console.log(passwordArray)
  
  }
  // 1,3,4 charater types included
  else if (lowercaseMessage === 'y' && uppercaseMessage !== 'y' && numericMessage === 'y' && specialMessage === 'y') {
    var passwordArray = arrLowercase.concat(arrNumeric, arrSpecial);
    result = alert('You have chosen lowercase, numeric, and special characters.')
    console.log('You have chosen lowercase, numeric, and special characters.')
    console.log(passwordArray)
   
  }

  // 2,3,4 charater types included
  else if (lowercaseMessage !== 'y' && uppercaseMessage === 'y' && numericMessage === 'y' && specialMessage === 'y') {
    var passwordArray = arrUppercase.concat(arrNumeric, arrSpecial);
    result = alert('You have chosen uppercase, numeric, and special characters.')
    console.log('You have chosen uppercase, numeric, and special characters.')
    console.log(passwordArray)
    
  }

  // 1,2 charater types included
  else if (lowercaseMessage === 'y' && uppercaseMessage === 'y' && numericMessage !== 'y' && specialMessage !== 'y') {
    var passwordArray = arrLowercase.concat(arrUppercase);
    result = alert('You have chosen lowercase and uppercase characters.')
    console.log('You have chosen lowercase and uppercase characters.')
    console.log(passwordArray)
   
  }

  // 1,3 charater types included
  else if (lowercaseMessage === 'y' && uppercaseMessage !== 'y' && numericMessage === 'y' && specialMessage !== 'y') {
    var passwordArray = arrLowercase.concat(arrNumeric);
    result = alert('You have chosen lowercase and numeric characters.')
    console.log('You have chosen lowercase and numeric characters.')
    console.log(passwordArray)
   
  }

  // 1,4 charater types included
  else if (lowercaseMessage === 'y' && uppercaseMessage !== 'y' && numericMessage !== 'y' && specialMessage === 'y') {
    var passwordArray = arrLowercase.concat(arrSpecial);
    result = alert('You have chosen lowercase and special characters.')
    console.log('You have chosen lowercase and special characters.')
    console.log(passwordArray)
    

  }

  // 2,3 charater types included
  else if (lowercaseMessage !== 'y' && uppercaseMessage === 'y' && numericMessage === 'y' && specialMessage !== 'y') {
    var passwordArray = arrUppercase.concat(arrNumeric);
    result = alert('You have chosen uppercase and numeric characters.')
    console.log('You have chosen uppercase and numeric characters.')
    console.log(passwordArray)
   

  }

  // 2,4 charater types included
  else if (lowercaseMessage !== 'y' && uppercaseMessage === 'y' && numericMessage !== 'y' && specialMessage === 'y') {
    var passwordArray = arrUppercase.concat(arrSpecial);
    result = alert('You have chosen uppercase and special characters.')
    console.log('You have chosen uppercase and special characters.')
    console.log(passwordArray)
    

  }

  // 3,4 charater types included
  else if (lowercaseMessage !== 'y' && uppercaseMessage !== 'y' && numericMessage === 'y' && specialMessage === 'y') {
    var passwordArray = arrNumeric.concat(arrSpecial);
    result = alert('You have chosen numeric and special characters.')
    console.log('You have chosen numeric and special characters.')
    console.log(passwordArray)
   

  }

  // 1 charater type included
  else if (lowercaseMessage === 'y' && uppercaseMessage !== 'y' && numericMessage !== 'y' && specialMessage !== 'y') {
    result = alert('You have chosen lowecase characters. You may want to choose more than one type of symbol for your password.')
    console.log('You have chosen lowecase characters. You may want to choose more than one type of symbol for your password.')
    var passwordArray = arrLowercase
    console.log(passwordArray)
   
  }

  // 2 charater type included
  else if (lowercaseMessage !== 'y' && uppercaseMessage === 'y' && numericMessage !== 'y' && specialMessage !== 'y') {
    result = alert('You have chosen uppercase characters. You may want to choose more than one type of symbol for your password.')
    console.log('You have chosen uppercase characters. You may want to choose more than one type of symbol for your password.')
    var passwordArray = arrUppercase
    console.log(passwordArray)
   
  }

  // 3 charater type included
  else if (lowercaseMessage !== 'y' && uppercaseMessage !== 'y' && numericMessage === 'y' && specialMessage !== 'y') {
    result = alert('You have chosen numeric characters. You may want to choose more than one type of symbol for your password.')
    console.log('You have chosen numeric characters. You may want to choose more than one type of symbol for your password.')
    var passwordArray = arrNumeric
    console.log(passwordArray)
   
  }

  // 4 charater type included
  else if (lowercaseMessage !== 'y' && uppercaseMessage !== 'y' && numericMessage !== 'y' && specialMessage === 'y') {
    result = alert('You have chosen special characters. You may want to choose more than one type of symbol for your password.')
    console.log('You have chosen special characters. You may want to choose more than one type of symbol for your password.')
    var passwordArray = arrSpecial
    console.log(passwordArray)
  
  }

  // invalid response or no charater type included
  else if ((lowercaseMessage !== 'y' || lowercaseMessage !== 'n') || (uppercaseMessage !== 'y' || uppercaseMessage !== 'n')
    || (numericMessage !== 'y' || numericMessage !== 'n') || (specialMessage !== 'y' || specialMessage !== 'n')) {
    result = alert('Either you entered an invalid response, or you did not choose any symbols for your password. Please try again.')
    writePassword();
    
  }
  // generates password from chosen array and prints it to screen
  function generatePassword(length, passwordArray) {
    let password = "";
    for (let i = 0; i < length; i++) {
      password += passwordArray [(
        Math.floor(Math.random() * passwordArray.length)
      )]
      console.log(password);
    }

    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    return password;
  }

  generatePassword(length, passwordArray);
  console.log(generatePassword)
}
// button click event listener
generateBtn.addEventListener("click", writePassword);
