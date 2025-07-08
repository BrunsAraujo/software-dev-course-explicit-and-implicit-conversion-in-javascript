Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

TASK 1 ANSWER:
ORIGINAL CODE:
let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

ERRORS DISPLAYED WHEN CODE RAN:
The result is: 3
This is valid!
Total Age: 255
CHANGES MADE TO CODE
let age = 25; removed “ “
let totalAge = (`age` + 5); - added () and `` - the code here works because of implicit conversion. Javascript is getting “age” a string transforming into a number and adding to 5
console.log(age + totalAge); - here age 25 is added to total age 30 and the output is 55

RESPONSE WHEN CODE RAN
$ node explicit-and-implicit-conversion-in-javascript.js
The result is: 3
This is valid!
55

TASK 2 ANSWER:
IMPLICIT TYPE CONVERSION
let waiterRobot = `Hello`;

console.log(waiterRobot)

let iswaiterRobotServing = Boolean(waiterRobot);

console.log(iswaiterRobotServing);

let waiterRobotResting = null;

console.log(waiterRobotResting);

let iswaiterRobotResting = Boolean(waiterRobotResting)

console.log(iswaiterRobotResting)	

$ node main.js
Hello
true
null
false

EXPLICIT TYPE CONVERSION

let redCars = `36`;
let actualRedCars = Number(redCars);

console.log(typeof redCars);
console.log(typeof actualRedCars);

let actualRedCarsCrashed =`lemons`;

console.log(actualRedCarsCrashed);

let manyActualRedCarsCrashed = Boolean(actualRedCarsCrashed);

console.log(manyActualRedCarsCrashed)

$ node main.js
string
number
lemons
true
