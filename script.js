// if and else
var age = prompt();

if(age >= 50){
    console.log("Old!")
}else if (age < 50 && age >=30) {
    console.log("Under 50 but above or equal 30!");
} else if (age < 30 && age >=18) {
    console.log ("Under 30 but above or equal 18");
} else if (age < 18 && age > 0)
{
    console.log("under 18!");
} else{
    console.log("Invalid Input!");
}

// Template literals (ES6)
// Backtick ``
let name = "Rahim";
let aga = "38";
let dob = "21 June, 1983";

console.log(`His name is ${name}
His age is ${aga}
Date of Birth ${dob}`);

let a = 23
let b = 89
console.log(`${a} + ${b} = ${ a + b }`);

// Find large Number

var n1 = prompt("1st Number:");
var n2 = prompt("2nd Number:");
var n3 = prompt("3rd Number:");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

if (n1 >= n2 && n1 >= n3) {
    console.log(n1 + " is the largest number!");
}
else if (n2 >= n1 && n2 >= n3) {
    console.log(n2 + " is the largest number!");
}
else {
    console.log(n3 + " is the largest number!");
}

/*if (n1 >= n2) {
    if (n1 >= n3) {
        console.log(n1 + " is the largest!");
    }
    else {
        console.log(n3 + " is the largest!");
    }
} else {
    if (n2 >= n3) {
        console.log(n2 + " is the largest!");
    }
    else {
        console.log(n3 + " is the largest!");
    }
} */
// Switch
console.log("Select an Option: \na. Option 1 \nb. Option 2 \nc. Option 3");

choice = prompt();
var text;

switch (choice){
    case "a": //if(choice==a)
        text = "Option 1 is Selected";
        break;
    case "b":
        text = "Option 2 is Selected";
        break;
    case "c":
        text = "Option 3 is Selected";
        break;
    default: //else
        text = " No Option is Selected";
        break;
}

console.log(text);


//grade code
var num = prompt("What is your number?");
var grade;

if(num <= 100 && num >= 80){
    grade = "A+";
}
else if(num <= 80 && num >= 70){
    grade = "A";
}
else if(num <= 70 && num >= 60){
    grade = "A-";
}
else if(num <= 60 && num >= 50){
    grade = "B";
}
else if(num <= 50 && num >= 40){
    grade = "C";
}
else if(num <= 40 && num >= 33){
    grade = "D";
}
else if(num < 33 && num >= 0){
    grade = "F";
}
else {
    grade = "Invalid input!";
}
console.log("Your Grade: " + grade);


// mini Calculetor

console.log("Select an Option: \n1. Add \n2. Subtract \n3. Multiply \n4. Divide");

var num1 = prompt("Enter First Number:");
var num2 = prompt("Enter Second Number:");
var option = prompt("Choose an Operation:");
var result = null;

num1 = parseInt(num1);
num2 = parseInt(num2);
option = parseInt(option);

var num1Con = isNaN(num1);
var num2Con = isNaN(num2);
var optionCon = isNaN(option);

if(num1Con || num2Con || optionCon ){
console.log("Invalid Input!")
}
/*else { 
    switch(option){
        case 1:
            result: num1 + num2;
            break;
        case 2:
            result: num1 - num2;
            break;
        case 3:
            result: num1 * num2;
            break;
        case 4:
            result: num1 / num2;
            break;
        default:
            break;
    }
    
    if(result == null){
    console.log("No Result!"); 
      }
   else{
      console.log("Result: " + result);
    }
}*/
else {
    switch (option) {
        case 1:
            result = num1 + num2;
            break;
        case 2:
            result = num1 - num2;
            break;
        case 3:
            result = num1 * num2;
            break;
        case 4:
            result = num1 / num2;
            break;
        default:
            break;
    }

    if (result == null) {
        console.log("No Result!");
    }
    else {
        console.log("Result: " + result);
    }
}