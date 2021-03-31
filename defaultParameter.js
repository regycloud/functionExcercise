/*
he function makeShoppingList() creates a shopping list based on the items that are passed to the function as arguments.

Imagine that you always purchase milk, bread, and eggs every time you go shopping for groceries. To make creating a grocery list easier, let’s assign default values to the parameters in makeShoppingList().

Change the parameters of makeShoppingList() into default parameters :

Assign ‘milk’ as the default value of item1.
Assign ‘bread’ as the default value of item2.
Assign ‘eggs’ as the default value of item3.
*/
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
  

// Returning a function with return keyword
function greet(name) {
    return `Hello ${name}, have a nice day!`;
}

// Display the result to log by invoking the function
console.log(greet('regy'));

// Function Expressions
const plantNeedsWater = function(day) {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
};
  

// Arrow Function
const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};

/* Concise Body Arrow Functions
    1. Zero Parameter:
    const functionName = () => {};

    2. One Parameter:
    const functionName = paramOne => {};

    3. Two Or More Parameters:
    const functionName = (paramOne, paramTwo) => {};

    Function body composed of a single-line block does not need curly braces.
    example: const squareNum = num => num * num;
*/
