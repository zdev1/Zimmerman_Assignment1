/*eslint-env browser*/

// STEP 1
 
varSomemonth
functionTheMonth
varCurrentmonth
varSummermonth
varMylibraryfunction

// STEP 2

4.5 - numeric literal expression
"Hello!" - String literal expression
False - Boolean literal expression
null - null literal expression

// STEP 3
var anExpression = 5 * (2 / 3) + 8;
var aSecondExpression = Math.PI * radius * radius;
var aThirdExpression = aSecondExpression + "%" + anExpression;
var aFourthExpression = "(" + aSecondExpression + ") % (" + anExpression + ")";

// STEP 4
First Name         - var firstName
Last Name          - var lastName
Address            - var address
City               - var inner_city
State              - var inner_state
Zip Code           - var zipCode
Your Age           - var your_age
Referral Source    - var referralSource
May We Contact You - var mayWeContactYou

// STEP 5

- var firstName

  var firstName;
  var isMyName;
  firstName = "John";
  isMyName = true;

  var firstName = "John";
  var isMyName = true;

  var firstName = "John", isMyName = true;

- var lastName
  
  var lastName;
  var isMyLastName;
  lastName = "Zimmerman";
  isMyLastName = true;

  var lastName = "Zimmerman";
  var isMyLastName = "true";

  var lastName = "Zimmerman", isMyLastName = true;

- var address

  var address;
  var isMyAddress;
  address = "hogan"
  isMyAddress = true;

  var address = "hogan";
  var isMyAddress = true;

  var address = "hogan", isMyAddress = true;

- var inner_city
 
  var inner_city;
  var isMyCity;
  inner_city = "sandiego";
  isMyCity = true;

  var inner_city = "sandiego";
  var isMyCity = "true";

  var inner_city = "sandiego", isMyCity = true;

- var inner_state

  var inner_state;
  var isMyState;
  inner_state = "california";
  isMyState = true;

  var inner_state = "california";
  var isMyState = "true";
  
  var inner_state = "california", isMyState = true;


- var zipCode

  var zipCode;
  var isMyZipCode;
  zipCode = "92139";
  isMyZipCode = true;

  var zipCode = "92139";
  var isMyZipCode = "true";

  var zipCode = "92139", isMyZipCode = true;
  

- var your_age

  var your_age;
  var isMyAge;
  your_age = "35";
  isMyAge = true;

  var your_age = "35";
  var isMyAge = true;

  var your_age = "35", isMyAge = "true";


- var referralSource

  var referralSource;
  var isTheSource;
  referralSource = "Tim";
  isTheSource = true;

  var referralSource = "Tim";
  var isTheSource = true;

  var referralSource = "Tim", isTheSource = true;


- var mayWeContactYou

  var mayWeContactYou;
  var ofCourse;
  mayWeContactYou = "yes";
  ofCourse = true;

  var mayWeContactYou = "yes";
  var ofCourse = true;

  var mayWeContactYou = "yes", ofCourse = true;


// STEP 6

var yearsMarried = 6;
window.console.log ("John has been married for " + yearsMarried + "years.");


// STEP 7

var correctPhrase = true;
window.console.log ("John has mastered HTML, CSS and is learning Javascript is" + correctPhrase +"." )

var correctNumber = true;
window.console.log ("10 > 7 is" + correctNumber + "because 10 is greater than 2")


// STEP 8

 var someString = ("Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.");
 window.console.log(someString);


// STEP 9

// null value
var x = 265;
var y = null;
x = null;
window.console.log(x);
window.console.log(y);

// undefined value
var y;
window.console.log(y);


// STEP 10

var x = 12345;
console.log(typeof x) // number

var x = 'string';
console.log(typeof x) // string

var x = { key: 'value' };
console.log(typeof x) // Boolean

(typeof(x) === 'undefined') {
console.log('variable x is not defined'); // undefined
}

// STEP 11
var Name = "John Zimmerman";
alert("Hello " + "Name," + "welcome to Javascript class!");     

// STEP 12

var name = "John Zimmerman";
alert("Hello " + name + ", welcome to Javascript class!");


// STEP 13

 var course = "Javascript";
 alert("Hello " + name + ", welcome to" + course + " class!");


// STEP 14

 alert("Hello " + name + '\n' + "Welcome to" + course + " class!");

// STEP 15

 var name = prompt("What is your name?");


// STEP 16

var course = prompt("What class are you taking?");


// STEP 17

var x = 10;
var y = 20;
window.console(x + y);


// STEP 18

 var x = 20;
 window.console(x + 20);


// STEP 19

 var x = 20;
 window.console(x * 5);


// STEP 20

 var x = 20 % 3;
 window.console(x / 1);


// STEP 21

 var x = 15;
 window.console(x > 10);

// STEP 22

 window.console ('yellow' === 'green') && (4 >= 4);


// STEP 23

var widget = new Object();
console.log(typeof widget) 

// STEP 24 

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);


// STEP 25

 function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var auto = new String('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
