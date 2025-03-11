//Assignment One
// Test Case 1
let num01 = 9; // "009"
if (num01 < 10) {
    console.log(`00${num01}`)
}
// Test Case 2
let num02 = 20; // "020"
if (num02 > 10 && num02 < 100) {
    console.log(`0${num02}`)
}
// Test Case 3
let num03 = 110; // "110"
if (num03 >= 100) {
    console.log(num03)
}
////////////////////////////////
//Assignment Two
let num1 = 9;
let str = "9";
let str2 = "20";
////
if (num1 == str) {
    console.log(`${num1} is the same value As ${str}`)
}
if (num1 == str && typeof num1 != typeof str) {
    console.log(`${num1} is the same value As ${str} but not the same type`)
}
if (num1 != str2 && typeof num1 != typeof str2) {
    console.log(`${num1} is not the same value or the same type as ${str2}`)
}
if (typeof str === typeof str2 && str !== str2) {
    console.log(`${str} is the same type as ${str2} but not the same value`)
}
// Output
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"
////////////////////////////////
//Assignment Three
let num10 = 10;
let num20 = 30;
let num30 = "30";
// Needed Output
if (num30 > num10 && typeof num30 !== typeof num10) {
    console.log(`${num30} Is Larger Than ${num10} And Type string Not The Same Type As number`)
}
else if (num20 > num10 && num20 === num30) {
    console.log(`${num20} Is Larger Than ${num10} And Value Is The Same As ${num30} And Type string Not The Same Type As number`)
}
else if (num30 === num10 && typeof num30 !== typeof num10 && typeof num30 !== typeof num20) {
    console.log(`${num30} Value And Type Is Not The Same As ${num10} And Type Is Not The Same As ${num20}`)
}
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
//Assignment Four
// Edit What You Want Here

let num100 = 10;
let num200 = 8;
let num300 = 10;
let num400 = 33;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num100 > num200) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num100 > num200 && num100 < num400) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num100 > num200 && num100 === num300) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num100 + num200) < num400) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num100 + num300) < num400) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num100 + num200 + num300) < num400) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num400 - (num100 + num300) + num200 === 21) {
  console.log("True");
} else {
  console.log("False");
}

//////////
/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
   console.log(10);
} else if (a >= 10 && a <= 40) {
   console.log("10 To 40");
} else if (a > 40) {
    console.log("> 40");
} else {
    console.log("Unknown");
}
let A =50;
A < 10 ?console.log(`less than 10`):A>=10&& A<=40?console.log(`10 to 40`):A>40?console.log(`beggar than 40`):console.log(`Unknown`)
    


// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

if (st.length *2 === +"34") {
    console.log("Good");
}
 // Position May Change
if (st.charAt(st.indexOf('W')).toLowerCase ()=== "w") {
   console.log("Good");
}

if ( !typeof (st)!== "string") {
    console.log("Good");
}

if (typeof (st.length) === "number") {
    console.log("Good");
}
if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
    console.log("Good");
}

