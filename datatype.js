// 1. Declare a variable named challenge and assign it to an initial value 
let challenge = 'Full stack JS track';
// 2. Print the string on the browser console using console.log()
console.log(challenge)
// 3. Print the length of the string on the browser console using console.log()
console.log(`la longeur de la variable challenge est : ${challenge.length}`)
// 4. Change all the string characters to capital letters using toUpperCase() method
let capitalizedString = challenge.toUpperCase();
console.log(capitalizedString)
// 5. Change all the string characters to lowercase letters using toLowerCase() method
let capitaLowerString = challenge.toLowerCase();
console.log(capitaLowerString)
// 6. Cut (slice) out the first word of the string using substr() or substring() method
let result = challenge.substr(5,challenge.length-1);
console.log(result)
// 7. Slice out the phrase Full stack from Full stack JS track .
console.log(challenge.slice(10,19))
// 8. Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'))
// 9. Split the string into an array using split() method
console.log(challenge.split())
// 10. Split the string Full stack JS track at the space using split() method
console.log(challenge.split(' '))
// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the
// comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(','))
// 12. Change Full stackJS track to Full stackJS group using replace() method
console.log(challenge.replace('track','group'))
// 13. What is character at index 15 in 'Full stack JS track ' string? Use charAt() method.
let characterAtIndex15 = challenge.charAt(15)
console.log("character at index 15 " , characterAtIndex15 )
// 14. What is the character code of J in 'Full stack JS track ' string using charCodeAt()
let characterCodeOfJ = challenge.charCodeAt(challenge.indexOf('J'))
console.log(" character code of J " , characterCodeOfJ )
// 15. Use indexOf to determine the position of the first occurrence of a in Full stackJS track
let firstOccurrenceOfA = challenge.indexOf('a')
console.log("first occurrence of (A)",firstOccurrenceOfA)
// 16. Use lastIndexOf to determine the position of the last occurrence of a in Full stackJS track
let lastOccurrenceOfA = challenge.lastIndexOf('a')
console.log("last occurrence of (A)",lastOccurrenceOfA)
// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction';
let firstOccurrenceOfBecause = sentence.indexOf('because');
console.log("Position of the first occurrence of 'because':", firstOccurrenceOfBecause);
// 18. Use lastIndexOf to find the position of the last occurrence of the word because in
// the following sentence:'You cannot end a sentence with because becausebecause is a conjunction'
let lastOccurrenceOfBecause = sentence.lastIndexOf('because');
console.log("Position of the last occurrence of 'because':", lastOccurrenceOfBecause);
// 19. Use search to find the position of the first occurrence of the word because in the
// following sentence:'You cannot end a sentence with because because because
// is a conjunction'
let  positionOfBecause = sentence.search('because')
console.log("Position of the first occurrence of 'because':", positionOfBecause);
// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a
// string.E.g ' 30 Days Of JavaScript '.
let stringWithWhitespace = '         30 Days Of JavaScript       ';
let trimmedString = stringWithWhitespace.trim();
console.log("Trimmed string:", trimmedString);
console.log("         30 Days Of JavaScript       ");
// 21. Use startsWith() method with the string Full stackJS track and make the result true
console.log(challenge.startsWith('Full'))
// 22. Use endsWith() method with the string Full stackJS track and make the result true
console.log(challenge.endsWith('track'))
// 23. Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(stringWithWhitespace.match(/[a]/g).length)
// 24. Use concat() and merge 'full stack ' and 'JavaScript' to a single string, 'Full stack JS
// track'
let partone = 'full stack'
let secendpart = 'JavaScript'
console.log(partone.concat(secendpart))
// 25. Use repeat() method to print Full stackJS track 2 times
let sentenceToRepeat = 'Full stackJS track'
console.log(sentenceToRepeat.repeat(2));

// PART 2 

// 7. Generate a random number between 0 and 100 inclusively.
let randomNUmber = Math.random()
console.log(Math.floor(randomNUmber *100));
// 8. Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(randomNUmber *50+50)); 
// Math.floor(math.rendom())*(max-min)+min)

// 9. Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(randomNUmber *255));
// 10. Access the 'JavaScript' string characters using a random number.

// Date type exercises


// g. Find out the numbers of seconds elapsed from January 1, 1970 to now
const str = "1970-01-01T15:30:00+00:00";
const date = new Date(str);
console.log(date);

const todayDate = new Date();
console.log(todayDate);

// time elapsed since date 

const timeElapsed = (todayDate-date) / 1000;
console.log(timeElapsed);

// if , else

// let ageuserone = prompt("user one Enter your age");
// let ageusertwo = prompt("user two Enter your age");
// let message;
// if (ageuserone - ageusertwo >0 ) {message = `user one is ${ageuserone-ageusertwo} year younger than user two`;} 
// else {message = `user two is ${ageusertwo-ageuserone} year older than user one`;}
// alert(message);

//                                                 -- exo 2 --
// let userAge = prompt("enter your age");
// let message;

// if (userAge  >= 18 ) {
//     message = `you are old enough to drive`
// }
// else {message = `you are left with ${18-userAge} yeurs to drive`;}
// alert(message)
//                                                 -- exo 3 --

// num = -3
// if (num > 0) {
//   console.log(`${num} is a positive number`)
// } else {
//   console.log(`${num} is a negative number`)
// }

// let userInput = prompt("Enter a number:");
// let number = parseInt(userInput);
// if (number % 2 === 0) {
//     console.log(number + " is an even number.");
// } else {
//     console.log(number + " is an odd number.");
// }


//                                                 -- exo 4 --
// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-79, B
// 60-69, C
// 50-59, D
// 0-49, F

// switch(caseValue){
//     case 1:
//       // code
//       break
//     case 2:
//      // code
//      break
//     case 3:
//     // code
//     default:
//      // code
//   }

//   let grad1 = prompt("give me ur score")
//   switch (true) {
//     case (80 < grad1 && grad1 < 100):
//         alert("your grad is A")
//         break;
//     case (70 <= grad1 && grad1 <=79):
//         alert("your grad is B")
//         break;
//     case (60 < grad1 && grad1 < 69):
//         alert("your grad is c")
//     default:
//         alert("NO")
//   }

//                                                 -- exo 5 --

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// let month = prompt("enter the month")
// switch (true) {
//     case month == `September` || `October` || `November`:
//         alert('the season is Autumn')
//         break;
//         case month == `December` || `January` || `Feruary`:
//             alert('the season is Winter')
//             break;
//             case month == `March` || `April` || `May`:
//         alert('the season is Spring')
//         break;
//         case month == `June` || `July` || `August`:
//         alert('the season is Summer')
//         break;
//     default:
//         alert('invalide month')
let month = prompt("enter the month")
switch (month) {
    case 'January':
    case 'December':
    case 'Feruary':
      alert('the season is winter');
      break;
    case 'September':
    case 'October':
    case 'November':
      alert('the season is Autumn');
      break;
    case 'March':
    case 'April':
    case 'May':
      alert('the season is Spring');
      break;
    case 'June':
    case 'July':
    case 'August':
      alert('the season is Summer');
      break;

    default:
      alert ('invalide month')
}




























