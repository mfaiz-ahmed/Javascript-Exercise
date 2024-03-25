// Q.1

// const firstName = prompt('Enter your First Name');
// const lastName = prompt('Enter your Last Name');
// const names = document.querySelector('.name')
// const fullName = firstName.concat (' ' + lastName)

// names.innerHTML = `Hello! ${fullName} , Welcome to my Website`;


// Q.2

// const phoneInput = prompt('Write the name of your favorite phone');
// const phone = document.querySelector('.phone');
// const string = document.querySelector('.string');


// phone.innerHTML = phoneInput;
// string.innerHTML = phoneInput.length 


// Q.3

    // const nWord = prompt('Enter the "N" Word');
    // const string = document.querySelector('.string');
    // const index = document.querySelector('.index');

    // string.innerHTML = nWord
    // index.innerHTML = nWord.indexOf("n");

// Q.4

// const word = 'Hello World';
// const wordSpan = document.querySelector('.string-span')
// const indexSpan = document.querySelector('.index-span')

// wordSpan.innerHTML = word 
// indexSpan.innerHTML = word.lastIndexOf('l');

// Q.5

// const word = 'Pakistan';
// const string = document.querySelector('.string');
// const index3 = document.querySelector('.index-3');

// string.innerHTML = word;
// index3.innerHTML = word.charAt(3)


// Q.6

    // const firstName = prompt('Enter your First Name');
    // const lastName = prompt('Enter your Last Name');
    // const names = document.querySelector('.name');

    // names.innerHTML = `Hello ${firstName.concat(lastName)} , Welcome to my Website`;



// Q.7

    // const cityEnd = 'abad'
    // const city = 'Hyder'
    // const replacemntCity = 'Islam';
    // const citySpan = document.querySelector('.city-span');
    // const replacementSpan = document.querySelector('.replacement-span');

    // citySpan.innerHTML = city.concat(cityEnd);
    // replacementSpan.innerHTML = replacemntCity.concat(cityEnd);


// Q.8


    // const message = 'Ali and Sami are best friends. They play cricket and football together.'
    // const messageBox = document.querySelector('.message-box')
    // const replacementBox = document.querySelector('.replacement-box')

    // messageBox.innerHTML = message
    // replacementBox.innerHTML = message.replaceAll('and' , '&')


// Q.9

// const value = 472;
// const value1 = document.querySelector('.value-1');
// const value2 = document.querySelector('.value-2');
// const type1 = document.querySelector('.type-1');
// const type2 = document.querySelector('.type-2');

// value1.innerHTML = value.toString()
// type1.innerHTML = typeof(value.toString())
// value2.innerHTML = value
// type2.innerHTML = typeof(value)

// Q.11

// const input = prompt('Write a word');
// const inputSpan = document.querySelector('.input-span');
// const upperCase = document.querySelector('.uppercase-span');

// inputSpan.innerHTML = input;
// upperCase.innerHTML = input.toUpperCase();

// Q.12

// const input = prompt('Write a word');
// const inputSpan = document.querySelector('.input-span');
// const lowerCase = document.querySelector('.lowercase-span');

// inputSpan.innerHTML = input;
// lowerCase.innerHTML = input.toLowerCase();


// Q.13

// const input = prompt('Write a word');
// const inputSpan = document.querySelector('.input-span');
// const titleCase = document.querySelector('.titlecase-span');

// inputSpan.innerHTML = input;

//     for (let i = 0; i < input.length; i++) {
//         const capital = input.toUpperCase().slice(0 , 1);
//         console.log (capital + input.slice(1, 100));
//     }
// titleCase.innerHTML = capital + input.slice(1 , 100); 


// Q.14

// const num = '35.36' ;
// const numberSpan = document.querySelector('.number-span');
// const resultSpan = document.querySelector('.result-span');


// numberSpan.innerHTML = num;

// resultSpan.innerHTML = num.replace('.' , '')

// Q.15

// const num1 = '3';
// const num2 = '3'; 
// const numA = document.querySelector('.num-a')
// const numB = document.querySelector('.num-b')
// const result = document.querySelector('.result')

// numA.innerHTML = num1
// numB.innerHTML = num2
// result.innerHTML = num1 + num2;

// Q.16

// const num1 = '3';
// const num2 = '3'; 
// const numA = document.querySelector('.num-a')
// const numB = document.querySelector('.num-b')
// const result = document.querySelector('.result')

// numA.innerHTML = num1
// numB.innerHTML = num2
// result.innerHTML = num1 - num2;


// Q.18

// const bakery = ['cake' , 'apple pie' , 'patties' , 'chips' , 'cookie']
// const userInput = prompt('Enter the item you want');
// const availabitlity = document.querySelector('.availabitlity')

// for (let i = 0; i < bakery.length; i++) {
//     if (userInput.toLowerCase() === bakery[i]) {
//         availabitlity.innerHTML = 'Available hai';
//         }
// }


// Q.19

// const input1 = prompt('Enter First String');
// const input2 = prompt('Enter Second String');
// const result = document.querySelector('.result')

// if (input1 > input2) {
//     result.innerHTML = input1;
// }else if (input2 > input1){
//     result.innerHTML = input2;
// }else{
//     result.innerHTML = `${input1} = ${input2}`;
// }

// Q.21

// const uni = 'University Of Karachi';

// for (let i = 0; i < uni.length; i++) {
//     console.log(uni[i]);
// }

// Q.22

// const userInput = prompt('Enter a Value');
// const userValue = document.querySelector('.input-span')
// const index = document.querySelector('.index-span')

// userValue.innerHTML = userInput
// index.innerHTML = userInput.slice(-1);

// Q.23

