// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

greaterNum = function (num1,num2) {
	if (num1>num2){
		return("The greater number of" + " " + num1 + " " + "and" + " " +num2 + " " + "is" + " " + num1);
	}
	else if (num1==num2) {
		return("the numbers are tie");
	}
		else {
			return("The greater number of" + " " + num2 + " " + "and" + " " +num1 + " " + "is" + " " + num2);
	}
}

greaterNum(10,2)
greaterNum(-1,1)
// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

helloWorld = function (code) {

	if (code =="en"){
		return "Hello, World"
	}
	else if (code=="de") {
		return "Hallo Welt";
	}

	else if (code=="es") {
		return "hola mundo";
	}
		else {
			return "choose either en, de, or es in your code";
	}
}
helloWorld ("en")
helloWorld ("de")
helloWorld ("es")
helloWorld ("fjeiowjfeow")



// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

assignGrade = function (numberScore) {

	if (numberScore >=80 && numberScore<= 100){
		return "A";
	}
	else if (numberScore >=70 && numberScore<=79 ){
		return "B";
	}

	else if (numberScore >=60 && numberScore<=69 ){
		return "C";
	}

	else if (numberScore >=50 && numberScore<=59 ){
		return "D";
	}
	else if (numberScore >=0 && numberScore<=49 ){
		return "F";
	}
		else {
			return "choose the appropriate grade within 0-100";
	}
}

assignGrade(90);
assignGrade(54);
assignGrade(-1);
// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

pluralize = function (noun, number) {

	if (number > 1){
		return number + " " + noun +"s";
	}

	else if (number < 1){
		return "Not Applicable";
	}

	else if (noun == "geese" && noun == "sheep"){
		return number + " " + noun;
	}
		else {
			return "1" + " "+ noun;
	}
}


