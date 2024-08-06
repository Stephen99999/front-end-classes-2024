// let  num1 =45;
// let  num2 = 47;
// let num3 = 5
// if (num1<num2 && num2>num3) {
//     alert("true")
    
// }
// else{
//     alert("false")
// }

// let day;
// input = parseInt(prompt("enter this month day"))

// switch (input) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:   
//     day = "Saturday";
// }

// alert(day)

function interest(principal,rate,time){
  let simple_interest;
  simple_interest=(principal*rate*time)/100;
  return simple_interest;
  
}

add = (a,b) => {
  return a+b;
};

// let amount,rate_percent,time_taken;
// amount = parseInt(prompt("how much is your principal ?"));
// rate_percent = parseInt(prompt("what is the rate of interest ?"));
// time_taken = parseInt(prompt("how much time you have ?"));
// value = interest(amount,rate_percent,time_taken);
// alert(value);
// alert(value+amount);


 
// let student = ["dubem",17,1.90]
// student.push("male")

// alert(student)

// let array = new array()
// Array.isArray(student);

// const car = {
//   brand: "Toyota",
//   year: 2008,
//   price: "20milliion"
// };

// console.log(car)


const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person)
const person2 = new Object()

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}

array = []
for (let index = 0; index < 101; index++) {
  array[index]= index+1;
  
}
array.forEach(myFunction)
console.log(array)

for (firstName in person){
  console.log("hello ".concat(person.firstName))
}
let i = 0;
 while (i<1){
  alert("hello")
  i++;
 };// pretest loop
  do {
    
  } while (condition); //post test loop