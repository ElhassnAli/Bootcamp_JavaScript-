//Number Challenge
let a =100;
let b =2_00.5;
let c =1e2;
let d =2.4;
// Find Smallest Number in All Variables And Return-Integer
console.log(Math.min(a,b,c,d));
// Use Variable a d One Time To Get The Needed Output
console.log(Math.trunc(d+98)*a); // 10000
// Get Integer "2" From d-Variable With 4 Methods
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(Math.ceil(d)-1);
// Use Variables-b d-To Get This Values
console.log(-(Math.floor(b)/Math.ceil(d)).toFixed(2)); //-66.67--> String
console.log(Math.floor(-(Math.floor(b)/Math.ceil(d)).toFixed(2))); //-67 => Number
console.log(typeof(Math.floor(-(Math.floor(b)/Math.ceil(d)).toFixed(2))))
//Assignment one
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000
//your solutions
console.log(100_000); // 100000
console.log(1e1 * 1e4); // 100000
console.log(1e2 * 1e3); // 100000
console.log(5e4 + 5e4); // 100000
console.log(9e4 + 1e4); // 100000
console.log(8e4 + 2e4); // 100000
console.log(10**5); // 100000
console.log(10*10*10*10*10); // 100000
console.log(Math.ceil(99.1)* Math.floor(1000.4)); // 100000
console.log(Math.trunc(1000.9)+Math.trunc(99000.9)); // 100000
//Assignment Two
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
//Assignment Three
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16
//Assignment Four 
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.57
//Assignment Five
let num = 10;
console.log(Number.isInteger(num)+true); // 2
//Assignment Six
let flt = 10.4;
console.log(Math.trunc(flt)); // 10
console.log(flt.toFixed(0)); // 10
console.log(Math.floor(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(parseFloat(flt).toFixed(0)); // 10
//Assignment Seven 
console.log(parseInt(Math.random()*4)); // 0 || 1 || 2 || 3 || 4