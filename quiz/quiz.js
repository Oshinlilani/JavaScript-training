const questions = [
  {
    question: "Which method creates a new array?",
    options: ["forEach", "map", "find", "push"],
    answer: "map",
  },
  {
    question: "Which keyword declares a constant?",
    options: ["var", "let", "const", "static"],
    answer: "const",
  },
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

let currentQuestion = 0;

let score = 0;

function getQuestions() {
  // const q = questions[0];

  document.getElementById("quiz").innerHTML = `
    <p>${questions[currentQuestion].question}</p>
    ${questions[currentQuestion].options
      .map(
        (option) => `
      <button onclick="checkAnswer('${option}')" class="border p-2 rounded hover:border-gray-500 hover:text-black ">${option}</button>
    `,
      )
      .join("")}
  `;
}

getQuestions();

function checkAnswer(selectedOption) {
  if (selectedOption === questions[currentQuestion].answer) {
    document.getElementById("result").innerText = "Correct!";
    score++;
    
  } else {
    document.getElementById("result").innerText = "Incorrect!";
    console.log("Incorrect!");
  }

  document.querySelectorAll("#quiz button").forEach((btn) => {
    if (btn.id !== "nextBtn") {
      btn.disabled = true;
    }
  });

  document.getElementById("nextBtn").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    getQuestions();
    document.getElementById("result").innerText = "";
  } else {
    document.getElementById("quiz").innerText = "Quiz completed!";
    document.getElementById("result").innerText =
      `Your score is ${score} out of ${questions.length}.`;
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
