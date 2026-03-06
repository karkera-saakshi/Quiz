let playerbox = document.getElementById("playerbox");
let name1 = localStorage.getItem("name");
let showName = () =>{
    playerbox.innerText = "Player : "+name1;
}
showName();
let a1 = [];
let index = 0;
let score = 0;
let loadQuestion = async() =>
{
    a1 = await fetch("./quiz.json");
    a1 = await a1.json();
    console.log(a1);
    showQuestion();
}
loadQuestion();
let question = document.getElementById("question");
let options = document.getElementById("options");
let nextBtn = document.getElementById("next-btn");
let showQuestion = () =>
{
    current = a1[index];
    console.log(current);
    question.innerText = current.question;
    current.options.forEach(
        (str,i) => {
        let b1 = document.createElement("button");
        b1.innerText = str ;
        b1.classList.add("option-btn");
        options.appendChild(b1);
        b1.addEventListener("click",()=>{
            checkAnswer(i)
        }
        );
        console.log(i);
    });
}
let nextQuestion = () =>{
    index++;
    options.innerHTML = "";
    if(index>=a1.length)
    {
        nextBtn.style.display = "none";
        question.innerText = "Quiz Completed";
        return;
    }
    loadQuestion();
}
let checkAnswer = (i) =>{
    let correctAnswer = current.correct;
    if(i===correctAnswer)
    {
        score++;
        scoreTag = document.getElementById("score");
        scoreTag.innerText = "Score: "+score;
    }
    let btnArray = document.querySelectorAll(".option-btn");
    btnArray.forEach(
            (btn, index)=>
            {
                btn.disabled = true;
                if(index===correctAnswer)
                {
                    btn.style.backgroundColor = "#22c55e";
                    btn.style.color = "black"
                }
                else{
                    btn.style.backgroundColor = "#ef4444";
                    btn.style.color = "black"
                }
            }
    )
}