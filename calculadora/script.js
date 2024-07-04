let res = document.getElementById("visorN");
function adicionar(valor) {
  res.value += valor;
}

function limpar() {
  res.value = "";
}

function calcular() {
  try {
    res.value = eval(res.value);
  } catch (e) {
    res.value = "Erro";
  }
}
