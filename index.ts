#! /usr/bin/env node

//shebang
import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
{ message: "enter first number", type: "number", name: "firstNumber"},
{ message: "enter second number", type: "number", name: "secondNumbr"},
{ message: "select one of the operators to perform operation",
  type: "list",
  name: "operator",
  choices: ["Addition", "Subtraction", "Multiplication", "Division"],
},
]);

// conditional statement
if (asnwer.operator === "Addition") {
console.log (asnwer.firstNumber + asnwer.secondNumbr);

} 
else if (asnwer.operator === "Subtraction") {
 console.log (asnwer.firstNumber - asnwer.secondNumbr);

} 
else if (asnwer.operator === "Multiplication") {
console.log (asnwer.firstNumber * asnwer.secondNumbr);

}
 else if (asnwer.operator === "Division") {
console.log(asnwer.firstNumber / asnwer.secondNumbr);

}
 else {
    console.log ("please select valid operator");
}






    