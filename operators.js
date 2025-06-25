let a =  10;
let b = 5;
console.log("Arithmetic Operators");
console.log("a =",a,"b =",b);
let sum = a+b;
let difference = a-b;
let product = a*b;
let quotient = a/b;
let remainder = a%b;
let exponent = a**b;
console.log("Arithmetic Operators");
console.log("Sum:",sum);
console.log("Difference:",difference);
console.log("Product:",product);
console.log("Quotient:",quotient);
console.log("Remainder",remainder);


//2. Assignment operators
let x=10;
x+=5;
x-=3;
x*=2;
x/=4;
x%=4;
console.log("Assignment Operators");
console.log("x after assignments:",x);
console.log("\n");

//3. Comparison Operators
let isEqual = (a==b);
let isStrictEqual = (a === b);
let isNotEqual = (a!=b);
let isStrictNotEqual = (a!==b);
let isGreaterThan = (a>b);
let isLessThan = (a<b);
let isGreaterThanOrEqual = (a>=b);
let isLessThanOrEqual = (a<=b);
console.log("Comparison Operators");
console.log("Is Equal:", isEqual);
console.log("Is Equal:", isStrictEqual);
console.log("Is Equal:", isNotEqual);
console.log("Is Equal:", isStrictNotEqual);
console.log("Is Equal:", isGreaterThan);
console.log("Is Equal:", isLessThan);
console.log("Is Equal:", isGreaterThanOrEqual);
console.log("Is Equal:", isLessThanOrEqual);

//4. LOGICAL OPERATORS
let andOperator = (a>0 && b>0); //Logical AND
let orOperator = (a>0 || b<0);
let notOperator = !(a<b); // Logical NOT
console.log("Logical Operators");
console.log("a > 5 && b > 2:", a > 5 && b > 2);
console.log("a > 5 || b < 2:", a > 5 || b < 2);
console.log("!(a < b):", !(a < b));



console.log("\nBitwise Operators:");
console.log("a & b:", a & b);
console.log("a | b:", a | b);
console.log("a ^ b:", a ^ b); // XOR
console.log("~a:", ~a);
console.log("a << 1:", a << 1);
console.log("a >> 1:", a >> 1);
console.log("a >>> 1:", a >>> 1); // Zero-fill right shift
console.log("/n");

//6. Ternary Operator
let age =  18;
let eligibility = (ag>=18)? "Eligible to vote": "Not elegible to vote";
console.log("Ternary Operator");
console.log("Eligibility:",eligibility);
console.log("/n");

