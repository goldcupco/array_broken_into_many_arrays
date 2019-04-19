## Coding Challenge - Split Array Into Mutiple Arrays

## Table Of Contents
* [Problem](#problem)
* [Solution](#solution)
* [How I Coded This](#how-i-coded-this)
* [How To Install](#how-to-install)
* [How To Run The Tests](#how-to-run-the-tests)
* [How To Run](#how-to-run)
* [Improvements](#improvements)


## Problem 

Given an array of length >= 0, and a positive integer N, return the contents of the array divided into N
equally sized arrays.

Where the size of the original array cannot be divided equally by N, the final part should have a length equal
to the remainder.

Example pseudo-code:

groupArrayElements([ 1, 2, 3, 4, 5], 3 );
> [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]


## Solution 

### Language 
From a choice of JavaScript or Python, I have chosen JavaScript to complete this task, mainly because I have not learned Python yet. However, I think JavaScript will do the job well as there are some built in methods for arrays (splice / splice / etc) which I am sure will be handy here.

### Understanding The Problem
Examples to make sure I understand the problem, which I will use as tests.

### Example 1 (check an output with no remainder)

Input: ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],3)
Ouput: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]

Working:

array.length = 12 <br>
N splits = 3 <br>
newArraySize = 12 / 3 = 4 <br>
Each new array should have a length of 4.


### Example 2 (Using example from above to look at a remainder)
Input: ([1, 2, 3, 4, 5], 3 );
Output [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]

Working: 
array.length = 5 <br>
N splits = 3 <br>
newArraySize = 5 / 3 = 1.666..

Round to nearest whole number = 2 <- YES
Round ceiling = 2 <- YES
Round floor = 1 <- NO
Rounding gives the newArraySize, except with the last array.
I need another example to check whether rounding to the nearest whole number or rounding using Math.ceil is correct.

### Example 3 (checking whether it should be rounding in general or Math.ceil)
Input: ([1, 2, 3, 4, 5, 6, 7],3) 
Output: [[1, 2, 3], [4, 5, 6], [7]]

Working:

array.length = 7 <br>
N splits = 3 <br>
newArraySize = 7 / 3 = 2.3333...

Looking at the output, we expect newArraySize = 3
Round to the nearest whole number = 2 <- NO
Round ceiling = 3 <- YES

So, every decimal should round UP to define the new array sizes, excluding the last array.


### Example 4 (check with .5 decimal)

Input: ([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)
Ouput: [[1, 2, 3, 4, 5], [6, 7, 8, 9]]

Working:  

array.length = 9 <br>
N splits = 2 <br>
newArraySize = 9 / 2 = 4.5
Round ceiling = 5 <- YES

This confirms all decimals should round UP.


### Example 5 (check extreme where array.length < numOfArrays)
Input: ([1, 2],5)
Output: [[1],[2]]

Working: 

array.length = 2 <br>
N splits = 5 <br>
newArraySize = 2 / 5 = 0.4 <br>
Round ceiling = 1


### Example 6 (check extreme where array.length = 0)
Input: ([],5)
Output: [[]]

array.length = 0 <br>
N splits = 5 <br>
newArraySize = 0 / 5 = 0

## How I Coded This

### Result As An Array

The result should be in a new array, as I don't want to mutate the original.
const result = []

### Size Of New Arrays
From the Array and the Number Of Arrays given in the question

(myArray, numOfArrays)

I need to work out the new array size, as the original array is divided equally by N, numOfArrays

const newArraySize = myArray.length / numOfArrays (as shown above in the examples)

Now, I will introduce Math.ceil to deal with rounding UP, as required.

const newArraySize = Math.ceil(myArray.length / numOfArrays)


### Loop Over The Array Once (The aim)

#### Range
Starting at index position 0, and ending where i < myArray.length

#### Dealing With Increments

I can increment the newArraySize which deals with possibility of having a remainder, therefore a different final array size.

#### Slicing, Splicing or Splitting

Using https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
and 
https://medium.freecodecamp.org/lets-clear-up-the-confusion-around-the-slice-splice-split-methods-in-javascript-8ba3266c29ae

I chose the .slice as my method, as this takes the values from the original array, and puts them in a new array leaving the original in tact

Splitting is not for arrays, but for strings.

Splicing modifies the original array, which I don't want to do in this case.

### Push To Result Array

I will use .slice from the current position 'i' and slice up until 'i + newArraySize'.

This would deal with a remainder affecting the size of the final array, as this slice would just stop when it reaches the end of the original array.


## How To Install
In the main 'twig_education' folder 

`npm install`


## How To Run The Tests

In the main 'twig_education' folder 

`npm test`

## How To Run

In the main 'twig_education' folder 

`npm start`

## Improvements

I could look into the complexity of the loop and see if there is a faster solution, if dealing with splitting up large arrays. Something like a reverse loop, or a while loop.
