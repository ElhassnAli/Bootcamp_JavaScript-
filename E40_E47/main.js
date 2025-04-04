//Assignment One
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop('Gamal')
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
// Method 2
myFriends.splice(3, 1); // ["Ahmed", "Elham", "Osama"];
console.log(myFriends)

//Assignment Two

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop('Gamal');
friends.shift('Ahmed')
console.log(friends); // ["Eman", "Osama"]
//Assignment Three


let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = arrTwo.concat(arrOne).sort().reverse()
// Write One Single Line Of Code
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//Assignment Four


let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO
//Assignment Five 


// Write 3 Solutions
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
//let result = haystack.includes(needle);
if (haystack.includes(needle)) {
    console.log('Found')
} // true
if (needle.indexOf(0)===haystack.indexOf(1)) {
    console.log(`Found`)
}//True
if (haystack.indexOf(needle)!== -1) {
    console.log('Found')
}//True



//Challenge 

            /*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice(zero,counter + true).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(true,counter).reverse()); // ["Elham", "Mazero"]

console.log(my[counter - true].slice(zero,counter -true)+my[zero + true].slice(counter - true, counter + counter)); // "Elzero"

console.log(my[zero + true].slice(counter + true,counter + true +true)+ my[zero + true].slice(counter + true +true,counter + true +true +true).toUpperCase()); // "rO"

