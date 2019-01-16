'use strict';
//
// function replaceSpace(str) {
//   let arr = str.split('');
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === ' ') {
//       arr[i] = '%20';
//     }
//   }
//   return arr.join('');
//
// }
// // console.log(replaceSpace('www.thinkful.com /tauh ida parv een'));
//
// //run time is O(n)
//
// function filterFive(arr){
//   let newArr = [];
//   for (let i=0; i < arr.length; i++){
//     if(arr[i] < 5) {
//       newArr.push(arr[i]);
//     }
//   } return newArr;
// }
//
// const test1 = [1, 2, 5];
// const test2 = [5, 5, 5];
// const test3 = [];

// console.log(filterFive(test2));

// if(arr[i] > 0){
//   // maxValue = maxValue + arr[i];
//   // console.log(maxValue);
// }
// if (currentValue > currentValue + arr[i]) {

// function findMaxSumInSequence(arr){
//   let maxValue = 0;
//   let currentValue = 0;
//   for (let i=0; i < arr.length; i++){
//     currentValue = currentValue + arr[i];
//     if(currentValue > maxValue){
//       maxValue = currentValue;
//     }
//   }
//   console.log('max is', maxValue);
//   console.log('current is', currentValue);
//   return maxValue;
// }
//
//
// let testArr = [4,6,-3,5,-2,1];
// console.log(findMaxSumInSequence(testArr));

//run time is O(n)


// function merge(arr1, arr2) {
//   let arrLen = 0;
//   if (arr1.length > arr2.length) {
//     arrLen = arr1.length * 2;
//   }else{
//     arrLen = arr2.length * 2;
//   }
//
//   let newArr = [];
//   for (let i = 0; i < arrLen - 1; i++) {
//     if (arr1[0] > arr2[0]){
//       newArr.push(arr2[0]);
//       arr2.shift();
//     }else{
//       newArr.push(arr1[0]);
//       arr1.shift();
//     }
//   }
//   return newArr;
// }
//
// console.log(merge([1, 3, 6, 8, 11, 12, 14], [2, 3, 5, 8, 9, 10]));

// function removeVowels(input) {
//   let str = input;
//   let output = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'a' || str[i] === 'e' || str[i] === 'o' || str[i] === 'i' || str[i] === 'u') {
//       // str = str.slice(0, i) + str.slice(i + 1, str.length);
//       // console.log(str.slice(0, i));
//       // console.log(str.slice(i + 1, str.length));
//       // console.log(str[i]);
//     } else {
//       output.push(str[i]);
//     }

//   }

//   let outputString = '';

//   for (let i = 0; i < output.length; i++) {
//     outputString += output[i];
//   }

//   return outputString;
// }

// let sentence = 'Baattle of the Vowels: Hawaii vs. Grozny';


// console.log(removeVowels(sentence));

// function products(arr){
//   let resultsArr = [];
//   for (let i=0; i < arr.length; i++){
//     let product = 1;
//     for (let j=0; j < arr.length; j++) {
//       if (i !== j){
//         product = product * arr[j];
//       }
//     } 
//     resultsArr.push(product);
//     // resultsArr.push(
//     //   (value => {
//     //   console.log('value is', value);
//     //   console.log('value index is', arr[i] );

//     //   i !== arr[i];
//     // }));
//     // console.log('item is', i);
//   } return resultsArr;
// }

// console.log(products([1, 3, 9, 4]));

function TwoDArray(array) {
  for (let i=0; i < array.length; i++){
    console.log(array[i]);
    for (let j=0; j < array[i].length; j++){
      console.log(array[i][j]);
      if (array[i][j] === 0) {
        array[i] = [0,0,0,0,0];
      }
      // if (array[i][j] === 0) {
      //   for (let k=0; k < array.length; k++){
      //     array[k][j] = 0;
      //   }
    }
  }
  return array;
}

const arrayOfArrays = [
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]
];

console.log(TwoDArray(arrayOfArrays));