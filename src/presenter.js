import {getHistorial,sumBalance, checkRadioButton, subBalance,generateTransactionList} from "./wallet";

//import sumar from "./sumador";
let amount = document.querySelector("#transaction");
let title = document.querySelector("#title");
let details = document.querySelector("#details");
let category = document.querySelector("#category");

const register = document.querySelector("#register")
const span = document.querySelector("#total");
const userDiv = document.querySelector("#user-Div");
let transDiv = document.getElementById("transactions-list")
const form = document.querySelector("#first-form");

span.value = 0;

register.addEventListener("click", (event) => {
  event.preventDefault();
  var radio = document.querySelector('input[name="transaction_type"]:checked').value;
  const monto = Number.parseFloat(amount.value);
  

  transDiv.innerHTML = "<p> Monto: "+ monto +"</p>"+
  "<p> titulo: "+title.value.toString() +"</p>"+
  "<p> category: "+category.value.toString() +"</p>"+
  "<p> details: "+details.value.toString() +"</p>";
  console.log(radio)
  
  span.value = checkRadioButton(radio, monto, span.value);
  span.innerHTML =  span.value;
  transactions = getHistorial(monto, title.value.toString(), category.value.toString(), details.value.toString());
  console.log(transactions);
  document.querySelector("#transactions-list").innerHTML = `
  
  ${generateTransactionList(transactions)}
  
  `;

});