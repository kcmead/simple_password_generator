// character groupings for password generation
var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numericChars = '0123456789';
var specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

function generatePassword() {
  const passwordLength = parseInt(prompt('Enter the password length (between 8 and 128 characters):'));

  // valid pw length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Password length must be between 8 and 128 characters.');
    return;
  }

  const includeLowercase = confirm('Include lowercase characters?');
  const includeUppercase = confirm('Include uppercase characters?');
  const includeNumeric = confirm('Include numeric characters?');
  const includeSpecial = confirm('Include special characters?');

  // has to include at least one character set
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert('I cannot make invisible passwords.  Please include characters.');
    return;
  }

  let characters = '';

  if (includeLowercase) {
    characters += lowercaseChars;
  }
  if (includeUppercase) {
    characters += uppercaseChars;
  }
  if (includeNumeric) {
    characters += numericChars;
  }
  if (includeSpecial) {
    characters += specialChars;
  }

  let password = '';

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  document.getElementById('password').value = password;
}


document.getElementById('generate').addEventListener('click', generatePassword);
