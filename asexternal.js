// Quiz Validation
  function submitQuiz() {
    let correctAnswers = {
      q1: "True",
      q2: "True",
      q3: "True",
      q4: "False",
      q5: "True"
    };

    let form = document.getElementById("quizForm");
    let results = document.getElementById("results");
    let formData = new FormData(form);

    let output = "<h2>Results:</h2>";
    let score = 0;

    for (let [question, answer] of Object.entries(correctAnswers)) {
      let userAnswer = formData.get(question);
      if (userAnswer === answer) {
        score++;
        output += `<p>${question}: Correct</p>`;
      } else {
        output += `<p>${question}: Incorrect (Correct Answer: ${answer})</p>`;
      }
    }

    output += `<p><strong>Your Score: ${score} / ${Object.keys(correctAnswers).length}</strong></p>`;
    results.innerHTML = output;
  }

// Show/Hide Task
function showHide() {
  let doc = document.getElementById('hideTask');
  if (doc.style.display === 'none') {
    doc.style.display = 'block';
  } else {
    doc.style.display = 'none';
  }
}

// Array Task
function arrayTwo() {
  let animals = ['Vaquita Porpoise', 'Hawksbill Sea Turtle', 'Blue Whale', 'Porbeagle Sharks'];
  let doc = document.getElementById('task2');
  doc.innerHTML = `Animals: ${animals[Math.floor(Math.random() * animals.length)]}`;
}
