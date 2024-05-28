1.
function isBoolean(a) {
    alert(typeof a === 'boolean');
}
console.log(isBoolean(true)); 

2.
function convertToNumber(string) {
    let num = Number(string);
    if (isNaN(num)){
        return NaN;
    }else{
        return num;
    }
}
console.log(convertToNumber (9));
console.log(convertToNumber ("Hello"))

3.
function firstElement(arr) {
     if(arr.length > 0){
       return arr[0];
    }else{
        return null; 
    }
}
let arr = [2,3,4,5,6];
let first = firstElement(arr);
console.log(first);

4.
function getEvenNumbers(num) {
    let evenNumber = [];

    for (let i = 0; i < num.length; i++){
        if (num[i]% 2 === 0){
            evenNumber.push(num[i]);
        }
    }
    return evenNumber;
        
}
let numbs = [1,3,4,5,6,7,8,8,9,10];
let evenNumber = getEvenNumbers(numbs);

console.log(evenNumber);

5.
function sortString(string) {
    return string.sort();
}
let string = ["aaa","babab","oiojk","efsdfd","dfdfd","ttt"]
let sortedString = sortString(string);
console.log(sortedString);

6.	
undefined
when  we create a variable using var, js will create a initialization with var with undentified value.

7.	
Hello World
Because of the hoisting. In JavaScript function get hoisted. 

8.
class Stack{
    constructor(){
        this.items = [];
    }

    push(item){
        this.items.push(item);
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        if(this.items.length == 0){
            return null;
        }
        return this.items[this.items.length - 1];
    }
    getSize(){
        return this.items.length;
    }

    isEmpty(){
        return this.getSize() === 0;
    }
    
}

let colors = new Stack();

colors.push("Red");
colors.push("White");
colors.push("Blue");
colors.push("Green");

console.log(colors.peek());
console.log(colors.pop());

9.
class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(item){
        this.items.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }
    getSize(){
        return this.items.length;
    }

    isEmpty(){
        return this.getSize() === 0;
    }
    
}

let colors = new Queue();
colors.enqueue("Red");
colors.enqueue("White");
colors.enqueue("Blue");
colors.enqueue("Green");

console.log(colors.dequeue());

10.
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(a){
        let b = new Node(a);

        if (this.head === null){
            this.head = b;
            return;
        }
        let last = this.head;
        while(last.next != null){
            last = last.next;
        }
        last.next = b;
    }
    printList(){
        let current = this.head;
        while (current){
            console.log(current.data);
            current = current.next;
        }
    }
}
let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.printList();

11.

console.log('5' - 3);
2
string before subtraction sign will automatically convert string into number

console.log('5' + 3);
53
Plus sign will concatinate 

console.log('5' + - '2');
5-2

console.log('5' * '2');
10
string value gets converted and gets multipied 

console.log([] + {});
[object Object]
The array[] converts to empty string and object {} converts to string [object Object] and with + operator both get concatinate, in which empty string and [object Object] gets concatinated that results [object Object]

console.log({} + []);
[object Object]
This sinario is simiar to above where the result is similar as the order od concatination doesnt change the final StaticRange. 


12.
variable declaration: In strict mode, variables must be declared before they can be used. In non-strict mode, undeclared variables are automatically assigned to the global object, which can lead to unexpected behavior.

function invocation: In non-strict mode, this keyword inside a function that is not invoked as a method of an object refers to the global object. In strict mode, however, this keyword is undefined in such cases.

function arguments: In non-strict mode, it is possible to declare multiple function parameters with the same name, which can lead to confusion and errors. Strict mode disallows this, making it easier to write and maintain code.

deleting properties: In non-strict mode, it is possible to delete properties from objects that are not configurable. This can lead to unexpected behavior and should be avoided. In strict mode, attempting to delete non-configurable properties will result in an error.


13. 

function deepEqual(a, b) {
    if (a === b ){
        return true;
    }
    if (typeof a !== 'object' || a === null || typeof b !== 'object' ||
        b === null) {
        return false;
        }
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
        return false;
    }
    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
            return false;
        }
}
    return true;
}
console.log(deepEqual([1, 2, 3], [1, 2, 3]));

14. 

function groupBy(array, property) {
    let groupedResult = {};

    array.forEach(item => {
        let key = item[property];
        groupedResult[key] = groupedResult[key] || [];
        groupedResult[key].push(item);
    });
    let resultArray = Object.values(groupedResult);
    return resultArray;
}
let fruits = [
  { name: "Apple", fruit_color: "Red" },
  { name: "Banana", fruit_color: "Yellow" },
  { name: "Cherry", fruit_color: "Red" },
  { name: "Lemon", fruit_color: "Yellow" },
  { name: "Grape", fruit_color: "Purple" }
];

let groupedByColor = groupBy(fruits, "fruit_color");
console.log(groupedByColor);

15.

function removeElements(array, predicate) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (predicate(array[i])) {
            array.splice(i, 1);
        }
    }
    return array;
}

let numbers = [1, 2, 3, 4, 5, 6];
let isEven = (num) => num % 2 === 0;
removeElements(numbers, isEven);
console.log(numbers);

16. 

function chunkArray(a, b) {
    let chunkedArray = [];
    for (let i = 0; i < a.length; i += b) {
        chunkedArray.push(a.slice(i, i + b));
    }
    console.log(chunkedArray);
}
 chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 4);

 17. 

 function haveCommonItems(arr1, arr2) {
    let set1 = new Set(arr1);
    let commonItems = arr2.filter(item => set1.has(item));
    return commonItems;
  }
  let array1 = [1, 2, 3, 4, 5];
  let array2 = [5, 6, 7, 8, 9];
  let result = haveCommonItems(array1, array2);
  console.log(result);

  18.

  function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
  
    let result = [];
    for(let j = 0; j < cols; j++) {
      result[j] = [];
    }
  
    for(let i = 0; i < rows; i++) {
      for(let j = 0; j < cols; j++) {
        result[j][i] = matrix[i][j];
      }
    }
  
    return result;
  }
  let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  let transposedMatrix = transposeMatrix(matrix1);
  console.log(transposedMatrix);


