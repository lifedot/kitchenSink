//This is my name//
let firstName = "Donald";
//constant set to number of US states
const numStates = 50;
// Adding two numbers
let sum1 = 5 + 4;

/*This code does not do much.*/

// function sayHello() {
//   alert("Hello World!");
// }
// sayHello();

function checkAge(name, age) {
  if (age < 21) {
    alert("Sorry " + name + " you aren't old enough to view this page!");
  }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let favVeggies = ["Squash", "Cauliflower", "Collard Greens", "Broccoli"];

for (let i = 0; i < favVeggies.length; i++) {
  console.log(favVeggies[i]);
}

let pet = {
  name: "Mikey",
  breed: "Pomeranian",
};
console.log(pet.name, pet.breed);

let nameAge = [
  ({ name: "Johnny", age: 20 }),
  ({ name: "Donna", age: 22 }),
  ({ name: "Lisa", age: 19 }),
  ({ name: "Rachel", age: 29 }),
  ({ name: "Tommy", age: 28 }),
];
for (let index = 0; index < nameAge.length; index++) {
    checkAge(nameAge[index].name, nameAge[index].name);
    
}
// console.log(nameAge);
function getLength(word) {
   return word.length;
}

let wordlength = getLength("Hello World!");

if (wordlength % 2 ==0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!")
}

