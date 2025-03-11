/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase()+a.slice(3,6)); // Zero

// 8 H
console.log(a.charAt(13).toUpperCase().repeat(10)); // HHHHHHHH

// Return Array
console.log(a.split(' ',1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0,6)+' '+a.substr(11,6)); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(a.charAt(0).toLowerCase()+a.slice(1,a.length-1).toUpperCase()+a[a.length-1].toLowerCase()); // eLZERO WEB SCHOOl // eLZERO WEB SCHOOl
//Assignment One
let userName = "Elzero";
console.log(a.charAt(0).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName[userName.length-3].toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName.charAt(3)); // e
console.log(userName.charAt(3).repeat(3)); // eee
//Assignment Two
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.includes(letterE)); // True
console.log(word.endsWith(letterO.toLowerCase())); // True