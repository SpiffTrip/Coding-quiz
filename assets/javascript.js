//question1 ="What does 'CDN' stand for?";
//question2 ="What does 'DOM' stand for?";
//question3 ="What does 'HTML' stand for?";


//var start = {
//title: "ready to start? press Start!",
//answers: [],
//  correctAnswer: 0
//};





//function startQuiz() {
//  var titleDiv = document.getElementById("title");
// titleDiv.textContent = start.title;


//shows question when page loads === MAKE WHEN START OR NEXT BTN IS PRESSED
// function showQuestion() {

// var titleDiv = document.getElementById("title");
// titleDiv.textContent = question1.title;

// var answ = document.querySelectorAll(".answers")
// answ.forEach(function (element, index) {
//element.textContent = question1.answers[index];

//  element.addEventListener("click", function () {
// if (question1.correctAnswer == index) {
//    console.log("correct answer");
// }
// else {
//     console.log("wrong answer");
//  }

// var btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
//     showQuestion;
// });


//});
//});
//}
//}



//startQuiz(start);


const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerEl = document.getElementById('question-container')
const questionEl = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
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
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
        question: "what does 'CDN' stand for?",
        answers: [
            { text: "Content Delivery Network", correct: true },
            { text: "Can't Denote Network", correct: false },
            { text: "Character Design Notebook", correct: false },
            { text: "Cats Dogs Nothing", correct: false }
        ]
    },
    {
        question: "What does 'DOM' stand for",
        answers: [
            { text: "Document On Main", correct: false },
            { text: "Document Object Model", correct: true },
            { text: "Double Object Manipulation", correct: false },
            { text: "Dogs On Moms", correct: false },
        ]
    },
    {
        question: "What does 'HTML' stand for?",
        answers: [
            { text: "Huge Time Many Language", correct: false },
            { text: "How Text Makes Language", correct: false },
            { text: "Hot Turtles Making Lemonaide", correct: false },
            { text: "Hyper Text Markup Language", correct: true },
        ]
    }
]



