
let day = "     Tuesday   ";
day =day.trim();
if (day.length > 0){
    day.charAt(0).toUpperCase + day.slice(1);
}
switch (day) {
    case 'Friday':
    case 'Saturday':
    case 'Sunday':
        console.log("No Appointments Available");
    break;
    case 'Monday':
    case 'Thursday':
    console.log("From 10:00 AM To 5:00 PM");
   break;
    case 'Tuesday':
        console.log("From 10:00 AM To 6:00 PM");
    break;
    case 'Wednesday':
        console.log("From 10:00 AM To 7:00 PM");
    break;
    default:
        console.log( "Its Not A Valid Day");
}
////////////////
////////////////

let job = "Support";
let salary = 0;
switch (job) {
    case 'Manager':
        salary = 8000;
        console.log(salary);
        break;
    case 'IT':
    case 'Support':
        salary = 6000;
        console.log(salary);
         break
    case 'Developer':
    case 'Designer' :
        salary = 7000;
        console.log(salary);
        break
    default:
    salary = 4000;
        console.log(salary)
}


//////////////////
//////////////////
let holidays = 4;
let money = 0;
    if (holidays == 0) {
    money =5000;
    console.log(`My money is ${money}`)}
    else if (holidays == 1 || holidays== 2) {
       money =3000;
       console.log(`My Money is ${money}`)
    }
    else if (holidays==3) {
        money =2000;
        console.log(`My money is ${money}`);
    }
    else if (holidays == 4) {
        money = 1000;
        console.log (`My money is ${money}`);
    }
    else if (holidays == 5) {
        money = 0;
        console.log(`My money is ${money}`);
    }
    else{
        money = 0;
        console.log(`My money is ${money}`);
    }
