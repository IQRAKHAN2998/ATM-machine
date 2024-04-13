#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;  //dollar
let myPin = 2998;
let statement  :any = ['\n01-jan-2024\t500\tWithdrawal\n',
                       '\n20-jan-2024\t1000\tCash Deposit\n',
                       '\n03-feb-2024\t2000\tDiR debt\n',
                       '\n14-mar-2024\t2000\tWithdrawal\n',
                       '\n25-apr-2024\t1000\tFunds Transfer\n'];

console.log(` my pin number is ${myPin}`)

let pinAnswer = await inquirer.prompt(
    [
        {
            name : "pin",
            message : " Enter your pin",
            type : "number"
        }
    ]
);

if ( pinAnswer.pin === myPin){
    console.log("Correct pin code!!")

    let operationAns = await inquirer.prompt(
        [
            {
                name : "operation",
                message : "please select option",
                type : "list",
                choices : ["withdraw" , "check balance" , "fast cash" , "mini statement"]
            }
        ]
    );


    if(operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name : "amount",
                    type : "number",
                    message : "Enter your amount"
                }
            ]
        );
        if(amountAns.amount < myBalance ){
        myBalance -= amountAns.amount ;
        console.log("Your remaining balance is: " + myBalance)
        }
        else {
            console.log("insufficient balance")
        }}
    else if( operationAns.operation === "check balance"){
        console.log("your balance is " + myBalance)
    }
    else if( operationAns.operation === "fast cash"){
        let fastCash = await inquirer.prompt(
            [
                {
                    name : "operation2",
                    type : " list",
                    message : " How much money you want to withdraw ",
                    choices : [ "8000" , "5000" ,"3000" , "1000"]
                }
            ]
        );
        if(fastCash.operation2 >= 1 && fastCash.operation2 <= 10000){
            myBalance -= fastCash.operation2;
            console.log(`your remaining balance is ${myBalance}`);
         }
        
         else{
            console.log("invalid value")
         }
       
    }
    else if (operationAns.operation === "mini statement"){
        console.log(`your statement ${statement}`)
    }
    
}

else {
    console.log("Incorrect pin number")
}