var welcomeName = prompt('Hello, what is your name?');
console.log('User name: ' + welcomeName);

alert('Welcome to my webpage, ' + welcomeName + '! I\'m going to ask you a few questions to help you learn more about me! Please type y or n to answer.');

/* Asks user to answer and changes answer to uppercase, storing it in the variable questionOneUser */
var questionOneUser = prompt('My favorite food is sushi. (y/n)').toUpperCase();
console.log('User Answer: ' + questionOneUser);
var questionOneAnswer = 'Y';

if (questionOneUser === questionOneAnswer) {
  alert('Great job! You guessed correctly!');
}
else {
  alert('Nope, that\'s not right.');
}

var questionTwoUser = prompt('My favorite color is orange. (y/n)').toUpperCase();
console.log('User Answer: ' + questionTwoUser);
var questionTwoAnswer = 'N';

if (questionTwoUser === questionTwoAnswer) {
  alert('Great job! You guessed correctly!');
}
else {
  alert('Nope, that\'s not right.');
}

var questionThreeUser = prompt('I am a unicorn (y/n)').toUpperCase();
console.log('User Answer: ' + questionThreeUser);
var questionThreeAnswer = 'Y';

if (questionThreeUser === questionThreeAnswer) {
  alert('Great job! You guessed correctly!');
}
else {
  alert('Nope, that\'s not right.');
}

var questionFourUser = prompt('I was born in Seattle. (y/n)').toUpperCase();
console.log('User Answer: ' + questionFourUser);
var questionFourAnswer = 'Y';

if (questionFourUser === questionFourAnswer) {
  alert('Great job! You guessed correctly!');
}
else {
  alert('Nope, that\'s not right.');
}

var questionFiveUser = prompt('I enjoy long walks on the beach. (y/n)').toUpperCase();
console.log('User Answer: ' + questionFiveUser);
var questionFiveAnswer = 'Y';

if (questionFiveUser === questionFiveAnswer) {
  alert('Great job! You guessed correctly!');
}
else {
  alert('Nope, that\'s not right.');
}

var questionSixUser = prompt('Coding bores me (y/n)').toUpperCase();
console.log('User Answer: ' + questionSixUser);
var questionSixAnswer = 'N';

if (questionSixUser === questionSixAnswer) {
  alert('Great job! You guessed correctly!');
}
else {
  alert('Nope, that\'s not right.');
}
