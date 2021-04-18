const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorALL('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');


let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question:
            "",
        choice1: "f",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: 4,
    },
    {
        question:
            "",
        choice1: "f",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: 4,
    },
    {
        question:
            "",
        choice1: "f",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: 4,
    },
    {
        question:
            "",
        choice1: "f",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: 4,
    }
],