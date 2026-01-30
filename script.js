let currentIndex = 0;
const scores = {};

const questionEl = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

function showQuestion() {
  questionEl.textContent = questions[currentIndex].text;
}

function handleAnswer(value) {
  const type = questions[currentIndex].type;

  if (!scores[type]) scores[type] = 0;
  scores[type] += value;

  currentIndex++;

  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    localStorage.setItem(
      "nightTypeScores",
      JSON.stringify(scores)
    );
    window.location.href = "result.html";
  }
}

yesBtn.addEventListener("click", () => handleAnswer(1));
noBtn.addEventListener("click", () => handleAnswer(0));

showQuestion();
