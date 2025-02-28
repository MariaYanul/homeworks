// console.log ('number' + 3 + 3)
// Result: "number33".
// We got String and Integers Concatenation with + Operator
// 'number' is a string, and 3 are numbers.
// When adding a string and a number, the number is converted to a string.

// console.log(null + 3)
// Result: 3.
// Null is implicitly converted to 0 when used in arithmetic operations. So 0 + 3 = 3

// console.log(5 && "qwerty")
// Result: "qwerty".
// The && is a logical AND operator in JavaScript. If the first operand is truthy, it moves to the second operand and returns it. If the first operand were falsy, it would return the first operand immediately.
// In our case 5 is a truthy value. JavaScript moves to the second operand ("qwerty") and returns it.

// console.log(+'40' + +'2' + "hillel")
// Result: "42hillel".
// The unary + operator converts a string into a number if possible. '40' and + '2' were converted to the numbers, added and we got a number 42. Then was String Concatenation (42 + "hillel"). Since "hillel" is a string and 42 is a number, JavaScript converted 42 into a string and concatenates.

// console.log('10' - 5 === 6)
// Result: false.
// The - operator forces JavaScript to convert the string '10' into a number. '10' becomes 10, so the operation is: 10 - 5 = 5. then we get a comparison (5 === 6). 5 is not equal to 6, the result is false.

// console.log(true + false)
// Result: 1.
// In JavaScript, when performing arithmetic operations, boolean values are implicitly converted to numbers. Since true is 1 and false is 0, the operation becomes 1+0

// console.log('4px' - 3)
// Result: NaN.
// Attempted Type Conversion
// The - operator in JavaScript tries to convert strings to numbers. The string "4px" contains non-numeric characters ("px"), making it impossible to fully convert into a valid number. Since JavaScript cannot convert "4px" into a valid number, the subtraction results in NaN (Not-a-Number).

// console.log('4' - 3)
// Result: 1.
// The - operator in JavaScript only works with numbers. When - is used with a string that looks like a number ('4'), JavaScript automatically converts it into a number. '4' becomes 4 (number). Subtraction (4 - 3)

// console.log('6' + 3 ** 0)
// Result: "61".
// We have an exponentiation (3 ** 0), result is 1. Then we have a string concatenation ('6' + 1). The number 1 is converted to a string.

// console.log(12 / '6')
// Result: 2.
// The / (division) operator in JavaScript only works with numbers. Division (12 / 6) is 2.

// console.log('10' + (5 === 6))
// Result: "10false".
// Comparison (5 === 6)
// The strict equality (===) operator checks if 5 is equal to 6. Since they are not equal, the result is false (a boolean). Then we have a String Concatenation ('10' + false). Since the first operand ('10') is a string, JavaScript converts false into a string and concatenates.

// console.log(null == '')
// Result: false.
// Null is only loosely equal to undefined and not to other falsy values like '' (empty string), 0, or false.
// Since Null only equals null or undefined when using ==, the comparison: null == ''evaluates to false.

// console.log(3 ** (9 / 3))
// Result: 27.
// The ** operator is the exponentiation operator, which raises a number to a given power: 27

// console.log(!!'false' == !!'true')
// Result: true.
// The !! operator converts a value to a boolean in JavaScript. Any non-empty string (including 'false' and 'true') is truthy.  Applying !! to a truthy value results in true.
// So, !!'false' evaluates to true because 'false' is a non-empty string. !!'true' also evaluates to true for the same reason. In this case, we have a Comparison (true == true). The result is true.

// console.log(0 || '0' && 1)
// Result: 1.
// The && (AND) operator has higher precedence than || (OR). This means '0' && 1 is evaluated before 0 || ....
// The AND (&&) operator returns the first falsy value or the last truthy value. '0' is a non-empty string, which is truthy. 1 is also truthy. Since both values are truthy, && returns the last operand: '0' && 1 - Result: 1
// The OR (||) operator returns the first truthy value. 0 is falsy, so we check the next operand (1). 1 is truthy, so || returns 1. Final Result is 1

// console.log((+null == false) < 1)
// Result: false.
// Step 1: Evaluate +null
// The unary + operator converts null to a number. So, +null evaluates to 0. So, we have 0 == false. Since 0 == 0 is true, we now have: true < 1.True is converted to 1 and result 1 < 1 is false

// console.log(false && true || true)
// Result: true
// As the && (AND) operator has higher precedence than || (OR). This means false && true is evaluated first, before || true. The && (AND) operator returns:The first falsy value, if there is one. Otherwise, it returns the last truthy value. false is falsy, so false && true evaluates to false.
// Now, we have: false || true
// The || (OR) operator returns:
// The first truthy value it encounters. If no truthy value is found, it returns the last falsy value. false is falsy, so we move to true, which is truthy. Therefore, false || true evaluates to true.
// Final result is true.

// console.log(false && (false || true))
// Result: false
// The || (OR) operator has higher precedence than && (AND). This means false || true is evaluated first before false && .... The || (OR) operator returns the first truthy value if there is one. If no truthy value is found, it returns the last falsy value. False is falsy, so we move to true, which is truthy. Therefore: false || true. Result: true.
// Now, we have: false && true. The && (AND) operator returns the first falsy value, if there is one. Otherwise, it returns the last truthy value. Since false is falsy, false && true evaluates to false.

// console.log((+null == false) < 1 ** 5)
// Result: false
// The unary + operator converts null to a number. +null evaluates to 0 because: +null is 0. And we get 0 == false. JavaScript performs type corection, converting false to 0. Since 0 == 0, the result is: true.
// Now, we have: true < 1 ** 5
// The exponentiation (**) operator has high precedence. 1 ** 5 means: 1. Now, the expression simplifies to: true < 1. In comparisons (<), true is converted to 1. The final result: 1 < 1 is false