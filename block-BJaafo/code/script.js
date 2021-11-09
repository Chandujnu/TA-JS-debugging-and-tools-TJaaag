function fullName (firstName, lastName) {
    return (`${firstName} ${lastName}`);
}

let result = fullName("Rahul", "Dev");
let expected = "Rahul Dey";
if (result !== expected)  {
    throw new Error(`${result} is not same as ${expected}`);
}
result = fullName("Sachin", "Kumar");
expected = "Sachin Kumar";
if (result !== expected)  {
    throw new Error(`${result} is not same as ${expected}`);
}


//Calculate total amount

function totalAmount(amount, taxRate) {
    return amount + (amount * taxRate);
}

let output = totalAmount(25, 3);
let expected = 80;
if (output !== expected)  {
    throw new Error(`${output} is not same as ${expected}`);
}
output = totalAmount(30, 5);
expected = 180;
if (output !== expected)  {
    throw new Error(`${output} is not same as ${expected}`);
}