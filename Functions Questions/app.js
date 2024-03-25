// Q.1

function helloWorld(){
    console.log('Hello World1');
    console.log('Hello World2');
    console.log('Hello World3');
    console.log('Hello World4');
    console.log('Hello World5');
}

helloWorld()
helloWorld()

// Q.3

function greetUser(){
    console.log('Hello ' + firstName + ' '+ lastName);
}

var firstName = prompt('Enter your First Name');
var lastName = prompt('Enter your Last Name');

greetUser()

// Q.4 

function sum(){
        console.log(num1 + num2);
}

var num1 = +prompt('Enter First Number');
var num2 = +prompt('Enter Second Number');

sum()

// Q.5

function calculator(num1 , num2 , symbol){
        console.log(num1 + symbol + num2);
}

var num1 = +prompt('Enter First Number');
var num2 = +prompt('Enter Second Number');
var symbol = prompt('Enter Arithmetic Operator');


calculator(num1 , num2 , symbol)


// Q.6


function squaring(){
    console.log( num * num);
}

var num = +prompt('Enter a Number')

squaring()


// Q.12

function rectangle(){
    console.log('The Area of the Rectangle is ' + width * height);
}

var width = +prompt('Enter width of the rectangle');
var height = +prompt('Enter height of the rectangle');

rectangle()

// Q.16

function cubing(){
    console.log(number * number * number);
}

var number = +prompt('Enter a Number');

cubing()



// Q.26

function ageCalculator(){
    console.log('Your age is',currentYear - birthYear);
}


var birthYear = +prompt('Enter your Birth Year');
var currentYear = 2024;

ageCalculator()


// Q.28

function circle(){
    console.log('The Circumference of the circle is ' + circumference);
    console.log('The Area of the circle is ' + area);
}

var radius = +prompt('Enter the radius of the Circle');
var circumference = 2 * 3.142 * radius;
var area = 3.142 * (radius * radius);


circle()


// Q.29

function temperatureConverter(){
    console.log(converter);
}

var tempInCelsius = +prompt ('Enter the temperature in Celsius');
var converter = (9/5) * tempInCelsius +32;

temperatureConverter()

