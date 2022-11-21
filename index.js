// Code your solutions in this file
names = ["Guadalupe","Ollie","Aki"];

function writeCards(names) {
  let messages = [];
  names.forEach((name, index) => {
    messages.push("Thank you, " + name +", for the wonderful surprise gift!");
  });
  return messages;
}
function countDown(number){
  while (number >= 0){
    console.log(number);
    number--;
 }
} 







