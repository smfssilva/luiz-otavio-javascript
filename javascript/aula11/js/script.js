const confirmar = confirm("Deseja confirma a operação?");
console.log(confirmar);

if (confirmar) {
  alert("Operação confirmada");
} else {
  alert("Operação foi cancelada!");
}
