console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  let greeting;
  greeting = `Hello, ${name}!`;
  return greeting;
}
// Remember to call the function to test
console.log('TEST - Should say Hello, John!:', helloName('John'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}
console.log('TEST - Should say 15', addNumbers(9,6));
console.log('TEST - Should say 3', addNumbers(9, -6));

// 4. Function to multiply three numbers & return the result
function multiplyThree( num0, num1, num2 ) {
return num0 * num1 * num2;
}
console.log('TEST - Shoud say 315', multiplyThree(5,7,9));
console.log('TEST - Should say -315', multiplyThree(5, -7, 9));


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
let lastItemindex;
lastItemindex = array.length - 1;
return array[lastItemindex];
}

names = ['Peter', 'James', 'Steven', 'Robert']
console.log('TEST - should say Robert', getLast(names));
numberArray = [4, 7, 2, 8, 10]
console.log('TEST - should say 10', getLast(numberArray));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

numbers = [9, 3, 5, 7, 44, 41, 77, 16, 14]
function find( value, array ){
  let answer;
  for (let num of array) {
    if (num === value) {
      answer = true;
      break;
    } //end if
      else {
      answer = false;
    }//end else
  } //end for
  return answer;
}// end find

console.log('TEST find() - should return true', find(44, numbers));
console.log('TEST find() - Should return false', find(56, numbers));
console.log('TEST find() - Should return false', find(true, numbers));
console.log('TEST find() - Should return true', find(77, numbers));
console.log('TEST find() - Should return true', find('Steven', names));
console.log('TEST find() - Should return false', find(34, names));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  //let ans;
  if(letter === string[0]) {
    return true;
  } // end if
    else{
      return false;
    }//end else
}//end function
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for(number of array){
    sum += number;
  }
  return sum;
}
console.log('TEST - should say 216', sumAll(numbers));
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function listPositive(array) {
  let positiveArray =[];
  for (let i = 0; i < array.length; i++) {
    if(array[i] > 0){
      positiveArray.push(array[i]);
    }//end if
  }//end for
  return positiveArray;
}//end function
arrayWithNegative = [3, 6, 9, 2, -4, -6, 45];
console.log('TEST - should eturn array with 5 items', listPositive(arrayWithNegative));
console.log('TEST - should return array with 4, 7, 2, 8, 10', listPositive(numberArray));


// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
