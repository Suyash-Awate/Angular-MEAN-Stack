"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    3. Write a typescript program which contains one function named as DisplayFactors. That function
    should accept one number and display factors of that number.

    Input : 20

    Output : 1 2 4 5 10 20
*/
var promptSync = require("prompt-sync");
var prompt = promptSync();
function DisplayFactors(iNo) {
    var iCnt = 0;
    for (iCnt = 1; iCnt <= iNo; iCnt++) {
        if (iNo % iCnt == 0) {
            console.log(iCnt + " ");
        }
    }
}
var iNo = prompt("Enter a number");
DisplayFactors(iNo);
