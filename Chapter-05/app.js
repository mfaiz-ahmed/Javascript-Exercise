// Q.1

var num1 = 5 , num2 = 8;
console.log(num1 + num2);


// Q.2

var num1 = 5 , num2 = 8;
console.log(num2 - num1);


var num1 = 5 , num2 = 8;
console.log(num1 * num2);


var num1 = 5 , num2 = 8;
console.log(num1 / num2);


var num1 = 5 , num2 = 8;
console.log(num1 % num2);

// Q.4

var priceOfTicket = 500;
var noOfTickets = +prompt('Enter the Number Of Ticket');
console.log(priceOfTicket * noOfTickets);


// Q.5

function createTable (num){
    console.log("Table Of 2");
    console.log(2 + "x 1 = " + 2 * 1);
    console.log(2 + "x 2 = " + 2 * 2);
    console.log(2 + "x 3 = " + 2 * 3);
    console.log(2 + "x 4 = " + 2 * 4);
    console.log(2 + "x 5 = " + 2 * 5);
    console.log(2 + "x 6 = " + 2 * 6);
    console.log(2 + "x 7 = " + 2 * 7);
    console.log(2 + "x 8 = " + 2 * 8);
    console.log(2 + "x 9 = " + 2 * 9);
    console.log(2 + "x 10 = " + 2 * 10);
} 

createTable()

// Q.6

var temp = +prompt('Enter temperature in Celsius');
var formula = (temp * 9 / 5) +32 ;
console.log(formula); 

// Q.7

var item1 = 999;
var item2 = 1299;
var quantityOf1 = 3;
var quantityOf2 = 2;
var bill = (item1 * quantityOf1 + item2 * quantityOf2);
console.log("Price of item 1 is PKR 999 \n Quantity of item 1 is 3 \n Price of item 2 is PKR 1299 \n Quantity of item 2 is 2 \n Total Cost of your order is " + bill); 



// Q.8

var marksObtained = +prompt('Enter Your Marks');
var totalMarks = 980;
var percentage = marksObtained/totalMarks * 100;
console.log(percentage);

// Q.9

var usd = +prompt('Enter amount in USD');
var pkrconverter = (usd * 279.64);
console.log(pkrconverter);

// Q.10

var number = 7;
console.log(7 + 5 * 10 / 2);

// Q.11

var birthYear = +prompt('Enter your Birth Year');
var currentYear = 2024;
console.log("Your age is :" , currentYear - birthYear);

// Q.12

var radius = +prompt('Enter the radius of a circle');
var circumference = (2 * 3.142 * radius);
var area = (3.142 * radius * radius );
console.log("The Circumference of the circle is :" + circumference + " The area of the circle is :" + area );  

// Q.13

var snack = "Kurkure";
var age = 19;
var maxAge = 30;
var amount = 7;
var amountForLife = (maxAge - age)* amount;
 console.log("You will need "+ amountForLife + " to last you until the age of " + maxAge );

