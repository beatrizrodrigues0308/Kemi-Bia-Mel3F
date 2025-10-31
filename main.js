const botoes = document.querySelectorAll(".aba");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");

botoes.forEach((botao, i) => {
    botao.addEventListener("click", () => {
        botoes.forEach(btn => btn.classList.remove("ativo"));
        textos.forEach(txt => txt.classList.remove("ativo"));

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    });
});

const tempoObjetivo1 = new Date("2025-12-01T00:00:00");
const tempoObjetivo2 = new Date("2025-11-10T00:00:00");
const tempoObjetivo3 = new Date("2025-12-30T00:00:00");
const tempoObjetivo4 = new Date("2026-01-10T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo) {
    let agora = new Date();
    let t = tempoObjetivo - agora;

    if (t <= 0) return [0,0,0,0];

    let segundos = Math.floor(t / 1000) % 60;
    let minutos  = Math.floor(t / 1000 / 60) % 60;
    let horas    = Math.floor(t / 1000 / 60 / 60) % 24;
    let dias     = Math.floor(t / 1000 / 60 / 60 / 24);

    return [dias, horas, minutos, segundos];
}

function atualizaCronometro() {
    for (let i=0; i<4; i++) {
        document.getElementById(`dias${i}`).textContent  = calculaTempo(tempos[i])[0];
        document.getElementById(`horas${i}`).textContent = calculaTempo(tempos[i])[1];
        document.getElementById(`min${i}`).textContent   = calculaTempo(tempos[i])[2];
        document.getElementById(`seg${i}`).textContent   = calculaTempo(tempos[i])[3];
    }
}

setInterval(atualizaCronometro, 1000);
