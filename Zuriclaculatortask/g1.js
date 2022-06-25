let operator = prompt("Enter operator(either +, -, *  or /): ");

let num1 = parseFloat(prompt("Enter a number: "));
let num2 = parseFloat(prompt("Enter a Number: "));

let result;

if( operator == '+'){
    result = num1 + num2;
}
if( operator == '-'){
    result = num1 - num2;
}
if( operator == '*'){
    result = num1 * num2;
}
if(operator == '/') {
    result = num1 / num2;
}
alert(result)
