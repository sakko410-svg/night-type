let currentIndex = 0;
let scores = {};

const questionEl = document.getElementById("question");

function showQuestion() {
  questionEl.textContent = questions[currentIndex].text;
}

function answer(value) {
  const type = questions[currentIndex].type;

  if (!scores[type]) {
    scores[type] = 0;
  }
  scores[type] += value;

  currentIndex++;

  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    // 結果ページへ
    localStorage.setItem("nightTypeScores", JSON.stringify(scores));
    window.location.href = "result.html";
  }
}

// 最初の質問表示
showQuestion();
