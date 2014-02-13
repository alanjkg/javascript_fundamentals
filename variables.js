// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var childnum = 3;
var wife = "Amber Heard";
var place = "Toronto";
var jobtitle = "Software Developer";
console.log("You will be a " + jobtitle +" " + "in" + " " + place + ", and married to" + " "+ wife + " " + "with" + " " + childnum + " " + "kids.");
// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentyear = 2014;
var birthyear = 1989;
var agev1 = currentyear - birthyear;
var agev2 = agev1-1;
console.log("They are either" + " " +agev2 + " " + "or" + " " + agev1);

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentage = 24;
var maxage = 100;
var foodperday = 2;
var maximilian = ((maxage - currentage)*365)*foodperday;
console.log("You will need" +" "+maximilian+ " "+ "to last you until the ripe old age of" + " " + maxage );
// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 15;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * radius * radius;
console.log("the area is" + " " + area);

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var tempc = 30;
var tempf = tempc * (9/5) + 32;
console.log(tempc + "°C" + " " +"is" + " " + tempf + "°F");

var fahrenheit = 0;
var celsius = (fahrenheit-32) * 5/9;

console.log(fahrenheit + "°F" + " " +"is" + " " + celsius + "°C")



