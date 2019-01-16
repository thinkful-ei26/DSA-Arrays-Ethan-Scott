'use strict';

const Memory = require('./memory');

// import Memory from './memory';

const memory = new Memory();

class Array {
  constructor() {
    // let memory = new Memory();
    this.length = 0;
    this.ptr = memory.allocate(this.length);
    this._capacity = 0;
  }

  push(value){
    if (this.length >= this._capacity) {
      // console.log(this._capacity);
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    // console.log(this.ptr);
    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
  }

  pop() {
    if (this.length === 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }
}

// array = [ 1, 2, 5 ]
// remove = 1 

function main () {
  Array.SIZE_RATIO = 3;
  let arr = new Array();

  arr.push(3);

  // console.log(arr._capacity);

  console.log(arr);

  // What is the length, capacity and memory address of your array?
  // Length is 1, capacity is 3, memory address is 0

  // arr.push(3);
  // arr.push(5);
  // arr.push(15);
  // arr.push(19);
  // arr.push(45);
  // arr.push(10);

  // console.log(arr);

  // What is the length, capacity and memory address of your array?
  // Length is 6, capacity is 12, memory address is 3


  // arr.push(3);
  // arr.push(5);
  // arr.push(15);
  // arr.push(19);
  // arr.push(45);
  // arr.push(10);

  // arr.pop();
  // arr.pop();
  // arr.pop();

  // console.log(arr);

  // What is the length, capacity and memory address of your array?
  // Length is 3, capacity is 12, memory address is 3


  // arr.push(3);
  // arr.push(5);
  // arr.push(15);
  // arr.push(19);
  // arr.push(45);
  // arr.push(10);

  // arr.pop();
  // arr.pop();
  // arr.pop();

  // console.log(arr.get(1));

  // arr.remove(0);
  // arr.remove(0);
  // arr.remove(0);

  // arr.push('tauhida');

  // console.log(arr.get(0));

  // // Print this one item that you just added. What is the result? Can you explain your result?
  // // It's a Float64Array, which will only print 64 bit floating numbers. Tauhida is not a number

  // console.log(arr);

}

main();