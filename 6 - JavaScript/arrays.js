// Data Types - Reference (Array)
// Array - allows us to store multiple values in a single variable

// Creating an array
let fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Peach', 'Strawberry', 'Grape'];

console.log(fruits);

// Accessing array elements
console.log('First fruit:', fruits[0]);
console.log('Second fruit:', fruits[1]);

// length - to get the number of values in an array
console.log(fruits.length);
console.log('Last fruit:', fruits[fruits.length - 1]);

// Modifying array
fruits[3] = 'Kiwi';
console.log(fruits);

// Adding elements using .push
fruits.push('Guava');
console.log(fruits);

fruits.push('Blueberry', 'Fig');
console.log(fruits);

// Removing the last element using .pop
console.log(fruits.pop());
console.log(fruits);

/* MORE ABOUT ARRAYS */
// Array iteration with for loop
let colors = ['red', 'green', 'blue'];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// Array iteration with forEach method
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
    console.log(number ** 2);
})

// .indexof() gets the index number of a value inside an array
console.log('Index of 3:', numbers.indexOf(3)); // 2

// .includes() checks if the value exists in the array
console.log('Does it have 5?', numbers.includes(21)); // false