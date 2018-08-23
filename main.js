console.log ("JS loaded!")

//when you type in string, eightball returns y/n
 
// eight ball says yes, no, try again via random functio




document.querySelector("form").addEventListener("submit", submitQuestion);

function submitQuestion(e) {
    e.preventDefault();
    var answers = ["Yes", "No", "Hmmm"];
    var randomAnswers = answers[Math.floor(Math.random() * answers.length)];
    document.querySelector(".answer").innerText = randomAnswers;
}
    


