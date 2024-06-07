// Return the quotient of x and y.
// Ex.:
//   divide(10, 2);
//   => 5
function divide(x, y) {
  return x / y
}

// Return the average of x and y.
// Here, the average of x and y is the *mean* of x and y. In other words, it's
// computed by dividing the sum of x and y by 2.
// Ex.:
//   average(10, 2);
//   => 6
function average(x, y) {
  return (x+y)/2
}

// Return true if x and y are mostly equivalent up to a tolerance of 0.001.
// In other words, return true if the aboslute value of x - y is less than 0.001.
// Ex.:
//   approximatelyEqual(10.001, 10);
//   => true
function approximatelyEqual(x, y) {
  return (x-y) <= .001 || (x-y) >= -.001
}

// Given a first name and last name, return a full name in the format "FIRST LAST"
// Ex.:
//   fullName('John', 'Doe');
//   => 'John Doe'
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`
}

// Generate the sentence "PERSON was drinking BEVERAGE at LOCATION" using the
// person, beverage and location provided.
// Ex.:
//   generateSentence('Kay', 'coffee', 'the local cafe');
//   => 'Kay was drinking coffee at the local cafe.'
function generateSentence(person, beverage, location) {
  return `${person} was drinking ${beverage} at ${location}.`
}

// Return the given string with all vowels replced with '*' characters.
// Ex.:
//   censorVowels('javascript');
//   => 'j*v*scr*pt'
function censorVowels(string) {
  const letters = string.split('')
  for (let i = 0; i < letters.length; i++){
    if (letters[i] === 'a' || letters[i] === 'e' || letters[i] === 'i' || letters[i] === 'o' || letters[i] === 'u'){
      letters[i] = '*'
    }
  }
  let stringNew = letters.join('')
  return stringNew
}

// Return the given string in sticky case.
// Ex.:
//   stickyCase('hello world');
//   => 'hElLo wOrLd'
function stickyCase(string) {
  const letters = string.split('')
  const stickyLetters = [];
  for (let i = 0; i < letters.length; i++){
    if (i % 2){
      stickyLetters.push(letters[i].toUpperCase());
    } else {
      stickyLetters.push(letters[i]);
    }
  }
  let stringNew = stickyLetters.join('')
  return stringNew
}

// Return the given string in leetspeak. Leetspeak is a modified version of
// English where characters are replaced by numbers or symbols. For this
// version of leetspeak, replace the following characters:
//   a => 4
//   e => 3
//   i => 1
//   o => 0
//   s => 5
//   t => 7
// Ex.:
//   leetspeak('javascript');
//   => 'j4v45cr1p7'
function leetspeak(string) {
  const letters = string.split('')
  for (let i = 0; i < letters.length; i++){
    if (letters[i] === 'a'){
      letters[i] = '4'
    }if (letters[i] === 'e'){
      letters[i] = '3'
    }if (letters[i] === 'i'){
      letters[i] = '1'
    }if (letters[i] === 'o'){
      letters[i] = '0'
    }if (letters[i] === 's'){
      letters[i] = '5'
    }if (letters[i] === 't'){
      letters[i] = '7'
    }
  }
  let stringNew = letters.join('')
  return stringNew
}

export {
  approximatelyEqual,
  average,
  censorVowels,
  divide,
  fullName,
  generateSentence,
  leetspeak,
  stickyCase,
};
