/* number */
let x;
x = 100;

let age = 25;
let price = 10.99;

/* strings */
let firstname = "Ikhlaas";

/* Boolens*/
let online = true;

console.log(x);
console.log(typeof(x));

console.log(age);
console.log(typeof(age));

console.log(price);
console.log(typeof(price));

console.log(`you are ${age} years old`);
console.log(`price = RS${price}`);

console.log(firstname);
console.log(typeof(firstname));

console.log(online);
console.log(typeof(online));
console.log(`Ikhlaas is online: ${online}`);

// Now outputing on website:

let fullname = "ikhlaas";
let age1 = 22;
let student = true;

document.getElementById("p1").textContent = `Your name is ${fullname}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${student}`;

