// Q.1

var num = +prompt('Enter a Number');

if(num % 3 === 0 ){
    console.log(num % 3);
}else{console.log("Given Number is not divisible by 3");}


// Q.2

var number = +prompt('Enter a Number');

if(number % 2 === 0){
    console.log('This is an even number');
}else{
    console.log('This is an odd number');
}


// Q.3

var age = +prompt('Enter Your Age');

if(age>18){
    console.log('Old Enough');
}else{console.log('Too Young');}


// Q.4

var firstName = prompt('Enter your Name');

if(firstName === 'Faiz'){
    console.log('Welcome to My Website');
}
else{console.log();}


// Q.5

var num = +prompt('Enter a Number');

if(num % 3 === 0 ){
    console.log("Given Number is divisible by 3");
}else{console.log("Given Number is not divisible by 3");}


// Q.7

var num1 = +prompt('Enter first number');
var num2 = +prompt('Enter second number');
var symbol = prompt('Enter an arithmetic operators');

function calculator(num1 , num2 , symbol){

    if(symbol != '+' || symbol != '-' || symbol != '/' || symbol != '*' || symbol != '%' ){
        console.log('Calculation is not possible');
    }else{
        console.log('Calculation is possible');
    }
}   
calculator(num1 , num2 , symbol)


// Q.10

var correctPassword = 'mai nhi bataunga';

var password = prompt('Enter the password');

if(password===correctPassword){
    console.log('Correct!');
}


else if(password!=correctPassword){
    console.log('Incorrect Password');
}


// Q.11

var myName = "Faiz";
var names = prompt('Enter Your Name');

if(names===myName){
    console.log('Hello Faiz!');
}
else{
    console.log('You are not Faiz');
}

// Q.12

var hour = +prompt('Enter Time');

if(hour<18){
    console.log('Good Day');
}
else{
    console.log('Good Evening');
}

// Q.13

var num1 = +prompt('Enter first number');
var num2 = +prompt('Enter second number');

 if(num1 > num2 ){
    console.log('First number is greater');
}
else if(num1 < num2){
    console.log('Second number is greater');
}
else if (num1 = num2){
    console.log('Equal');
}



// Q.14

var num = +prompt('Enter a Number');

if(num === +num){
    console.log('Positive');
}
else if(num === -num){
    console.log('Negative');
}
else{
    console.log('Zero');
}


// Q.16

var value = prompt('Enter a value');
console.log(typeof 'value'  );





// Q.17

var vowel = prompt('Enter any Character');
if(vowel.length>1){
    console.log('Give a single Character');
}
else if(vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u'){
    console.log('Yes, It is a Vowel');
}else{console.log('No, It is not a Vowel');}



// Q.18

console.log(10 !== 8);

// Q.19

var birthMonth = prompt('Enter your Birht Month');

if(birthMonth == 1){
    alert("January");
}
else if(birthMonth == 2){
    alert("Feburary");
}
else if(birthMonth == 3){
    alert("March");
}
else if(birthMonth == 4){
    alert("April");
}
else if(birthMonth == 5){
    alert("May");
}
else if(birthMonth == 6){
    alert("June");
}
else if(birthMonth == 7){
    alert("July");
}
else if(birthMonth == 8){
    alert("August");
}
else if(birthMonth == 9){
    alert("September");
}
else if(birthMonth == 10){
    alert("October");
}
else if(birthMonth == 11){
    alert("November");
}
else if(birthMonth == 12){
    alert("December");
}
else{
    alert('This is not a Month')
}