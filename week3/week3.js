let firstName = "Antonia";
let lastName = "Francesca";

function fullName(first, last) {
  return `${first} ${last}`;
}

console.log(fullName(firstName, lastName));

const fullNameArrow = (first, last) => `${first} ${last}`;

console.log(fullNameArrow(firstName, lastName));

let scores = [100, 72, 83, 94, 88, 87];
let accumulator = 0;
let count = 0;
scores.forEach((score) => {
  if (score > 87) {
    accumulator += score;
    count++;
  }
});
if (count > 0) {
  console.log(accumulator / count);
} else {
  console.log("No scores reported.");
}
