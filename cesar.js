var passo = document.querySelector("#passo");
var textoInicial = document.querySelector(".textoInicial");
var textoRetorno = document.querySelector(".textoRetorno");
var radio = document.querySelectorAll(".radio");
var botao = document.querySelector(".botao");

escolha = document.addEventListener("click", function () {
  var selecao = document.querySelector("#selecao").value; //value puxa o texto do seletor (#selecao).
  if (selecao == "cesar") {
    passo.style.display = "flex";
  }
});

// var alfabetoMinusculo = "abcdefghijklmnopqrstuvwxyz";
// var alfabetoMaiusculo = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var indice = 9;

// var letraMinuscula = alfabetoMinusculo[indice];
// var letraMaiuscula = alfabetoMaiusculo[indice];

var textoInicial = +document.querySelector(".textoInicial").innerHTML;
function voltar() {
  if (textoInicial > 1) {
    textoInicial--;
    document.querySelector(".textoInicial").innerHTML = textoInicial;
  }
}

function avancar() {
  if (textoInicial < 25) {
    textoInicial++;
    document.querySelector(".textoInicial").innerHTML = textoInicial;
  }
}
