// Q.1

// const hello = document.querySelector('.hello');

// for (let i = 1; i <= 5; i++) {
//     hello.innerHTML += `<h1>Hello World ${i}</h1>`
// }


// Q.2

// const num = document.querySelector('.num');

// for (let i = 1; i <=10 ; i++) {
//     num.innerHTML += `<h1>${i}<h1/>`
    
// }


// Q.3

// const digits = +prompt('Enter a number to print its table');
// const length = +prompt('Enter the length of the table');
// const tables = document.querySelector('.table')

// for (let i = 1; i <= length; i++) {
//     tables.innerHTML +=`<h4>${digits} x ${i} = ${i * digits }</h4>`
// }

// Q.4

// const phone = ['Nokia' , 'Apple' , 'Samsung' , 'Realme'];
// const mobile = document.querySelector('.mobile')

// for (let i = 0; i < phone.length; i++) {
//     mobile.innerHTML += `<h1>${phone[i]}</h1>`
// }

// Q.5

// const fruits =['Peaches' , 'Apple' , 'Oranges' , 'Watermelon' , 'Strawberry'];
// const fruitsList = document.querySelector('.fruits-div')
// const fruitsIndex = document.querySelector('.fruits-index')

// for (let i = 0; i < fruits.length; i++) {
//     fruitsList.innerHTML += `<h1>${fruits[i]}</h1>`
//     fruitsIndex.innerHTML += `<h1>Element at index ${i} is ${fruits[i]}</h1>`
// }



// Q.7

// const counting = ['1' , '2' , '3' , '5' , '6' , '7' , '8' ,'9' ,'10'];
// const countingList = document.querySelector('.counting-div')


// for (let i = 0; i < counting.length; i++) {
//     countingList.innerHTML += ` ${counting[i]}`
// }

// const reverseCounting = document.querySelector('.reverse-counting-div');
// const reverseCountingList = counting.reverse();
// reverseCounting.innerHTML += reverseCountingList;


// const even = ['2' , '4' , '6' , '8' , '10'];
// const evenList = document.querySelector('.even-div')
// for (let i = 0; i < even.length; i++) {
//         evenList.innerHTML += `${even[i]} `
// }

// const odd = ['1' , '3' , '5' , '7' , '9'];
// const oddList = document.querySelector('.odd-div');

// for (let i = 0; i < odd.length; i++) {
//     oddList.innerHTML += `${odd[ i ] } `    
// }

// const series = ['2' , '4' , '6' , '8' , '10' , '12']
// const seriesList = document.querySelector('.series-div');

// for (let i = 0; i < series.length; i++) {
//     seriesList.innerHTML += `${series[i]}k `
// }

// Q.8

// const bakery = ['cake' , 'apple pie' , 'patties' , 'cookie' , 'chips'];
// const userValue = prompt('Enter the item you want');
// const text = document.querySelector('.text')


// for (let i = 0; i < bakery.length; i++){
//     if( bakery[i] === userValue){  
//         text.innerHTML = 'Available hai bhai'
//     }
// }


    

// Q.12

// const table = 5;
// const tabelList = document.querySelector('.table-div')
// for (let i = 1; i <= 20; i++) {
//     tabelList.innerHTML += `<h1>${table} x ${i} = ${table * i}</h1>`    
// }

// Q.13

// const students = ['Ali' , 'Sami' , 'Taha' , 'Inam'];
// const score = ['58' , '73' , '89' , '90'];
// const row1 = document.querySelector('.row-1');

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);
//     for (let j = 0; j < score.length; j++) {
        
//     }
//     row1.innerHTML += `<tbody>${students[i]} ${score[i]} <br /> </tbody>`
    
// }



// Q.14

// var scores = [12 , 45 , 3 , 22 , 34 , 50];
// const userInput = +prompt('Enter the stopping number')
// const number = document.querySelector('.number')
// for (let i = 0; i < scores.length; i++) {
//         if(userInput === 12){
//             number.innerHTML = (scores[0]);
//         }
//         else if(userInput === 45){
//             number.innerHTML = (scores[1]);
//         }
//         else if(userInput === 3){
//             number.innerHTML = (scores[2]);
//         }
//         else if(userInput === 22){
//             number.innerHTML = (scores[3]);
//         }
//         else if(userInput === 34){
//             number.innerHTML = (scores[4]);
//         }
//         else if(userInput === 50){
//             number.innerHTML = (scores[5]);
//         }else{
//             number.innerHTML = ('No number');
//         }
//         }



// Q.16




// Q.17

// const num1 = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20];
// const oddEven = document.querySelector('.odd-even')
// for (let i = 0; i < num1.length; i++) {
//     if (num1[i] % 2 == 0) {
//         oddEven.innerHTML += `<h1>${num1[i]} is even</h1>`;
//     }
//     else{
//         oddEven.innerHTML += `<h1>${num1[i]} is odd</h1>`;
//     }
    
// }

// Q.18

// const numbers = [ 1 , 3 , 5 , 7];
// const product = document.querySelector('.product')
// for (let i = 0; i < numbers.length; i++) {
//     product.innerHTML =  `The product of odd integers from 1 to 7 is ${numbers[0] * numbers[1] * numbers[2] * numbers[3]}`;

// }


// Q.19

// const userInput = prompt('Enter the number of stars');
// const star = document.querySelector('.star');

// for (let i = 0; i < userInput.length; i++) {
//     const starQuantity = '*'.repeat(userInput);
//     star.innerHTML = starQuantity;

// }


// Q.20


