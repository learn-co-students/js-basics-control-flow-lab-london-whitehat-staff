// Write your code in this file!
const scuberGreetingForFeet = (ride) => {
  if(ride <= 400){
    return 'This one is on me!'
  }
  else if(ride > 2000 && ride < 2500){
    return 'I will gladly take your thirty bucks.'
  }
  else if (ride > 2500) {
    return 'No can do.'
  }
};


const ternaryCheckCity = city => city === 'NYC' ? 'Ok, sounds good.' : 'No go.';

const switchOnCharmFromTip = (tip) => {
  if (tip === 'generous') {
    return 'Thank you so much.'
  }
  if(tip === 'not as generous') {
    return 'Thank you.'
  }
  if(tip === 'thanks for everything') {
    return 'Bye.'
  }
};
