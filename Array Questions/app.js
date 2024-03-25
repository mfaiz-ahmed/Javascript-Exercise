// Q.1/2

let studentNames = ['Faiz' , 'Abdullah' , 'Ahmed' , 'Anas'];
console.log(studentNames);


// Q.3

let fruits = ['Peaches' , 'Oranges' , 'Watermelon' , 'Strawberry'];
console.log(fruits)

// Q.4

let numbers = [7 , 5 , 4 ,10 , 53 ];
console.log(numbers);

// Q.5

let boolean = [true , false];
console.log(boolean);

// Q.6

let mixedArr = ['Faiz' , 7 , true];
console.log(mixedArr);

// Q.7

let mobileNetworks = ['Ufone' , 'Jazz' , 'Telenor' , 'Warid'];
console.log(mobileNetworks);

// Q.8

let degreesInPakistan = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS',
    'M. Phil.', 'PhD'];
let list1 = document.querySelector('.list1');
let list2 = document.querySelector('.list2');
let list3 = document.querySelector('.list3');
let list4 = document.querySelector('.list4');
let list5 = document.querySelector('.list5');
let list6 = document.querySelector('.list6');
let list7 = document.querySelector('.list7');
let list8 = document.querySelector('.list8');

list1.innerHTML = degreesInPakistan[0];
list2.innerHTML = degreesInPakistan[1];
list3.innerHTML = degreesInPakistan[2];
list4.innerHTML = degreesInPakistan[3];
list5.innerHTML = degreesInPakistan[4];
list6.innerHTML = degreesInPakistan[5];
list7.innerHTML = degreesInPakistan[6];
list8.innerHTML = degreesInPakistan[7];

// Q.9

let movies = ['Avengers:Age of Ultron' , 'Spectre' , 'Jurassic Park' , 'Inside Out'];

let list1 = document.querySelector('.list1');
let list2 = document.querySelector('.list2');
let list3 = document.querySelector('.list3');
let list4 = document.querySelector('.list4');
let lengthArr = document.querySelector('.lengthArr')

list1.innerHTML = movies[0]
list2.innerHTML = movies[1]
list3.innerHTML = movies[2]
list4.innerHTML = movies[3]

lengthArr.innerHTML = movies.length

// Q.10

let cars = ['Audi' , 'Mercedes' , 'Lamborghini' , 'Dodge'];
let favCars = document.querySelector('.favCars');
let firstcar = document.querySelector('.firstcar');
let lastcar = document.querySelector('.lastcar');

favCars.innerHTML = cars
firstcar.innerHTML = cars[0]
lastcar.innerHTML = cars[3]

// Q.11

let studentName = ['Faiz' , 'Abdullah' , 'Ahmed'];
let list1 = document.querySelector('.list1');  
let list2 = document.querySelector('.list2');   
let list3 = document.querySelector('.list3');    

list1.innerHTML = studentNames[0]
list2.innerHTML = studentNames[1]
list3.innerHTML = studentNames[2]

// Q.13

let number = [ 320 ,  240 , 310 , 120 ,437 , 127];
let numberspan = document.querySelector('.numberspan');

let orderArr = [ 320 ,  240 , 310 , 120 ,437 , 127];
let ordernum = orderArr.sort()
let orderspan = document.querySelector('.orderspan');
numberspan.innerHTML = number;
orderspan.innerHTML = ordernum;

// Q.14

let fruit = ['Peaches' , 'Watermelon' , 'Oranges' , 'Strawberry'];
let fruitList = document.querySelector('.fruitList');
let orderlist = document.querySelector('.orderlist');
let orderFruits = ['Peaches' , 'Watermelon' , 'Oranges' , 'Strawberry'];
let orderLists = orderFruits.sort()
fruitList.innerHTML = fruit;
orderlist.innerHTML = orderFruits;

// Q.15

let cities = ['Karachi' , 'Islamabad' , 'Lahore' , 'Quetta' , 'Gujranwala' , 'Multan'];
let citiesList = document.querySelector('.citiesList');
let selected = cities.slice(0,2)
let selectCities = document.querySelector('.selectCities');

citiesList.innerHTML = cities
selectCities.innerHTML = selected


// Q.16

let cat = ['This' , 'is' , 'my' , 'cat'];
let catline = document.querySelector('.catline');
let concat = cat.join(' ')
let concatline = document.querySelector('.concatline');

catline.innerHTML = cat;
concatline.innerHTML = concat; 

// Q.17

let devices = ['Keyboard' , 'Mouse' , 'Printer' , 'Monitor'];

let list1 = document.querySelector('.list1');
let list2 = document.querySelector('.list2');
let list3 = document.querySelector('.list3');
let list4 = document.querySelector('.list4');

list1.innerHTML = devices[0]
list2.innerHTML = devices[1]
list3.innerHTML = devices[2]
list4.innerHTML = devices[3]



// Q.18

let rlist1 = document.querySelector('.rlist1')
let rlist2 = document.querySelector('.rlist2')
let rlist3 = document.querySelector('.rlist3')
let rlist4 = document.querySelector('.rlist4')
    let reverseList = devices.reverse()
rlist1.innerHTML = reverseList[0]
rlist2.innerHTML = reverseList[1]
rlist3.innerHTML = reverseList[2]
rlist4.innerHTML = reverseList[3]


// Q.19

let mobiles = ['Apple' , 'Samsung' , 'Nokia' , 'Motorola']
let dropdown1 = document.querySelector('#dropdown1');
let dropdown2 = document.querySelector('#dropdown2');
let dropdown3 = document.querySelector('#dropdown3');
let dropdown4 = document.querySelector('#dropdown4');

dropdown1.innerHTML = mobiles[0];
dropdown2.innerHTML = mobiles[1];
dropdown3.innerHTML = mobiles[2];
dropdown4.innerHTML = mobiles[3];

