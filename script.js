// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var length = ''
var lowercase = ''
var uppercase = ''
var numeric = ''
var special = ''




// Write password to the #password input
function writePassword() {

  length = prompt ('how many characters do you want in your password?', '8-128')
  var lengthMessage = (length)
  
  if (lengthMessage > 128) {
    result = alert('Invalid response')
    console.log('Invalid response')
  }
  else if (lengthMessage < 8) {
    result = alert('Invalid response')
    console.log('Invalid response')
  }
  else (lengthMessage > 7, lengthMessage < 129)
    result = alert('You chose ' + lengthMessage + ' characters.')
    console.log('Length of password is', lengthMessage, 'characters')
    
    lowercase = prompt ('Do you want lowercase characters in your password?','y/n')
    var lowercaseMessage = (lowercase)
    
  if (lowercaseMessage === 'y') {
      result = alert('You want lowercase characters')
      console.log('You want lowercase characters')
    }
  else if (lowercaseMessage === 'n') {
      result = alert('You do not want lowercase characters')
      console.log('You do not want lowercase characters')
    }
  else if (lowercaseMessage !== 'y') {
    result = alert('Invalid response')
    console.log('Invalid response')
  }
  else if (lowercaseMessage !== 'n') {
    result = alert('Invalid response')
    console.log('Invalid response')
  }
  
  uppercase = prompt ('Do you want uppercase characters in your password?','y/n')
  var uppercaseMessage = (uppercase)
  
  if (uppercaseMessage === 'y') {
    result = alert('You want uppercase characters')
    console.log('You want uppercase characters')
  }
  else if (uppercaseMessage === 'n') {
    result = alert('You do not want uppercase characters')
    console.log('You do not want uppercase characters')
  }
  else if (uppercaseMessage !== 'y') {
  result = alert('Invalid response')
  console.log('Invalid response')
  }
  else if (uppercaseMessage !== 'n') {
  result = alert('Invalid response')
  console.log('Invalid response')
  }
  
  numeric = prompt ('Do you want numeric symbols in your password?','y/n')
  var numericMessage = (numeric)
  
  if (numericMessage === 'y') {
    result = alert('You want numeric symbols')
    console.log('You want numeric symbols')
  }
  else if (numericMessage === 'n') {
    result = alert('You do not want numeric symbols')
    console.log('You do not want numeric symbols')
  }
  else if (numericMessage !== 'y') {
  result = alert('Invalid response')
  console.log('Invalid response')
  }
  else if (numericMessage !== 'n') {
  result = alert('Invalid response')
  console.log('Invalid response')
  }
  special = prompt ('Do you want special symbols in your password?','y/n')
  var specialMessage = (special)
  
  if (specialMessage === 'y') {
    result = alert('You want special symbols')
    console.log('You want special symbols')
  }
  else if (specialMessage === 'n') {
    result = alert('You do not want special symbols')
    console.log('You do not want special symbols')
  }
  else if (specialMessage !== 'y') {
  result = alert('Invalid response')
  console.log('Invalid response')
  }
  else if (specialMessage !== 'n') {
  result = alert('Invalid response')
  console.log('Invalid response')
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
