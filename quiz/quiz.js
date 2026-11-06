const questions = [
  {
    question: "Which method creates a new array?",
    options: ["forEach", "map", "find", "push"],
    answer: "map"
  },
  {
    question: "Which keyword declares a constant?",
    options: ["var", "let", "const", "static"],
    answer: "const"
  }
];

// function getQuestions() {
//   const q = questions[0];
//   document.getElementById("quiz").innerHTML = questions.map((q, index) => {
//     return `
//       <div class="question">
//         <p>${index + 1}. ${q.question}</p>
//         <ul>
//           ${q.options.map(option => `<button onClick="checkAnswer('${option}')">${option}</button>`).join("")}
//         </ul>
//       </div>
//     `;
//   }).join("");
// }


function getQuestions() {
  const q = questions[0];

  document.getElementById("quiz").innerHTML = `
    <p>${q.question}</p>
    ${q.options.map(option => `
      <button onclick="checkAnswer('${option}')">${option}</button>
    `).join("")}
  `;
}
getQuestions();

function checkAnswer(selectedOption) {
  if(selectedOption === questions[0].answer){
    document.getElementById("result").innerText = "Correct!";
    console.log("Correct!");
  } else {
    document.getElementById("result").innerText = "Incorrect!";
    console.log("Incorrect!");
  }
}



// function startQuiz() {
//   let score = 0;
//   const userAnswer = document.getElementById("userAnswer").value;
//   questions.forEach((q, index) => {
//     if(userAnswer === q.answer){
//       score++;
//     } else {
//       console.log(`Question ${index + 1} is incorrect. The correct answer is ${q.answer}.`);
//     }
//   })
//    console.log(`Your score is ${score} out of ${questions.length}.`);
// }

// startQuiz();