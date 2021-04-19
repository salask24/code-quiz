//items we want to target

const question = document.querySelector('#question');
//querySelector you can targer both class and id
const choices = Array.from(document.querySelectorAll('.choice-text'));
//this would gather all the choice-text from html - which are the choice selections
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

console.log(choices);

//scores

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

//Questions

let questions = [
    {
        question:
            "Which tool can you use to ensure code quality?",
        choice1: "Angular",
        choice2: "jQuery",
        choice3: "RequireJS",
        choice4: "ESLint",
        answer: 4,
    },
    {
        question:
            "Who invented JavaScript?",
        choice1: "Sheryl Sandberg",
        choice2: "Kimberly Salas",
        choice3: "Brendan Eich",
        choice4: "Michael Scott",
        answer: 3,
    },
    {
        question:
            "Which one of these is a JavaScript package manager?",
        choice1: "npm",
        choice2: "Node.js",
        choice3: "TypeScript",
        choice4: "style",
        answer: 1,
    },
    {
        question:
            "Which of the follong is NOT a JavaScript Data Types?",
        choice1: "Number",
        choice2: "Null",
        choice3: "String",
        choice4: "Boolean",
        answer: 2,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }
//this will keep track of the score


    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    // ex. question 1 of 4 - incrementing by 1 each time
    progressText.getElementsByClassName.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    //going to calculate what question we're on and correspond the percentage we're at

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    //calculate the value of question index
    currentQuestion = availableQuestions[questionsIndex]
    //keep track what question we're on
    question.innerText = currentQuestion.question
    //going to know what question to ask

    choices.forEach(choice => {
        const number = choice.dataset['number']
        //data with data-number - to know what choices we're clicking on
        choice.innerText = currentQuestion['choice' + number]
        //innerText
    })

    availableQuestions.splice(questionIndex, 1)
    //removed elements from an array (questionIndex)
    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        //toggle the correct css which is green and red for incorrecr
            'incorrect'

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(classToApply)
        //add it whenever we get it right

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            //if we get it wrong we have time to see what we got wrong
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()