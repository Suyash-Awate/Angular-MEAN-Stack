"use strict";
/*
    5. Write a typescript program which contains one function named as Fibonacci. That function accept
    one number from user and print Fibonacci series till that number.
    
    Input: 21
    
    Output: 1 1 2 3 5 8 13 21
*/
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
function Fibonacci(iNo) {
    var No1 = 0;
    var No2 = 1;
    var No3 = 1;
    console.log(No2);
    while (No3 < iNo) {
        No3 = No1 + No2;
        No1 = No2;
        No2 = No3;
        console.log(No3);
    }
}
var iNo = prompt('Enter a number');
Fibonacci(iNo);
