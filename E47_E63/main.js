/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar", "Ali", "Omaran"];

for (var i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    let one = myAdmins.slice(0, myAdmins.indexOf("Stop"))
    document.write(`<h3>We have ${one.length} Admin</h3>`)
    document.write(`<hr>`)
    for (var j = 0; j < one.length; j++) {
      document.write(`<h3>The Admin For Team ${j+1} Is           ${one[j]}</h3>`)
      
      document.write(`<h1>Team Members </h1>`)
      let counter = 1;
      for (let k = 0; k < myEmployees.length; k++) {
        if (one[j].charAt(0) === myEmployees[k].charAt(0)) {
          document.write(`<h3>${counter}
          —
         ${myEmployees[k]}</h3>`)
          counter++
        }
        
      }
      document.write(`<hr>`)
      
    }
  }
  
  
}

function showData(Name, Age, Status) {
  if (typeof Name === "string") {
    one = Name;
  } else if (typeof Age === "string") {
    one = Age;
  } else {
    one = Status;
  }
  if (typeof Name === "number") {
    two = Name;
  } else if (typeof Age === "number") {
    two = Age;
  } else {
    two = Status;
  }
  if (typeof Name === "boolean") {
    three = Name;
  } else if (typeof Age === "boolean") {
    three = Age;
  } else {
    three = Status;
  }
  if (three === true) {
    console.log(`Hello ${one},Your Age is ${two}, You Are Available for Hire`);
  } else {
    console.log(
      `Hello ${one},Your Age is ${two} , You Are Not Available for Hire`
    );
  }
}
showData("ali", true, 30);
showData(true, "ali", 30);
showData(30, true, "ali");
showData("ali", false, 30);