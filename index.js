'use strict';
// const name = "Alina";
// let age = prompt('Введите ваш возраст');
// console.log(typeof age);
// console.log(age);
// age = +age 
// age = Number(age);
// console.log(typeof age);
// console.log(age);
// const message = "Привет " + name;
// console.log(message);
// let newMessage = `My age is ${age}`;
// console.log(newMessage);
// let newAnswer = confirm(`Вам есть 18?`); 
// console.log(answel);
// console.log(typeof answel);
// let newQestion = `Вы любите js?`;
// let newAnswer = confirm (newQestion);
// console.log(newQestion); 
// console.log(newAnswer);


// let isOpen;
// console.log(isOpen);
// console.log(typeof isOpen);

// let boolUnd = Boolean(isOpen);
// console.log(boolUnd);
// console.log(typeof boolUnd);

// isOpen = null;
// console.log(isOpen);
// console.log(typeof isOpen);

// let boolNull = Boolean (isOpen);
// console.log(boolNull);
// console.log(typeof boolNull);

// let hobby = 'running';
// console.log(hobby);

// hobby = 'box';
// console.log(hobby);
// const age = 10;
// const firstName = 'Chelsy';
// const isVIP = true;
// console.log(age);
// console.log(firstName);
// console.log(isVIP);

// console.log(typeof 'Chelse');

// console.log('This is a numbe: ',age);

// console.log('before');
// alert('HELLO');
// console.log('alert');

// confirm shouldRenew ('Хотите продлить подписку? shouldRenew');
// console.log(shouldRenew);

// console.log(5 > 2);
// console.log('5' === 5);

// const value = '555';
// const numbe = Number(value);
// console.log(numbe); 

// const blokWidth = '300.5px';
// const width = Number.parseInt(blokWidth);

// console.log(width);

// const blokWidth = '300.5px';
// const width = Number.parseFloat(blokWidth);

// console.log(width);


// let number = prompt('Введите число');
// number = Number(number);

// let power = prompt('Введите в степень');
// power = Number(power);

// console.log(number);
// console.log(power);

// const result = Math.pow(number, power);
// console.log(result);

// const firstName = 'Chelse';
// const lastName = 'Emerald';
// const room = 716;
// const type = 'VIP';

  // // const massage = 'Гость' + firstName + ' ' + lastName + 'поселяется в ' + type + ' номер' + room;
  // // console.log(massage);

// const massage = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;
// console.log(massage);


// const superPassword = 'qwerty';
// const userInput = prompt('Введите то что надо')
// console.log(`userInput before: `, userInput);

// const nornalizeInput = userInput.toLowerCase();
// console.log(`userInput after: `, userInput);
// console.log(`normalizeInput: `, nornalizeInput);

// console.log(superPassword === nornalizeInput);


// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(false));
 
// const isOnline = true;
// const isFrend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('canOpenChat: ' , canOpenChat);


// const totalExpenses = 20000;
// const payment = 500;
// let discount = 0;

// if (totalExpenses >= 100 && totalExpenses < 1000) {
//     discount = 0.02;
//     console.log('Бронзовый партнер, скидка 2%');
// } else if (totalExpenses >= 1000 && totalExpenses < 5000) {
//     discount = 0.05;
//     console.log('Серебрянный партнер, скидка 5%');
// } else if (totalExpenses >= 5000) {
//     discount = 0.1;
//     console.log('Золотой партнер, скидка 10%');
// } else {
//     console.log('У вас еще нет скидки!');
// }

// const finalAmount = payment - payment * discount;
// console.log(finalAmount);

// console.log(`Оформляем заказ на сумму ${finalAmount} со скидкой ${discount}%`);


// const starts = 3;

// if (starts === 1) {
//     console.log('1');
// } else if (starts === 2) {
//     console.log('2');
// } else if (starts === 3) {
//     console.log('3');
// } else if (starts === 4) {
//     console.log('4');
// } else if (starts === 5) {
//     console.log('5');
// } else {
//     console.log('Ошибка ввода')
// }


// const starts = 4;
// let result;

// switch(starts) {
//     case 1:
//         result = 'case 1';
//         break;

//     case 2:
//         result = 'case 2';
//         break;

//     case 3:
//         result = 'case 3';
//         break;

//     case 4:
//         result = 'case 4';
//         break;

//     case 5:
//         result = 'case 5';
//         break;

//     default:
//         result = 'Ошибка ввода'
// }

// console.log(result);


// const number = 5;
// let total = 1;
// let i = 1;

// while( i <= number) {
//   total += i;

//   i += 1;
// }

// console.log(`Total = ${total}`);


// let vova = {
//   age: 16,
//   dad: "deputat",
// }

// if(vova.age >= 18) {
//   alert(`Go`);
// } else if(vova.dad === 'deputat') {
//   alert('Go');
// } else {
//   alert(`Sorry`);
// }


// let vova = {
//   age: 16,
//   dad: "deputat"
// };

// if(vova.age >= 18 || vova.dad === 'deputat') {
//   alert('Go');
// } else {
//   alert(`Sorry`);
// }


// let vova = {
//   age: 16,
//   dad: "deputat"
// };

// vova.age >= 18 || vova.dad === "deputat"
//   ? alert("Go")
//   : alert("Sorry");


// const PASSWORD = "ilovejs";

// let prompt1 = prompt("Enter your name: ");

// if(prompt1) {
//   prompt1 === PASSWORD 
//   ? console.log("You re in")
//   : console.log("Wrong password");
// } else {
//   alert('You have to enter the passvord!!!');
// };


// let cost;
// const subscription = 'premium';

// switch (subscription) {
//   case 'free':
//     cost = 0;
//     break;

//   case 'pro':
//     cost = 100;
//     break;

//   case 'premium':
//     cost = 500;
//     break;

//   default:
//     console.log('Invalid subscription type');
// }

// console.log(cost); // 500


// let a = 1;
// let b = 2;
// let c = 3;

// if (true) {
//   c = 4;
// }

// console.log(c);


// let a = 0;
// do {

// a++;

// console.log(a);

// } while (a<10);


// for(let i = 0; i < 10; i++) {
//   console.log(i);
// }


// for (let i = 0; i < 10; i ++) {
//   if (i === 5) {
//     console.log('Дошли до 5-й итерации, прерываем цикл!');
//     break;
//   }
// }


// const myAge = 15;
// const neighbourAge = 16;
// const c = myAge + neighbourAge;
// console.log(c);


// let r = 10;
// let S = (3.14) * (Math.pow(r, 2));

// console.log(S);


// const age = 36;
// const name = 'Roman';
// const placeOfStudy = 'GOIT';
// const message = `My name is ${name}, I'm ${age} I study in ${placeOfStudy}.`;
// console.log(message);





