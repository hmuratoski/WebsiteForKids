
const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById
("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionsIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click" , () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
console.log("Started")
startButton.classList.add("hide")
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove("hide")
setNextQuestion()
}


function setNextQuestion() {
showQuestion(shuffledQuestions[currentQuestionsIndex])
}

function showQuestion(question){
    questionContainerElement.innerHTML = question.question
    question.answer.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text 
        button.classList.add("btn")
        if (answer, correct) {
            button.dataset.correct = answer, correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetStarte() {
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.lenght > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide")
    }else {
    startButton.innerText ="Restart"
    startButton.classList.remove("hide")
        }
    }

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.clssList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element){
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

  const questions =  [
    {
        question: " What is 2 + 2??  " ,
        question: "Mikä on Suomen pääkaupunki?" ,
        answers: [
            { text: " 4 ", correct: true } ,
            {text: " 22 ", correct: false }
            { text: "Helsinki", correct: true }
            {text: "Kuopio", correct: false }
        ]
    }
]