/*
    Q1. Write a typescript program which contains one function named as Maximum. That function accepts three parameters and it should return
    largest value from three parameters.
    
    Input: 23 89 6
    
    Output: Maximum number is 89
*/
function Maximum(No1, No2, No3) {
    if (No1 > No2 && No1 > No3) {
        return No1;
    }
    else if (No2 > No1 && No2 > No3) {
        return No2;
    }
    else
        (No2 > No1 && No2 > No3);
    {
        return No3;
    }
}
var No1 = 23;
var No2 = 89;
var No3 = 6;
var Result;
Result = Maximum(No1, No2, No3);
console.log("Maximum number is " + Result);
