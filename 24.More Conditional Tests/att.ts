//Equality And Inequality Test
console.log("Equality test with strings:","Apple" === "Apple");

//Equality And Inequality Test
console.log("InEquality test with strings:", ("Apple" as string) != "orange");

//Tests Using The Lower Case Function
console.log("Lower Case Function Test:", "HELLO".toLowerCase() === "hello");

console.log("Equality Test With Numbers: ", 26 === 26);

console.log("Inequality Test With Numbers: ", (26 as number) != 35);

console.log("greater than test: ", 10 > 5);

console.log("Less than test: ", 5 < 10);

console.log("greater than and equal to test: ", 10 >= 10);

console.log("less than or equal to test: ", 5 <= 10);

console.log("And operator test: ", 5==5 || false);

const fruits :string[] = ['Nashpati','Banana','Amrood'];
console.log('Test "Nashpati" in the array: ',fruits.includes("Nashpati"));

console.log('Testing "Apple" is not in array: ', !fruits.includes('Apple'));