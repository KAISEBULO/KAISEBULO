console.log("new year");
console.log("Reference");
console.log("Spaces");
let name="marybright";
console.log(name);
console.log("name");
let add=90+9;
console.log(add);
console.log("sogi");
let age="market";
console.log(age);
let percentage=25/100*1000000;
console.log(percentage);
let numbers =20+15+100;
let anything=numbers/3;
console.log(anything);
age="school";
console.log(age);
let school;
school = "Cavendish University";
console.log(school);
const pi = 3.142;
console.log(pi);
// pi=44444; constant variables cannot be reassigned
console.log(pi);
console.log(add)
let one=10
let two=5000
let sum = one + two 
console.log(sum)
let product = one*two
two=4000;
let difference = two-one
let quotient = two/one
console.log(product, difference, quotient)
console.log("hello" + "," + "world")
console.log(`Hello world ${school} ${pi} ${age}`)
console.log(`${anything} ${sum} ${difference}`)
let myname=("kevin")
let averageNumberOfTheValues = (1+2+3)/3
console.log(averageNumberOfTheValues)
// let hvkdlishjvsfuakvvduakfvk = 5
// console.log(hvkdlishjvsfuakvvduakfvk) never use such names!!!!!!!!!!
let array = ["Kevin", "Precious", "Favour", 20, true]
console.log(array)
let details = {
    name: "Marybright",
    age:10000,
    school: "Cavendish"
}
console.log(details.name)
console.log(details.age)
console.log(details.school)
let number1 = 20
number1 += 10000000000000
console.log(number1)
number1 -=10
console.log(number1)
number1 *= 1000
console.log(number1)
number1 /= 10000000000000
console.log(number1)
let number2 = 3%2
number2 %= 1
console.log(number2)
// && AND
// || OR 
// ! NOT
// >, <, >=, <=, ==, !=, ===
let num1 = 1, num2 = 3, num3 = 4, num4 = 5, num5 = 6
// console.log(num1 > num2)
// console.log(num3 < num4)
// console.log(num1 > num2 && num3 < num4)
// console.log(num1 > num2 || num3 < num4)
// console.log(!(num1 < num2))
// console.log(num1 == 1)
// console.log(num1 == "1")
// console.log(num1 === "1")
// console.log(num5 >= 5)
// console.log(num1 !=1)
let names = ["Mary", "Bright", "Dorothy", "Curtis", "Collins"]
// console.log(names)
// names.push("Hamisi")
// console.log(names)
// names.unshift("wow")
// console.log(names)
// names.shift()
// console.log(names)
// names.pop()
// console.log(names)
// console.log(names.length)
// names.splice(0,3)
// console.log(names)
let slicedNames = names.slice(2,4)
console.log(slicedNames)
let digits = [20, 30, 40, 50, 60]
digits.push(70)
console.log(digits)
digits.unshift(20)
console.log(digits)
digits.pop(70)
console.log(digits)
digits.shift()
console.log(digits)
digits.splice(0,3) //first parameter is which index will it start deleting from. Second parameter is how many items should be deleted
console.log(digits)
digits.slice(1,3)
console.log(digits)
console.log("Christmas")
console.log("Traded")
console.log("dwight howard")
let through=("literature")
console.log(through)
console.log("name")
let addition=100+50;
console.log(addition);
console.log("water")
let stool="market"
console.log("stool")
let percentagg=25/100*1000
console.log(percentagg)

function addNumbers(a,b,c){
    return a + b - c;
}
console.log(addNumbers(2,8,2))
console.log(addNumbers(9,8,9))
console.log(addNumbers(6,6,10))

function lessDigits(x,y,z){
    return x - y - z;
}
console.log(lessDigits(10,5,1))
console.log(lessDigits(15,9,3))
console.log(lessDigits(20,14,3))

function areaOfACircle(radius){
    let uuu = 20;
    console.log(uuu);
    return uuu * (radius * radius);
}
let x = function (radius){
    let uuu = 20;
    console.log(uuu);
    return uuu * (radius * radius);
}
console.log(x(10))

console.log(areaOfACircle(16))
console.log(areaOfACircle(8))
console.log(areaOfACircle(7))
let uuu = 66;
console.log(uuu);

// let a,b,c = 10;
let a=10, b=20, c = 30;
if(a==10){
    console.log("a is equal to 10")
}
else{
    console.log("your comparison is incorrect")
}
let response=false
if(response == true){
    console.log("Your page has reloaded")
}
else{
    console.log("loading....")
}

for(let i = 0; i<=100; i+=20){
    console.log(i)
}
let i = 0;
// while(i<=100){
//     console.log(i)
//     i+=20;
// }
do{
    console.log(i)
    i+=20;
}
while(i<=100)
// let myButton = document.querySelector("#submitButton")
let buttons = document.querySelectorAll("button")
let myButton = document.getElementById("submitButton")
console.log(myButton)
console.log(buttons)
let header = document.querySelector("header")
console.log(header)
myButton.style.color = "pink"
myButton.style.padding = "1rem"
myButton.style.borderRadius = "1rem"
myButton.style.backgroundColor = "grey"
myButton.style.fontStyle = "italic"
myButton.style.margin = "1rem"
// function handleClick(event){
//     event.preventDefault()
//     myButton.style.color = "blue"
//     myButton.style.backgroundColor = "teal"
// }
// myButton.addEventListener("click", handleClick)
myButton.addEventListener("click", function handleClick(event){
    event.preventDefault()
    myButton.style.color = "blue"
    myButton.style.backgroundColor = "teal"
})
// myButton.addEventListener("click", handleClick)
let movieButton = document.querySelector(".moviebutton")
console.log(movieButton)
function movieClick(){
    movieButton.style.backgroundColor = "purple"
    movieButton.style.color = "pink"
    let mary = "name"
}
movieButton.addEventListener("click", movieClick)
console.log(mary)
