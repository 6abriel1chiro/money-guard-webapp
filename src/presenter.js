const monto = document.querySelector("#monto");
const titulo = document.querySelector("#titulo");
const detalles = document.querySelector('#detalles')

const button_registro = document.getElementById("registro");

const div = document.querySelector("#resultado-div");


button_registro.addEventListener("click", (event) => {
  event.preventDefault();

  const valueMonto = Number.parseInt(monto.value);
  
  div.innerHTML = "<p>" + "Transacción: " + titulo.value + "</p>" +
    "<p>" + "Monto: " + valueMonto + "$ </p>" +
    "<p>" + "detalles: " + detalles.value + "</p>";
});
