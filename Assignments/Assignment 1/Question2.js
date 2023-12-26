"use strict";
/*
Q.2. Write a typescript program which contains one function named as Area. That function should
calculate area of circle. Accept value of radius from user and return its area. Default value of PI
should be 3.14 if it is not provided by the caller.

Input : 5
Output : Area of circle is 78.5
*/
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
function Area(radius) {
    var PI = 3.14;
    var Area = 0;
    Area = PI * (radius * radius);
    return Area;
}
var Radius = prompt('Enter the radius');
var Result = Area(Radius);
console.log("Area of circle is " + Result);
