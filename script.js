let index = 0;
let score = {A:0, B:0, C:0, D:0};

const qEl = document.getElementById("question");
const aBtn = document.getElementById("aBtn");
const bBtn = document.getElementById("bBtn");

function render() {
  const q = questions[index];
  qEl.textContent = q.text;
  aBtn.textContent = q.a.text;
  bBtn.textContent = q.b.text;
}

function choose(type) {
  const choice = questions[index][type];
  Object.keys(choice.score).forEach(k => {
    score[k] += choice.score[k];
  });

  index++;
  if (index < questions.length) {
    render();
  } else {
    localStorage.setItem("nightScore", JSON.stringify(score));
    location.href = "result.html";
  }
}

render();
