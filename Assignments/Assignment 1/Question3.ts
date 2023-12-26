/*
    3. Write a typescript program which contains one function named as DisplayFactors. That function 
    should accept one number and display factors of that number.

    Input : 20

    Output : 1 2 4 5 10 20
*/
import * as promptSync from 'prompt-sync'
const prompt = promptSync();

function DisplayFactors(iNo : number) : void
{
    var iCnt : number = 0;

    for(iCnt=1; iCnt<=iNo; iCnt++)
    {
        if(iNo%iCnt == 0)
        {
            console.log(iCnt+" ");
        }
    }
}

const iNo = prompt("Enter a number");

DisplayFactors(iNo);