"use strict";
/*
4. Write a typescript program which contains one function named as ChkPrime. That function
should accept one number and it should return true if the given number is prime and otherwise return false.

Input: 11

Output : It is prime number.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
function ChkPrime(iNo) {
    var iCnt = 0;
    var Count = 0;
    if (iNo <= 1) {
        return false;
    }
    for (iCnt = 1; iCnt <= iNo / 2; iCnt++) {
        if (iNo % iCnt == 0) {
            Count++;
        }
    }
    if (Count > 1) {
        return false;
    }
    else {
        return true;
    }
}
var iNo = prompt('Enter a number to check prime');
console.log();
var Result = ChkPrime(iNo);
if (Result == true) {
    console.log("It is a prime number");
}
else {
    console.log("It is not a prime number");
}
