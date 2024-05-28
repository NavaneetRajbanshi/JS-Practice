
// Q.Find the missing number in an array of consecutive integers

// function findMissingNumber(arr) {
//     let len = arr.length;
//     let sum = (len + 1) * (arr[0] + arr[len - 1]) / 2;
//     let actualSum = arr.reduce((x, y) => x + y);
//     let missingNumber = sum - actualSum;
//     return missingNumber;
// }

// let missingNum = [1, 2, 3, 4, 5, 6, 8];
// console.log(findMissingNumber(missingNum)); 


// Q.Find common elements in three sorted array.
// const arr1 = [10, 20 , 30, 40, 50];
// const arr2 = [2, 4, 6, 8 , 10];
// const arr3 = [3, 9, 10, 30, 50 , 60];


// function findCommonElements(ar1, ar2, ar3) {
//     const set1 = new Set(ar1);
//     const set2 = new Set(ar2);
//     const set3 = new Set(ar3);

//     const finalList = [];

//     for (const num of set1) {
//         if (set2.has(num) && set3.has(num)) {
//             finalList.push(num);
//         }
//     }
//     return finalList;
// }

// const arr1 = [10, 20 , 30, 40, 50];
// const arr2 = [2, 4, 6, 8 , 10];
// const arr3 = [3, 9, 10, 30, 50 , 60];

// const finalList = findCommonElements(arr1, arr2, arr3);
// console.log(finalList.join(" "));



// Q. How can you sort an array of objects first by the address property in ascending order and then by the name property (also in ascending order) if the address values are equal?

const students = [
    { name: "Alex", address:"ktm" },
    { name: "Sam", address:"btm" },
    { name: "Eagle", address:"pkr" },
    { name: "Devlin", address:"bdp" },
  ];

students.sort((firstItem, secondItem) => firstItem.address.localeCompare(secondItem.address));
console.log(students);



// students.sort((firstItem, secondItem) => firstItem.name.localeCompare(secondItem.name));
// console.log(students);
  

// function sortStudents(arr) {
//     arr.sort((a, b) => {
//         const addressComparison = a.address.localeCompare(b.address);
//         if (addressComparison !== 0) {
//             return addressComparison; 
//         }
//         return a.name.localeCompare(b.name);
//     });
// }
// const students = [
//     { name: "Alex", address: "ktm" },
//     { name: "Sam", address: "btm" },
//     { name: "Eagle", address: "pkr" },
//     { name: "Devlin", address: "btm" },
// ];
// sortStudents(students);
// console.log(students);
  




