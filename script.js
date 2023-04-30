// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var length = ''
var lowercase = ''
var uppercase = ''
var numeric = ''
var special = ''
const arrLowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const arrUppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const arrNumeric = ['0','1','2','3','4','5','6','7','8','9']
const arrSpecial = ['!','@','#','$','%','&','?']



// Write password to the #password input
function writePassword() {

  length = prompt ('how many characters do you want in your password?', '8-128')
  var lengthMessage = (length)
  
  if (lengthMessage > 128) {
    result = alert('Invalid response')
    console.log('Invalid response')
    writePassword();
    return
  }
  else if (lengthMessage < 8) {
    result = alert('Invalid response')
    console.log('Invalid response')
    writePassword();
    return
  }
  else (lengthMessage > 7, lengthMessage < 129)
    result = alert('You chose ' + lengthMessage + ' characters.')
    console.log('Length of password is', lengthMessage, 'characters.')
    
    lowercase = prompt ('Do you want lowercase characters in your password?','y/n')
    var lowercaseMessage = (lowercase)
    
  if (lowercaseMessage === 'y') {
      result = alert('You want lowercase characters.')
      console.log('You want lowercase characters.')
    }
    
  else if (lowercaseMessage === 'n') {
      result = alert('You do not want lowercase characters.')
      console.log('You do not want lowercase characters.')
    }

  else if (lowercaseMessage !== 'y') {
    result = alert('Invalid response.')
    console.log('Invalid response.')
  }

  else if (lowercaseMessage !== 'n') {
    result = alert('Invalid response.')
    console.log('Invalid response.')
  }
  
  uppercase = prompt ('Do you want uppercase characters in your password?','y/n')
  var uppercaseMessage = (uppercase)
  
  if (uppercaseMessage === 'y') {
    result = alert('You want uppercase characters.')
    console.log('You want uppercase characters.')
  }
  else if (uppercaseMessage === 'n') {
    result = alert('You do not want uppercase characters.')
    console.log('You do not want uppercase characters.')
  }
  else if (uppercaseMessage !== 'y') {
  result = alert('Invalid response.')
  console.log('Invalid response.')
   
  }
  else if (uppercaseMessage !== 'n') {
  result = alert('Invalid response.')
  console.log('Invalid response.')
   
  }
  
  numeric = prompt ('Do you want numeric symbols in your password?','y/n')
  var numericMessage = (numeric)
  
  if (numericMessage === 'y') {
    result = alert('You want numeric symbols.')
    console.log('You want numeric symbols.')
  }
  else if (numericMessage === 'n') {
    result = alert('You do not want numeric symbols.')
    console.log('You do not want numeric symbols.')
  }
  else if (numericMessage !== 'y') {
  result = alert('Invalid response.')
  console.log('Invalid response.')
   
  }
  else if (numericMessage !== 'n') {
  result = alert('Invalid response.')
  console.log('Invalid response.')
    
  }
  special = prompt ('Do you want special symbols in your password?','y/n')
  var specialMessage = (special)
  
  if (specialMessage === 'y') {
    result = alert('You want special symbols.')
    console.log('You want special symbols.')
  }
  else if (specialMessage === 'n') {
    result = alert('You do not want special symbols.')
    console.log('You do not want special symbols.')
  }
  else if (specialMessage !== 'y') {
  result = alert('Invalid response.')
  console.log('Invalid response.')
    
  }
  else if (specialMessage !== 'n') {
  result = alert('Invalid response.')
  console.log('Invalid response.')
    
  }
  // all 4 works
  if (lowercaseMessage === 'y' && uppercaseMessage === 'y' && numericMessage === 'y' && specialMessage === 'y')
  {
    const passwordArray = arrLowercase.concat(arrUppercase,arrNumeric,arrSpecial);
    console.log(passwordArray)
    return passwordArray
  }
// 1,2,3 works
  else if (lowercaseMessage === 'y' && uppercaseMessage === 'y' && numericMessage === 'y' && specialMessage !== 'y')
  {
    const passwordArray = arrLowercase.concat(arrUppercase,arrNumeric);
    console.log(passwordArray)
    return passwordArray
  }
// 1,2,4 works
  else if (lowercaseMessage === 'y' && uppercaseMessage === 'y' && numericMessage !== 'y' && specialMessage === 'y')
  {
    const passwordArray = arrLowercase.concat(arrUppercase,arrSpecial);
    console.log(passwordArray)
    return passwordArray
  }  
// 1,3,4 works
  else if (lowercaseMessage === 'y' && uppercaseMessage !== 'y' && numericMessage === 'y' && specialMessage === 'y')
  {
    const passwordArray = arrLowercase.concat(arrNumeric,arrSpecial);
    console.log(passwordArray)
    return passwordArray
  }  

  // 2,3,4 works
  else if (lowercaseMessage !== 'y' && uppercaseMessage === 'y' && numericMessage === 'y' && specialMessage === 'y')
  {
    const passwordArray = arrUppercase.concat(arrNumeric,arrSpecial);
    console.log(passwordArray)
    return passwordArray
  }  

  // 1,2 works
  else if(lowercaseMessage === 'y' && uppercaseMessage === 'y' && numericMessage !== 'y' && specialMessage !== 'y')
  {
    const passwordArray = arrLowercase.concat(arrUppercase);
    console.log(passwordArray)
    return passwordArray
  }

  // 1,3 works
  else if(lowercaseMessage === 'y' && uppercaseMessage !== 'y' && numericMessage === 'y' && specialMessage !== 'y')
  {
    const passwordArray = arrLowercase.concat(arrNumeric);
    console.log(passwordArray)
    return passwordArray
  }

  // 1,4 Works
  else if(lowercaseMessage === 'y' && uppercaseMessage !== 'y' && numericMessage !== 'y' && specialMessage === 'y')
  {
    const passwordArray = arrLowercase.concat(arrSpecial);
    console.log(passwordArray)
    return passwordArray
    
  }

  // 2,3 works
  else if(lowercaseMessage !== 'y' && uppercaseMessage === 'y' && numericMessage === 'y' && specialMessage !== 'y')
  {
    const passwordArray = arrUppercase.concat(arrNumeric);
    console.log(passwordArray)
    return passwordArray
    
  }

  // 2,4 works
  else if(lowercaseMessage !== 'y' && uppercaseMessage === 'y' && numericMessage !== 'y' && specialMessage === 'y')
  {
    const passwordArray = arrUppercase.concat(arrSpecial);
    console.log(passwordArray)
    return passwordArray
    
  }

  // 3,4 
  else if(lowercaseMessage !== 'y' && uppercaseMessage !== 'y' && numericMessage === 'y' && specialMessage === 'y')
  {
    const passwordArray = arrNumeric.concat(arrSpecial);
    console.log(passwordArray)
    return passwordArray
    
  }

  // 1
  else if(lowercaseMessage === 'y' && uppercaseMessage !== 'y' && numericMessage !== 'y' && specialMessage !== 'y') {
    result = alert('You may want to choose more than one type of symbol for your password.')
    const passwordArray = arrLowercase
    console.log(passwordArray)
    return passwordArray
  }

  // 2
  else if(lowercaseMessage !== 'y' && uppercaseMessage === 'y' && numericMessage !== 'y' && specialMessage !== 'y') {
    result = alert('You may want to choose more than one type of symbol for your password.')
    const passwordArray = arrUppercase
    console.log(passwordArray)
    return passwordArray
  }

  // 3
  else if(lowercaseMessage !== 'y' && uppercaseMessage !== 'y' && numericMessage === 'y' && specialMessage !== 'y') {
    result = alert('You may want to choose more than one type of symbol for your password.')
    const passwordArray = arrNumeric
    console.log(passwordArray)
    return passwordArray
  }

  // 4
  else if(lowercaseMessage !== 'y' && uppercaseMessage !== 'y' && numericMessage !== 'y' && specialMessage === 'y') {
    result = alert('You may want to choose more than one type of symbol for your password.')
    const passwordArray = arrSpecial
    console.log(passwordArray)
    return passwordArray
  }

  // invalid response or none chosen
  else if(lowercaseMessage !== 'y' && uppercaseMessage !== 'y' && numericMessage !== 'y' && specialMessage !== 'y') {
    result = alert('Either you entered an invalid response, or you did not choose any symbols for your password. Please try again.')
    writePassword();
    return
  }
  

  



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
