const configContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const answerOptions = document.querySelector(".answer-options");
const questionStatus = document.querySelector(".question-status");
const resultContainer = document.querySelector(".result-container");
const timerDisplay = document.querySelector(".time-duration");

let currentQuestion = null;
let quizCategory = 'easy';
const QUIZ_TIME_LIMIT = 15;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;
const questionIndexHistory = [];
let numberOfQuestions = 5;
let correctAnswerCount = 0;

// display the quiz result and hide the quiz container

const showQuizResult = () => {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    const resultText = `You answered <b>${correctAnswerCount}<b/> out of <b>${numberOfQuestions}</b> questions correctly. Great Effot!`;
    document.querySelector(".result-message").innerHTML = resultText;
}

// clear and reset the timer
const resetTimer =() => {
    clearInterval(timer);
    currentTime = QUIZ_TIME_LIMIT;
    timerDisplay.textContent = `${currentTime}`;
}

// initialize and start the timer for the current question
const startTimer = () => {
    timer = setInterval(()=> {
        currentTime--;
        timerDisplay.textContent = `${currentTime}s`;

        if(currentTime <=0) {
            clearInterval(timer);
            highlightCorrectAnswer();
            document.querySelector(".next-question-btn").style.visibility = "visible";
            quizContainer.querySelector(".quiz-timer").style.background = "#c31402";
            // disable all anser options after one option is selected
            answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");
        }
    },1000)
}

// fetch a random question from based on the selected category

const getRandomQuestion = () => {
    const categoryObj = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase());
    const categoryQuestions = categoryObj?.questions || [];
    console.log(categoryQuestions);

    //show the results if all questions have been used
    if(questionIndexHistory.length >= numberOfQuestions){
        return showQuizResult();
    }

    // filter out the already asked questions and choose a random one
    const availableQuestions = categoryQuestions.filter((_, index) => !questionIndexHistory.includes(index));
    const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    questionIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
    console.log(randomQuestion);
    return randomQuestion;
}

// resolve correct answer index for a question
const getCorrectIndex = (question) => {
    if (!question) return -1;
    if (typeof question.correctAnswer === 'number') return question.correctAnswer;
    if (typeof question.answer === 'string' && Array.isArray(question.options)) return question.options.indexOf(question.answer);
    return -1;
}

// handle the correct answer option and add icon
const highlightCorrectAnswer = () => {
    const correctIdx = getCorrectIndex(currentQuestion);
    if (correctIdx < 0) return;
    const opts = answerOptions.querySelectorAll(".answer-option");
    const correctOption = opts[correctIdx];
    if (!correctOption) return;
    correctOption.classList.add("correct");
    const iconHTML = `<span class="material-symbols-outlined">check_circle</span>`;
    correctOption.insertAdjacentHTML("beforeend", iconHTML);
}

// handle the user answer selection
const handleAnswer = (option, answerIndex) => {
    const correctIdx = getCorrectIndex(currentQuestion);
    const isCorrect = answerIndex === correctIdx;
    option.classList.add(isCorrect ? 'correct' : 'incorrect');

    if (!isCorrect) {
        highlightCorrectAnswer();
    } else {
        correctAnswerCount++;
    }

    // insert icon based on correctness
    const iconHTML = `<span class="material-symbols-outlined">${isCorrect ? 'check_circle' : 'cancel'}</span>`;
    option.insertAdjacentHTML("beforeend", iconHTML);

    // disable all answer options after one option is selected
    answerOptions.querySelectorAll(".answer-option").forEach(opt => opt.style.pointerEvents = 'none');

    const nextBtnEl = document.querySelector(".next-question-btn");
    if (nextBtnEl) nextBtnEl.style.visibility = "visible";
}

const renderQuestion = () => {
    currentQuestion = getRandomQuestion();
    if(!currentQuestion) return;

    resetTimer();
    startTimer();

    //update the ui
    answerOptions.innerHTML = "";
    document.querySelector(".next-question-btn").style.visibility = "hidden";
    document.querySelector(".question-text").textContent = currentQuestion.question;
    questionStatus.innerHTML = `<b>${questionIndexHistory.length}</b> of <b>${numberOfQuestions}</b> Questions`;

    // create option li elements and append them and add click event listeners;
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.classList.add("answer-option");
        li.textContent = option;
        answerOptions.appendChild(li);
        li.addEventListener("click", ()=> handleAnswer(li, index));
    })

}

// start the quiz and render the question
const startQuiz = () => {
    configContainer.style.display = "none";
    quizContainer.style.display = "block";

    // update the quiz category and number of questions (try multiple selectors to be resilient to HTML)
    const levelActive = configContainer.querySelector('.level-options button.active') || configContainer.querySelector('.category-option.active');
    const questionActive = configContainer.querySelector('.question-options button.active') || configContainer.querySelector('.question-option.active');
    if (levelActive) quizCategory = levelActive.textContent.trim().toLowerCase();
    if (questionActive) numberOfQuestions = parseInt(questionActive.textContent) || numberOfQuestions;

    renderQuestion();
}

// highlight the selected option on click category or no of questions
document.querySelectorAll(".level-options button, .question-options button").forEach(option => {
    option.addEventListener("click", () => {
        const parent = option.parentNode;
        const prev = parent.querySelector('.active');
        if (prev) prev.classList.remove('active');
        option.classList.add('active');
    });
});

// reset the quiz and return to the configuration container

const resetQuiz = () => {
    correctAnswerCount = 0;
    questionIndexHistory.length = 0;
    resultContainer.style.display = "none";
    configContainer.style.display = "block";
}

const startBtn = document.querySelector('.start-quiz-button');
if (startBtn) startBtn.addEventListener('click', startQuiz);
const tryAgainBtn = document.querySelector('.try-again-btn');
if (tryAgainBtn) tryAgainBtn.addEventListener('click', resetQuiz);
const nextBtn = document.querySelector('.next-question-btn');
if (nextBtn) nextBtn.addEventListener('click', renderQuestion);