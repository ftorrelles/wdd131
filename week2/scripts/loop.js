const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

//Write a for loop that will iterate through the studentReport
// array and print to the console the current array value if it is below 30.

// for (let i = 0; i < studentReport.length; i++) {
//   if (studentReport[i] < LIMIT) {
//     console.log(studentReport[i]);
//   }
// }

//Repeat the previous programming snippet by using a while loop.
// while (studentReport.length > 0) {
//   let value = studentReport.shift();
//   if (value < LIMIT) {
//     console.log(value);
//   }
// }

studentReport.forEach((value) => {
  if (value < LIMIT) {
    console.log(value);
  }
});
///////////////////////////////////////

const n = 6; // number of days forward
// get output location on document to append within list
const output = document.getElementsByTagName("ul");
// Intl.DateTimeFormat Options
const options = { weekday: "long" }; // vs. short, etc.

// BEGIN
const today = new Date();
// TODAY test output
let todaystring = new Intl.DateTimeFormat("en-US", options).format(today);
document.getElementById("today").innerHTML = `Today is ${todaystring}. `;

// next n days
for (let i = 1; i <= n; i++) {
  let nextday = new Date();
  nextday.setDate(today.getDate() + i);
  let nextdaystring = new Intl.DateTimeFormat("en-US", options).format(nextday);
  item = document.createElement("li"); // list item
  item.textContent = nextdaystring;
  output[0].appendChild(item);
}
