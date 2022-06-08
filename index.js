function scuberGreetingForFeet(someNumber) {
  // Write your code here!
  if (someNumber <= 400) {
    return "This one is on me!";
  } else if (someNumber > 400 & someNumber <= 2000) {
    return "That will be twenty bucks."
  } else if (someNumber > 2500) {
    return "No can do."
  } else if (someNumber > 2000 & someNumber <= 2500) {
    return "I will gladly take your thirty bucks."
  }
}

function ternaryCheckCity(someString) {

  return someString == 'NYC' ? "Ok, sounds good." : "No go.";

}
// Write your code here!


function switchOnCharmFromTip(someString) {
  // Write your code here!
  switch (someString) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
      break;
  }
}
