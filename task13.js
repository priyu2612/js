const questions = [
    {
        question:"which is largest animal in the world?"
        answer: [
            {Text: "shark",correct:false},
            {Text: "Blue whale",correct:false},
            {Text: "Elephant",correct:true},
            {Text: "Giraffe",correct:false},
        ]
    },
    {
        question:"which is the smallest country in the world?"
        answer: [
            {Text: "vatican City",correct:true},
            {Text: "Bhutan",correct:false},
            {Text: "Nepal",correct:false},
            {Text: "Shri Lanka",correct:false},
        ]
    },
    {
        question:"which is largest desert in the world?"
        answer: [
            {Text: "Kalahari",correct:false},
            {Text: "Gobi",correct:false},
            {Text: "Suhara",correct:false},
            {Text: "Antarctica",correct:true},
        ]
    },
    {
        question:"which is the smallest continent in the world?"
        answer: [
            {Text: "Asia",correct:false},
            {Text: "Austalia",correct:true},
            {Text: "Arctic",correct:false},
            {Text: "Africa",correct:false},
        ]
    }

];
    const questionElement = document.getElementById("question");
    const answerButton = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz(){
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        showQuestion();
    }
    function showQuestion(){
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestion + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
        questions;

        currentQuestion.answers.forEach(answers => {
            const buttons = document.createElement("button");
            buttons.innerHTML = answers.Text;
            buttons.classList.add("btn");
            answerButton.appendChild(buttons);
        });
    }
    startQuiz();