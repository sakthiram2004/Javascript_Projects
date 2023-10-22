const question=
[{
    question:"Which is largest animal in the World?",
    answers:[
        {text:"shark",correct:false},
        {text:"blue whale",correct:true},
        {text:"elephant",correct:false},
        {text:"giraffe",correct:false},
    ]},
    {
        question:"Which is smallest contry in the World?",
        answers:[
            {text:"Vartica city",correct:true},
            {text:"bhuta",correct:false},
            {text:"Nepal",correct:false},
            {text:"shri lanka",correct:false},
    
        ]
    
    },
    {
        question:"Which is largest desert in the World?",
        answers:[
            {text:"Kalahari",correct:false},
            {text:"gobi",correct:false},
            {text:"sahar",correct:false},
            {text:"Antarctic",correct:true},
    
        ]
    
    }

];
const questionElement=document.getElementById("question");
const answerbuttons=document.getElementById("answerbutton");
const nextButton=document.getElementById("nextbtn");

let currentQuestionIndex =0;
let score = 0;
function startQuiz()
{
    currentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML ="Next";
    showQuestion();
}
function showQuestion()
{
    resetstate();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo +"." + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button =document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if (answer.correct)
        {
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetstate()
{
    nextButton.style.display = "none";
    while(answerbuttons.firstChild)
    {
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}
function selectAnswer(e)
{
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct==="true";
    if (iscorrect)
    {
        selectedBtn.classList.add("correct");
        score++;

    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button =>
        {
            if(button.dataset.correct === "true")
            {
                button.classList.add("correct");
            }
            button.ariaDisabled="true";
        });
        nextButton.style.display = "block";
}
function showScore()
{
    resetstate();
    questionElement.innerHTML=`you scored ${score} out of ${question.length}!`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display ="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length)
    {
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{if(currentQuestionIndex<question.length)
{
    handleNextButton();

}
else{
    startQuiz();
}});

startQuiz();
