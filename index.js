function scuberGreetingForFeet(distance){
  // Write your code here!
  switch (true) {
    case distance <= 400: 
      return "This one is on me!";
      break;
    case distance <= 2000: 
      return 'That will be twenty bucks.'; 
      break; 
    case distance <= 2500: 
      return 'I will gladly take your thirty bucks.'; 
      break; 
    case distance > 2500: 
      return 'No can do.'; 
      break;
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return (city == 'NYC'? "Ok, sounds good." : "No go.")
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case "generous": 
      return "Thank you so much."; 
      break;
    case "not as generous": 
      return "Thank you."; 
      break; 
    default: 
      return "Bye."
  }
}