const quizDB=[
    {
        question: "Q1: What is the HTML?",
        a:"Programming Language",
        b:"Software Technology",
        c:"Web Application",
        d:"Markup Language",
        ans:"ans4",
},
{
    question: "Q2: What is the JavaScript?",
    a:"Programming Language",
    b:"Software Technology",
    c:"Web Application",
    d:"Markup Language",
    ans:"ans1",
},
{
    question: "Q3: What is the Full form of CSS?",
    a:"Cascade Styling Sheet",
    b:"Cascading Styling Sheet",
    c:"Cascading Style Sheep",
    d:"Cascading Style Sheet",
    ans:"ans4",
},
{
    question: "Q4: What is Cheerio?",
    a:"Programming Language",
    b:"Node Module",
    c:"Scripting Language",
    d:"CSS Module",
    ans:"ans2",
},
{
    question: "Q5: Widely used Programming Language for Web Development from below is:-",
    a:"React",
    b:"CSS",
    c:"HTML",
    d:"Java Programming",
    ans:"ans4",
},

{
    question: "Q6: Which of these is not a framework of JavaScript",
    a:"React",
    b:"Node",
    c:"Angular",
    d:"Vue",
    ans:"ans2",
},
{
    question: "Q7: _________ is a dynamically typed programming language.",
    a:"Java",
    b:"C",
    c:"C++",
    d:"Python",
    ans:"ans4",
},

{
    question: "Q8: We can store different types of data in a single array in which Programming Language? ",
    a:"Java",
    b:"C",
    c:"Javascript",
    d:"C++",
    ans:"ans3",
},
{
question: "Q9: _________ is responsible for the styling of the webpage.",
a:"HTML",
b:"CSS",
c:"C++",
d:"Python",
ans:"ans2",
},
{
    question: "Q10:Who is the father of computer ",
    a:"James Bond",
    b:"Siddhanto Roy",
    c:"Charles Babbage",
    d:"Elon Musk",
    ans:"ans3",
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const showScore = document.querySelector('#showScore');


const answers = document.querySelectorAll('.answer');
let questionCount = 0;
let score = 0;
const loadQuestion = ()=>{
    const questionList = quizDB[questionCount];
    question.innerText=questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
   
}
loadQuestion();

const getCheckAnswer=()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll=()=>{
    answers.forEach((curAnsElem)=> curAnsElem.checked=false);
}

submit.addEventListener('click',()=>{
        const checkedAnswer = getCheckAnswer();
        console.log(checkedAnswer);
        if(checkedAnswer==quizDB[questionCount].ans){
        score++;
        }
        questionCount++;
        deselectAll();
        if(questionCount<quizDB.length){
            loadQuestion();
        }else{
            showScore.innerHTML=`
            <h2> You scored ${score}/${quizDB.length} 🥂 </h2>
            `
            showScore.classList.remove('scoreArea');
        }
});

