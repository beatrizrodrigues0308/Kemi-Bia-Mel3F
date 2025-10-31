const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");

// Alterna entre as abas
for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", () => {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      textos[j].classList.remove("ativo");
    }
    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  });
}

// === CONTADOR REGRESSIVO ===
const tempoObjetivo1 = new Date("2025-12-31T00:00:00");
const tempoObjetivo2 = new Date("2026-03-01T00:00:00");
const tempoObjetivo3 = new Date("2026-06-01T00:00:00");
const tempoObjetivo4 = new Date("2026-09-01T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

// Calcula o tempo restante
function calculaTempo(tempoObjetivo) {
  let agora = new Date();
  let diferenca = tempoObjetivo - agora;

  let segundos = Math.floor(diferenca / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  if (diferenca > 0) {
    return [dias, horas, minutos, segundos];
  } else {
    return [0, 0, 0, 0];
  }
}

// Atualiza o cronômetro em todas as abas
function atualizaCronometro() {
  for (let i = 0; i < contadores.length; i++) {
    document.getElementById("dias" + i).textContent = calculaTempo(tempos[i])[0];
    document.getElementById("horas" + i).textContent = calculaTempo(tempos[i])[1];
    document.getElementById("min" + i).textContent = calculaTempo(tempos[i])[2];
    document.getElementById("seg" + i).textContent = calculaTempo(tempos[i])[3];
  }
}

function comecaCronometro() {
  atualizaCronometro();
  setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
