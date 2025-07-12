//Creating a question bank
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

//displaying question bank object
const questions = Object.values(questionBank)
console.log(questions[0])
// alert(questions[0].question)

//looping the selected questions and prompts
selectionCount = 1
selectedQuestions = []
score = 0

/*
while(selectionCount <= 3){
    picked = prompt("Pick a number between 1 and 10")
    
    if(!selectedQuestions.includes(picked) && picked <= 10){
        selectedQuestions.push(picked)
        userAnswer = prompt(questions[picked].question.toLowerCase())
        response = questions[picked].answer.toLowerCase()
        //Display the numbers picked
        // alert(`You picked question ${picked}`)
        alert(userAnswer)
        //Increment by 1

        if(userAnswer === response){
        alert(`${response} are correct`)
        score++
        }else{
            alert(`You are wrong, the correct answer is ${response}`)
        }
    }else if(picked > 10){
        alert(`There is no question ${picked}`)
    }else{
        alert(`Question ${picked} is already picked`)
    }

    selectionCount++
}

//Display selected questions
console.log(`Questions ${selectedQuestions} are the ones you attempted`)

alert(`The final score is ${score}/3`)*/