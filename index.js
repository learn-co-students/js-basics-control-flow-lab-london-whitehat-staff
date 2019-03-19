// Write your code in this file!
function scuberGreetingForFeet(someNumber) {
  let greeting
  if (someNumber <= 400) {
    greeting = 'This one is on me!';
  } else if (someNumber >= 2500) {
    greeting = 'No can do.';
  } else {
    greeting = 'I will gladly take your thirty bucks.';
  }
  return greeting
}

function ternaryCheckCity(someCity) {
  let greeting
  switch (someCity) {
    case 'NYC':
      greeting = 'Ok, sounds good.';
      break;
  
    default:
      greeting = 'No go.';
      break;
  }
  
  return greeting
}

function switchOnCharmFromTip(someTip) {
  let greeting
  switch (someTip) {
    case 'generous':
      greeting = 'Thank you so much.';
      break;

    case 'not as generous':
      greeting = 'Thank you.';
      break;
  
    default:
      greeting = 'Bye.';
      break;
  }
  
  return greeting
}