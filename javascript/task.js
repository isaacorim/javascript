/*
1. reverse string
2. check even or odd
3. capitalize text
4. quiz
*/

//1. reverse string
/*function reverseString(stringEntity){
    return stringEntity.split('').reverse().join('')
}

surname = "Daniel".split('').join('')

console.log(surname)*/

//2. Even or Odd
/*function evenOrOdd(number){
    if(number%2  == 0){
        return "Even"
    }
    else{
        return "Odd"
    }
}*/

//3. Capitalize text
/*function capitalizeText(text){
    return text.toUpperCase()
}

console.log(reverseString("Isaac"))
console.log(evenOrOdd(4))
console.log(evenOrOdd(9))
console.log(capitalizeText("I am a boy."))

function quiz(){
    score = 0;

    alert('Goodluck with the quiz.')

    const q1 = prompt("what is the sum of 2 and 5")
    if(q1 == 7){
        alert('Correct')
        score++
    }
    else{
        alert("Wrong, the answer is: 7")
    }

    const q2 = prompt("what is the sum of 5 and 8")
    if(q2 == 13){
        alert('Correct')
        score++
    }
    else{
        alert("Wrong, the answer is: 13")
    }

    const q3 = prompt("what is the sum of 6 and 5")
    if(q3 == 11){
        alert('Correct')
        score++
    }
    else{
        alert("Wrong, the answer is: 11")
    }

    const q4 = prompt("what is the sum of 4 and 6")
    if(q4 == 10){
        alert('Correct')
        score++
    }
    else{
        alert("Wrong, the answer is: 10")
    }

    const q5 = prompt("what is the sum of 8 and 1")
    if(q5 == 9){
        alert('Correct')
        score++
    }
    else{
        alert("Wrong, the answer is: 9")
    }

    alert("Quiz complete, you scored " + score + "/5")
}*/

// quiz()


//The quiz loop
//for loop
// Question bank as an object
const questionBank = {
    1: { question: "What is 2 + 2?", answer: "4" },
    2: { question: "What is the capital of France?", answer: "Paris" },
    3: { question: "What color is the sky?", answer: "blue" },
    4: { question: "What is 5 * 3?", answer: "15" },
    5: { question: "What is the boiling point of water (in °C)?", answer: "100" },
    6: { question: "Which planet is closest to the sun?", answer: "Mercury" },
    7: { question: "How many continents are there?", answer: "7" },
    8: { question: "Who wrote 'Hamlet'?", answer: "Shakespeare" },
    9: { question: "What is the largest ocean?", answer: "Pacific" },
    10: { question: "What is the square root of 81?", answer: "9" }
};

// Create an array of question keys (1 to 10)
const mykeys = Object.keys(questionBank);

// Shuffle and pick 5 unique random question keys
const selectedKeys = [];
while (selectedKeys.length < 5) {
    const randIndex = Math.floor(Math.random() * mykeys.length);
    const chosenKey = mykeys[randIndex];
    if (!selectedKeys.includes(chosenKey)) {
        selectedKeys.push(chosenKey);
    }
}

console.log(selectedKeys)

let score = 0;
alert("Welcome to the quiz! You'll answer 5 random questions.");

// Loop through the 5 selected questions
for (let i = 0; i < selectedKeys.length; i++) {
    const key = selectedKeys[i];
    const userAnswer = prompt(`Q${i + 1}: ${questionBank[key].question}`).trim().toLowerCase();
    const correctAnswer = questionBank[key].answer.toLowerCase();
    
    if (userAnswer === correctAnswer) {
        alert("Correct!");
        score++;
    } else {
        alert(`Wrong! The correct answer was "${questionBank[key].answer}".`);
    }
}

// Show final score
alert(`Quiz complete! You scored ${score} out of 5.`);

//while loop
// Question bank as an object
/*const questionBank = {
    1: { question: "What is 2 + 2?", answer: "4" },
    2: { question: "What is the capital of France?", answer: "Paris" },
    3: { question: "What color is the sky?", answer: "blue" },
    4: { question: "What is 5 * 3?", answer: "15" },
    5: { question: "What is the boiling point of water (in °C)?", answer: "100" },
    6: { question: "Which planet is closest to the sun?", answer: "Mercury" },
    7: { question: "How many continents are there?", answer: "7" },
    8: { question: "Who wrote 'Hamlet'?", answer: "Shakespeare" },
    9: { question: "What is the largest ocean?", answer: "Pacific" },
    10: { question: "What is the square root of 81?", answer: "9" }
};*/

// Prepare keys and variables
/*const keys = Object.keys(questionBank);
const selectedKeys = [];
let score = 0;
let count = 0;

alert("Welcome to the quiz! You'll answer 5 random questions.");*/

// While loop to select and ask 5 random unique questions
/*while (selectedKeys.length < 5) {
    const randIndex = Math.floor(Math.random() * keys.length);
    const chosenKey = keys[randIndex];

    // Ensure unique selection
    if (!selectedKeys.includes(chosenKey)) {
        selectedKeys.push(chosenKey);

        const question = questionBank[chosenKey].question;
        const correctAnswer = questionBank[chosenKey].answer.toLowerCase();
        const userAnswer = prompt(`Q${count + 1}: ${question}`).trim().toLowerCase();

        if (userAnswer === correctAnswer) {
            alert("Correct!");
            score++;
        } else {
            alert(`Wrong! The correct answer was "${questionBank[chosenKey].answer}".`);
        }

        count++;
    }
}*/

// Show final result
/*alert(`Quiz complete! You scored ${score} out of 5.`);*/

