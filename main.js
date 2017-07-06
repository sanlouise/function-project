// 1.
function max(a, b){
  if (a > b) {
    return a
  } return b
}
max(3, 4);

// 2.
function maxOfThree(one, two, three){
    return Math.max(one, two, three)
}
maxOfThree(1, 2, 3);

// 3.
function isVowel(char){
  return ['a', 'u', 'e', 'i', 'o'].indexOf(char.toLowerCase()) !== -1 ? true : false;
}
isVowel('a');

// 4.
let sum = (num1, num2) => {
  return num1 + num2;
}
sum(3, 4);

// 5.
let avg = (number1, number2, number3) => {
  return (number1 + number2 + number3)/3
}
avg(4, 6, 2);

// 6.
let getLength = (string) => {
  return string.length;
}
getLength("Hello");

// 7.
let greaterThan = (param1, param2) => {
  return param2 > param1 ? true : false;
}
greaterThan(4, 5);

// 8.
let greet = (name) => {
  return "Hello, " + name + "!";
}

greet("Mark")

// 9.
let madlib = (one, two, three, four) => {
  return one + " like" + two + " when " + three + " are" + four;
}

madlib("Cows", "grass", "they", "hungry");
