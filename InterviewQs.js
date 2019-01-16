'use strict';

function replaceSpace(str) {
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      arr[i] = '%20';
    }
  }
  return arr.join('');

}
// console.log(replaceSpace('www.thinkful.com /tauh ida parv een'));

//run time is O(n)

function filterFive(arr){
  let newArr = [];
  for (let i=0; i < arr.length; i++){
    if(arr[i] < 5) {
      newArr.push(arr[i]);
    }
  } return newArr;
}

const test1 = [1, 2, 5];
const test2 = [5, 5, 5];
const test3 = [];

// console.log(filterFive(test2));

// if(arr[i] > 0){
//   // maxValue = maxValue + arr[i];
//   // console.log(maxValue);
// }
// if (currentValue > currentValue + arr[i]) {

function findMaxSumInSequence(arr){
  let maxValue = 0;
  let currentValue = 0;
  for (let i=0; i < arr.length; i++){
    currentValue = currentValue + arr[i];
    if(currentValue > maxValue){
      maxValue = currentValue;
    }
  }
  console.log('max is', maxValue);
  console.log('current is', currentValue); 
  return maxValue;
}


let testArr = [4,6,-3,5,-2,1];
console.log(findMaxSumInSequence(testArr));

//run time is O(n)


