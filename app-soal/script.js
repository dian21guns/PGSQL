let current = 0;
let data = [];

fetch("soal.json")
    .then(res => res.json())
    .then(res => {
        data = res;
        showQuestion();
    });

function showQuestion() {
    const q = data[current];
    document.getElementById("quiz-container").innerHTML = `
        <div class="question">${current + 1}. ${q.soal}</div>
        <div class="option"><input type="radio" name="opt" value="a"> A. ${q.a}</div>
        <div class="option"><input type="radio" name="opt" value="b"> B. ${q.b}</div>
        <div class="option"><input type="radio" name="opt" value="c"> C. ${q.c}</div>
        <div class="option"><input type="radio" name="opt" value="d"> D. ${q.d}</div>
    `;
}

function nextQuestion() {
    current++;
    if (current >= data.length) {
        alert("Soal selesai!");
        current = 0;
    }
    showQuestion();
}

