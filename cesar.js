var passo = document.querySelector("#passo");

escolha = document.addEventListener("click", function () {
  var selecao = document.querySelector("#selecao").value; //value puxa o texto do seletor (#selecao).
  if (selecao === "Cifra de Cesar") {
    passo.style.display = "flex";
  }
});
