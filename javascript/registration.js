//DOM: Document Object Model

// function myFunction(){ alert("New Function") }

// myFunction = function(){ alert("New Function") }

// myFunction = ()=>{ alert("New Function") }
			// x=>x<13 A very localized miniature arrow function
// myFunction()

myObject = { name: "Isaac", age: 3, fair: true, subjects:
["HTML", "css", "js"]} 

simple = 9
//$ is for variables or expressions
description = `I am & learning fullstack development. It entails HTML's work,
the first thing you display is \"hello world\". I would rate it ${simple * 100} percent over 100`
//To allow output of specific datatypes

/*g-flag: global varible, i-flag:case sensitivity */

//methods used for strings
output = description.slice(7,100)
// console.log(description.length)//output the length of the description
// console.log(description[101])//To extract specific characters based on the position 
// console.log(output)//To extract a set of content from a set of strings



// document.getElementById("output").innerHTML = simple
// document.getElementById("output").innerHTML = myObject

// alert(typeof(simple))
// console.log(typeof(myObject.subjects)) 
// alert(description)


//Arrays
const age	= [10,12,13,12,15,14,13]

//Ways to check for array type
// myArray = Array.isArray(age)
// console.log(myArray)

// newInstance = age instanceof Array
// console.log(newInstance)

//Assignment: 7 methods used for strings

stringValues = age.toString()
// console.log(stringValues)
// console.log(typeof(stringValues))

//Methods for searching an array

// ageSearch = age.indexOf(12)
// ageSearch = age.lastIndexOf(12)
// ageInclude = age.includes(12)
function myFunction (value, index, array) {return value < 13}
Isaac = age.find(myFunction) //The first element in the array that satisfies the boolean condition starting from the beginning of the array
// Isaac = age.findIndex(myFunction)
// Isaacindex = age.findLast(x=>x>12) //same definition of find but starts from the end. 
// Isaac = age.findLastIndex(y=>y<13)
console.log(Isaac)

//parameters is a variable that is used in a function definitions. Argument is the actual value that is passed into a function. 

//Methods for sorting arrays
solarex = ['Bountiful', 'Tosin', 'Isaac', 'David', 'Bishop']
prices = [3200, 24, 1250, 2250, 4050, 50, 100, 250]
// console.log(prices)
// sortMethod = solarex.sort()
// sortMethod = solarex.toSorted()
// sortMethod =  solarex.reverse()
// sortMethod =  solarex.toReversed()

//Number sorting
noSort = function (a, b){return a-b}
noSortRev = function (a, b){return b-a}
randSort = function(){return 0.5 - Math.random()}

prices.sort(randSort)
// console.log(prices)

//JS Math functions
rounded = Math.round(2.5)
ceiling = Math.ceil(2.5)
floorMth = Math.floor(2.5)
truncate = Math.trunc(2.5)
signPos = Math.sign(2.5)
signNeg = Math.sign(-2.5)
power = Math.pow(2,3)
squareRoot = Math.sqrt(144)
absolute = Math.abs(-23)
random = Math.random() * 10
// console.log(Math.trunc(random))
minimum = Math.min(41,27,38,91,1001,32)
maximum = Math.max(41,27,38,91,1001,32)
// console.log(maximum)

//More math functions, fix join, find other things to map
pie = Math.PI
cube = Math.cbrt(216)
sine = Math.sin(10)
cosine = Math.cos(10)
log = Math.log(10)

// console.log(log)



// myFunction(3,5,7) diff betweeen parameters and arguments in a functon

students = []
students[0] = 12
students[1] = 13
students[2] = 14
// console.log(students)

// console.log(students[1])


//JS Assgnments
/*
2. nested js, object and array read and show examples.
3. make use of ten different array methods. read about them.
*/

//nested function
function calculator() {
	function sum(){
		total = 4
		console.log(total)
	}
}

calculator()

//nested objects
const person = [
	 {
		name: "Ade",
		age: 4,
		nation: "Brazil",
		food: "rice"
	},

	 {
		name: "John",
		age: 5,
		nation: "Japan",
		food: "Beans"
	},

	 {
		name: "Mary",
		age: 6,
		nation: "Nigeria",
		food: "Yam",
		courses: ["HTML", "CSS", "JS"]
	}
]

Mary = person[2]["courses"]
document.getElementById('output').innerHTML =
Mary

//nested array
brands = [
	['Volvo', 'Toyota', 'Mercedes'],
	['Techno', 'Iphone', 'Nokia'],
	[1, 2, 3]
]

// console.log(brands)
// document.getElementById("output").innerHTML =
// `${brands[0]} <br> ${brands[1]} <br> ${brands[2]}`
// To be readdressed in loops



//Array methods
let array = ["Afolabi", 23, "Accountant", 
	false, "Country Side"]

//array.push("Nigeria")

//array.pop()

//array.unshift("Afolabi")

//array.shift();

// array.splice(2, 1, "Engineer")

//array.slice(1,4)

//array.reverse()

join = array.join('')

// conc = array.concat(["Lagos", 45])

// map = array.map(item => typeof(item)) 

let fruits = ['apple', 'banana', 'cherry']

map = fruits.map(fruit => fruit.toUpperCase()) 

document.getElementById('output').innerHTML = join
// console.log(map)
// console.log(fruits)



// time = prompt(alert("Enter a 4-digit number and check the console  for your result"))

//Calculate the seconds
// if(time < 60){
// 	console.log(time)
// }
// else{
// 	console.log(`${time} seconds = ${Math.trunc(time/60)} minutes and ${time%60} seconds`)
// }

//boolean operator
first = "isaac"
second = 38
isaac = 27
fifth = "27"

console.log(isaac == fifth) //Checks for content
console.log(isaac === fifth) //Checks for both content and datatype
console.log(isaac != fifth) //Checks for content
console.log(isaac !== fifth) //Checks for both content and datatype
console.log(second > isaac) // Checks for content
console.log(isaac < second)
console.log(second >= fifth)
console.log(isaac <= second)
console.log(isaac === fifth || isaac == fifth) //The || stands for "or", either the first condition or the second condition can be true.
console.log(isaac === fifth || isaac != fifth)
console.log(isaac === fifth && isaac == fifth) //The && stands for "and", both conditions must be true.
console.log(!(isaac === fifth || isaac != fifth)) //The ! stands for "Not"



//Example of if statement
// score = prompt('What is your score?')

// if(score >= 70){
// 	alert("You are a high flyer")
// }else if(score < 70 && score >= 30){
// 	alert("You are an average scorer")
// }else if(score < 30 || score == null){
// 	alert("Such a low score")
// }else{
// 	alert("Invalid input")
// }

//Difference between if, ternary and switch statement

//Loops
// looping through an array
//Foreach: tradition function definiton for it
colours = ["red", "blue", "purple", "green", "white"]
// colours.forEach(function (x){console.log(x)})

//map: arrow function works best for mapping
let upper = colours.map(c => c.toUpperCase())
// console.log(upper)

//filter
let long = colours.filter(z => z.length >= 4)
// console.log(long)

//reduce
let sum = [1,2,3,4,5].reduce((a,b) => a + b)
// console.log(sum)

//loop types
//for loop: iteration of a particular block of code
// for (let i=0; i<=3; i++){console.log(i)}

//while loop
// let i=0;
// while(i<=3){
// 	console.log(i); 
// 	i++
// }

//do...while
let i=0;
do{
	console.log(i);
	i++;
}while(i<=3)

//for..of
for(let fruit of ["Mango","Banana", "Pear"]){
	console.log(fruit)
}

//Read on query selector

//DOM
text = document.querySelector(".array")
console.log(text)
document.querySelector(".array").style.display = "block"
if  (text.value === "jargons"){
	document.querySelector(".array").innerHTML = "Content"
}


// document.querySelectorAll(".array").style.backgroundColor = "blue"

function mydisplay(){
	document.getElementById("form").style.display = "none"
	document.querySelector(".rollingBox").style.display = "block"
	document.querySelector("#myBody").style.backgroundImage = "linear-gradient(white, pink, purple)"
}

//if, switch, ternary statement - control statement
//Quiz: create question bank and loop through the question. Object variable can come in handy 

//if statement
// x = prompt("Enter a number")

// if(x%2 == 0){
// 	console.log(`${x} is an even number`)
// }else{
// 	console.log(`${x} is a odd number.`)
// }

//ternary statement: JS operator that has three operands
//condition ? expressionIfTrue : expressionIfFalse
// let legalAge = prompt("How old are you?")

// let eligible = legalAge >= 18 ? "You are above 18 years of age." : "You are not above 18 years of age."

// console.log(eligible)

//switch statement
// children = prompt("How many children do you have?")

// switch(children){
// 	case '1': 
// 	console.log("Single child")
// 	break

// 	case '2': 
// 	console.log("Twin")
// 	break

// 	case '3': 
// 	console.log("Triplet")
// 	break

// 	case '4': 
// 	console.log("Quadruplet")
// 	break

// 	case '5': 
// 	console.log("Quintupet")
// 	break

// 	default:
// 		console.log("God's time is the best")
// }

//form validation
document.getElementById("myEvent").addEventListener("mouseup", () => {
document.querySelector(".displayParagraph").style.display = "block"
// alert("Button clicked")
})   //  onclick is used  

// form.addEventListener("submit", (e) => {e.preventDefault() 
// 	if(input.value === ""){
// 		alert("field required")
// 	}})

function validateForm(){
	let x = document.forms["myForm"]["fullname"].value
	if(x==""){
		console.log("name is blah")
	}
}
