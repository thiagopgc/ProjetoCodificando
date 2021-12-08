var passo = document.querySelector("#passo");
var chave = document.querySelector(".passo");
var textoInicial = document.querySelector(".textoInicial");
var textoRetorno = document.querySelector(".textoRetorno");
var radio = document.querySelectorAll(".radio"); // quando usamos o querySelectorAll em class iguais ele vira uma array.
var botao = document.querySelector(".botao");

escolha = document.addEventListener("click", function () {
  var selecao = document.querySelector("#selecao").value; //value puxa o texto do seletor (#selecao).
  if (selecao == "cesar") {
    chave.style.display = "flex";
  }
});

botao.addEventListener("click", function (event) {
  event.preventDefault();
  var selecao = document.querySelector("#selecao").value;
  if (selecao == "cesar" && radio[0].checked) {
    var texto = textoInicial.value.split("");
    var numeroPasso = parseInt(passo.value);
    textoRetorno.value = criptografar(texto, numeroPasso);
  } else if (selecao == "cesar" && radio[1].checked) {
    var texto = textoInicial.value.split("");
    var numeroPasso = parseInt(passo.value);
    textoRetorno.value = descriptografar(texto, numeroPasso);
  } else if (selecao == "base" && radio[0].checked) {
    var texto = textoInicial.value;
    textoRetorno.value = btoa(texto);
  } else {
    var texto = textoInicial.value;
    textoRetorno.value = atob(texto);
  }
});

function criptografar(mensagem, passo) {
  return mensagem
    .map((str) => {
      var mensagemDeEntrada = str.charCodeAt();
      if (mensagemDeEntrada >= 65 && mensagemDeEntrada <= 90) {
        return String.fromCharCode(
          ((mensagemDeEntrada - 65 + passo) % 26) + 65
        );
      } else if (mensagemDeEntrada >= 97 && mensagemDeEntrada <= 122) {
        return String.fromCharCode(
          ((mensagemDeEntrada - 97 + passo) % 26) + 97
        );
      } else {
        return str;
      }
    })
    .join("");
}

function descriptografar(mensagem, passo) {
  return mensagem
    .map((str) => {
      var mensagemDeEntrada = str.charCodeAt();
      if (mensagemDeEntrada >= 65 && mensagemDeEntrada <= 90) {
        return String.fromCharCode(
          ((mensagemDeEntrada - 90 - passo) % 26) + 90
        );
      } else if (mensagemDeEntrada >= 97 && mensagemDeEntrada <= 122) {
        return String.fromCharCode(
          ((mensagemDeEntrada - 122 - passo) % 26) + 122
        );
      } else {
        return str;
      }
    })
    .join("");
}
