// JS Operators and Expressions

// 1. Arithmetic Operators
let x = 21;
let y = 10;

// Addition '+'
let sum = x + y;
console.log("Sum:", sum);

// Subtraction '-'
let difference = x - y;
console.log("Difference:", difference);

// Multiplication '*'
let product = x * y;
console.log("Product:", product);

// Division '/'
let quotient = x / y;
console.log("Quotient:", quotient);

// Exponent (**)
let exponent = x ** 3
console.log("Exponent:", exponent);

// Modulo (%)
let remainder = x % 0; // 21 / 10 = 2 (remainder 1)
console.log("Remainder:", remainder);

// PEMDAS / BODMAS
let answer = ((10 / 2) * 23) / 2;
console.log(answer);

// 2. String Expressions or Concatenation
console.log("1" + "1"); // "11"
console.log("Hello" + " " + "World!");

let greeting = "Hi";
let myName = "Jared";
let combinedString = greeting + ", " + myName + "."
console.log(combinedString);

// 3. Comparison Operators
// Equal to (==): This operator checks if two values are equal.
console.log("5 == 5:", 5 == 5);
console.log("5 == '5':", 5 == '5'); // convert string "5" to a number, loosely check for equality
console.log("'hello' == 'world':", "hello" == "world");

// Not equal to (!=): This checks if two values are not equal.
console.log("5 != 5:", 5 != 5);
console.log("5 != '5':", 5 != '5'); // convert string "5" to a number, loosely check for equality
console.log("'hello' != 'world':", "hello" != "world");

// Strict equal to (===): This operator checks if two values are equal in both value and type.
console.log("5 === 5:", 5 === 5);
console.log("5 === '5':", 5 === '5');
console.log("'hello' === 'world':", "hello" === "world");

// Strict not equal to (!==): This operator checks if two values are not equal in value or type.
console.log("5 !== 5:", 5 !== 5);
console.log("5 !== '5':", 5 !== '5');
console.log("'hello' !== 'world':", "hello" !== "world");

// Greater Than
console.log("5 > 3:", 5 > 3);
console.log("3 > 5:", 3 > 5);

// Less Than
console.log("5 < 3:", 5 < 3);
console.log("3 < 5:", 3 < 5);

// Greater Than or Equal To
console.log("5 >= 5:", 5 >= 5);
console.log("5 >= 3:", 5 >= 3);
console.log("3 >= 5:", 3 >= 5);

// Less Than or Equal To
console.log("5 <= 5:", 5 <= 5);
console.log("5 <= 3:", 5 <= 3);
console.log("3 <= 5:", 3 <= 5);

// 4. Logical operators (&&, ||, !)
let sunny = true;
let warm = false;

console.log("Is it sunny AND warm?", sunny && warm);
console.log(5 <= 5 && 3 < 5);

console.log("Is it sunny OR warm?", sunny || warm);
console.log(5 <= 5 || 3 > 5);

console.log("NOT sunny?", !sunny);

// 5. Assignment expressions
let a = 10;
let b = 5;

a += b;
console.log("The new value of a is:", a);

a -= b;
console.log("The new value of a is:", a);

a *= b;
console.log("The new value of a is:", a);

a /= b;
console.log("The new value of a is:", a);

a **= b;
console.log("The new value of a is:", a);

a %= b;
console.log("The new value of a is:", a);