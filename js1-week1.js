// console.log('Hello world!');

// let myVariable = "hehe";
// console.log(myVariable);

// let myFirstNumber = 5;
// myFirstNumber = 10;
// myFirstNumber = 2 + 2;
// console.log(myFirstNumber);

// let greeting = ["Hi", "my name is Shayan", "how you doing"];
// console.log(greeting);

// let greeting = "HIIIII"
// console.log(greeting);
// greeting = "hehehe"
// console.log(greeting);
// greeting = "yooohooooo";
// console.log(greeting);

// let greeting = "Hellooooooo"
// console.log(greeting);
// console.log(greeting);
// console.log(greeting);

// let myFavouriteColour = "red";
// console.log(typeof myFavouriteColour);

// let myString = "'Shayan'";
// console.log(myString);
// console.log(typeof myString);

// let firstWord = "Code";
// let secondWord = "Your";
// let thirdWord = "Future";
// let combinedString = firstWord + secondWord + thirdWord;
// console.log(combinedString);

// let secondWord = "Your";
// let combinedString = `Code${secondWord}Future`;
// console.log(combinedString);

// let myName = "Shayan";
// let greeting = "Hello";
// let combinedString = greeting + myName;
// console.log(combinedString);


// let myName = "Shayan";
// let greeting = "Hello";
// let combinedString = `${greeting}+${myName}`;
// console.log(combinedString);

// let numberOfTrainees = 23;
// let numberOfMentors = 7;
// const SUM = numberOfMentors + numberOfTrainees;
// console.log("Total: " + SUM);
// const percentage = Math.round((numberOfMentors * 100) / SUM) + " %";
// const percentageOfTrainees = Math.round((numberOfTrainees * 100) / SUM) + " %";
// console.log("Percentage of Mentors: " + percentage);
// console.log("Percentage of Mentors: " + percentageOfTrainees);

// function greet(user) {
//   console.log("Hello " + user);
// }
// greet("Mariana");

// function add(a,b) {
//   return a + b;
// }
// let myNumber = 1;
// let sum = add(myNumber, 2 * 2);
// console.log(sum);


// first task
console.log("First Task");

function formatPenceToPounds(pence) {
    let pound = pence / 100;
    return "£" + pound 
}

console.log(formatPenceToPounds(1000));
let myPocket = formatPenceToPounds(199);
console.log(myPocket + "\n");

// second task

console.log("Second Task");
function  increaseByHalf(number) {
    let halfNumber = number / 2;
    return number + halfNumber;
}

console.log(increaseByHalf(200) + "\n");

// Third task
console.log("Third Task");
let pocketMoney = 413;
function increaseByHalf_two(pocketMoney) {
    let halfNumber_two = pocketMoney / 2;
    return pocketMoney + halfNumber_two;
}

console.log("£" + increaseByHalf_two(pocketMoney));
