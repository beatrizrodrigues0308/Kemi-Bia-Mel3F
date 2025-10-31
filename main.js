// Seleciona todos os botões e abas de conteúdo
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");

// Alternância das abas (botões)
for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      textos[j].classList.remove("ativo");
    }
  }
}