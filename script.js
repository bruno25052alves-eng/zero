let respostas = {};
let pontos = 0;

const perguntas = [
  {
    q: "Android é baseado em qual sistema?",
    alternativas: [
      { t: "Linux", v: "linux", correta: true },
      { t: "Windows", v: "windows", correta: false },
      { t: "iOS", v: "ios", correta: false }
    ]
  },
  {
    q: "Quem criou o Linux?",
    alternativas: [
      { t: "Linus Torvalds", v: "linus", correta: true },
      { t: "Bill Gates", v: "bill", correta: false },
      { t: "Steve Jobs", v: "steve", correta: false }
    ]
  },
  {
    q: "Sistema da Apple?",
    alternativas: [
      { t: "iOS", v: "ios", correta: true },
      { t: "Android", v: "android", correta: false },
      { t: "Windows", v: "windows", correta: false }
    ]
  },
  {
    q: "Windows pertence a qual empresa?",
    alternativas: [
      { t: "Microsoft", v: "microsoft", correta: true },
      { t: "Google", v: "google", correta: false },
      { t: "Apple", v: "apple", correta: false }
    ]
  },
  {
    q: "Android pertence a qual empresa?",
    alternativas: [
      { t: "Google", v: "google", correta: true },
      { t: "Apple", v: "apple", correta: false },
      { t: "Microsoft", v: "microsoft", correta: false }
    ]
  },
  {
    q: "Linux é:",
    alternativas: [
      { t: "Open Source", v: "open", correta: true },
      { t: "Fechado", v: "closed", correta: false },
      { t: "Pago", v: "paid", correta: false }
    ]
  },
  {
    q: "Sistema mais usado em PCs?",
    alternativas: [
      { t: "Windows", v: "windows", correta: true },
      { t: "Linux", v: "linux", correta: false },
      { t: "iOS", v: "ios", correta: false }
    ]
  },
  {
    q: "iOS é exclusivo de?",
    alternativas: [
      { t: "Apple", v: "apple", correta: true },
      { t: "Android", v: "android", correta: false },
      { t: "Windows", v: "windows", correta: false }
    ]
  },
  {
    q: "Android permite:",
    alternativas: [
      { t: "Personalização", v: "custom", correta: true },
      { t: "Sistema fechado", v: "locked", correta: false },
      { t: "Nenhuma", v: "none", correta: false }
    ]
  },
  {
    q: "Linux é muito usado em:",
    alternativas: [
      { t: "Servidores", v: "servers", correta: true },
      { t: "Jogos", v: "games", correta: false },
      { t: "Celulares", v: "phones", correta: false }
    ]
  }
];

// shuffle
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function montarQuiz() {
  const box = document.getElementById("quizBox");
  box.innerHTML = "";

  perguntas.forEach((p, i) => {
    let div = document.createElement("div");
    div.innerHTML = `<p><b>${i + 1}) ${p.q}</b></p>`;

    let alternativas = shuffle([...p.alternativas]);

    alternativas.forEach(a => {
      div.innerHTML += `
        <button onclick="responder(${i}, ${a.correta}, this)">
          ${a.t}
        </button>
      `;
    });

    box.appendChild(div);
  });
}

function responder(q, correta, btn) {
  if (respostas[q] !== undefined) return;

  respostas[q] = correta;

  let botoes = btn.parentElement.querySelectorAll("button");

  botoes.forEach(b => b.disabled = true);

  if (correta) {
    btn.classList.add("certa");
  } else {
    btn.classList.add("errada");

    botoes.forEach(b => {
      if (b.onclick.toString().includes("true")) {
        b.classList.add("certa");
      }
    });
  }
}

function mostrarResultado() {
  pontos = 0;

  Object.values(respostas).forEach(v => {
    if (v === true) pontos++;
  });

  document.getElementById("resultadoQuiz").innerHTML =
    `Você acertou <b>${pontos}/10</b>`;
}

window.onload = montarQuiz;
