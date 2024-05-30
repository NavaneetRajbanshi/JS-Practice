// let user = "Jhon", age= 25, message= "Hello" ;
// console.log(user, age, message);

// let admin, name; 
// name = 'John';
// admin = name;

// console.log(admin);


// let ourPlanet = 'earth';


// let currentVisitor = 'ram';

// let a, b;
// b = 'Lfes';
// a = b;
// console.log(a);

// let name = prompt("What is your name?", "");
// alert(name);

// function getThis() {
//     return this;
//   }
  
//   const obj1 = { name: "obj1" };
//   const obj2 = { name: "obj2" };
  
//   obj1.getThis = getThis;
//   obj2.getThis = getThis;
  
//   console.log(obj1.getThis());

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     myFunction: function() {
//       return this.firstName + " " + this.lastName;;
//     }
//   };

//   console.log(person.myFunction());

// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }
//   Person.prototype.nationality = 'English';
  
//   // Create two Person objects
//   const mySelf = new Person("John", "Doe", 50, "blue");




//   console.log('My name is' + mySelf.firstName + 'I am ' + mySelf.nationality);

//   function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }
  
//   Person.prototype.name = function() {
//     return this.firstName + " " + this.lastName
//   };
// console.log();


// function myFirst() {
//     myDisplayer("Hello");
//   }
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }

  
//   myFirst();
//   mySecond();

//   function myDisplayer(message) {
//     console.log(message);
//   }


// const people = [
//     { firstName: "Jack", year: 1988 },
//     { name: "Kait", year: 1986 },
//     { name: "Irv", year: 1970 },
//     { name: "Lux", year: 2015 },
//   ];
  
//   people.forEach(function (person) {
//     console.log(person);
//   });


//   function greetCustomer(firstName, lastName, salutation) {
//     const fullName = `${firstName} ${lastName}`;
  
//     console.log(`${salutation} ${fullName}`);
//   }
  
//   greetCustomer("Franklin", "Okolie", "Good Day");



//   returning  a function as a value
// function greetCustomer(firstName, lastName, salutation) {
//     const fullName = `${firstName} ${lastName}`;
  
//     console.log(`${salutation} ${fullName}`);
//   }
  
//   greetCustomer("Franklin", "Okolie", "Good Day");
  
  


//   function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }
  
//   Person.prototype.name = function() {
//     return this.firstName + " " + this.lastName
//   };
// console.log();

// function obj(){
//     console.log(this);
// }

// "use strict";
// let myObject() {
//   console.log(this)
// }

// const obj = {
//     getNmae(){
//         console.log(this)
//     }
// }
// obj.getNmae();

// function myConstructor(){
//     console.log(this)
// }
// const c = new myConstructor();

// function sum(numbers, callback) {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         total += callback(numbers[i]);
//     }
//     return total;
// } 
// function squaredOutput(num){
//     return num **2;
// }
// const numbers = [1, 2, 3, 4];
// console.log(sum(numbers, squaredOutput));

// for (var i = 0; i < 3; i++ ) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// }

// function haveCommonItems(arr1, arr2) {
//     let set1 = new Set(arr1);
//     let commonItems = arr2.filter(item => set1.has(item));
//     return commonItems;
//   }

//   Create a function "map" that takes an array and a callback and returns 
//   a new array where the callbacks is applied to each elements

//   function compose that takes two functions and returns a new 
//   function that is the composition of the two.var 


// var name = 'Alice';
// console.log(name);

// var age = 30;
// console.log(age);

// var isStudent = false;
// console.log(isStudent);

// var name = 'Alice';

// name = 'Bob';
// console.log(name);

// let a = 5;
// a += 4;
// console.log(a);


// const students = [
//         { name: "Alex", address:"ktm" },
//         { name: "Sam", address:"btm" },
//         { name: "Eagle", address:"pkr" },
//         { name: "Devlin", address:"bdp" },
//       ];

//       students.sort(function(address){
//         return a-b
//       });
//       console.log(students);


// let color = 'Red';

// function showFav(){
//     let message = 'Hello' + color;
//     console.log(message);
// };
// showFav();

// function sum(numbers, callback) {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       total += callback(numbers[i]);
//     }
//     return total;
//   }
  
//   function Square(num) {
//     return num * num;
//   }
//   const numbers = [1, 2, 3, 4];
//   console.log(sum(numbers, Square));

// function sum(numbers, callback) {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         total += callback(numbers[i]);
//     }
//     return total;
// } 
// function squaredOutput(num){
//     return num **2;
// }
// const numbers = [1, 2, 3, 4];

// console.log(sum(numbers, squaredOutput));

// function checkAge(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return confirm('Do you have permission from your parents?');
//     }
//   }
  
//   let age = prompt('How old are you?');
  
//   if ( checkAge(age) ) {
//     alert( 'Access granted' );
//   } else {
//     alert( 'Access denied' );
//   }

// function showPrimes(n) {
//     nextPrime: for (let i = 2; i < n; i++) {
  
//       for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//       }
  
//       alert( i ); // a prime
//     }
//   }
//   console.log(showPrimes(10));

// const person = {
//     firstName  : "John",
//     lastName   : "Doe",
//     id     : 5566,
//     myFunction : function() {
//       return this;
//     }
//   };

// console.log(person.myFunction());

// setTimeout(myFunction, 3000);

// function myFunction() {
//   console.log('I am Sorry');
// }

// setInterval(myFunction, 1000);

// function myFunction() {
//   let d = new Date();
//   console.log(d.getHours() + ":" +
//   d.getMinutes() + ":" +
//   d.getSeconds());};
  
// let promise = new Promise(function(resolve, reject) {
//     // after 1 second signal that the job is finished with an error
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
//   });

// Higher-order functions like map
// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(function(number) {
//   return number * 2;
// });

// console.log(doubledNumbers);
  
