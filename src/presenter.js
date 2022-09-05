//import sumar from "./sumador";
let balance = document.querySelector("#initBalance");
let username = document.querySelector("#username");

const span = document.querySelector("#total");
const userDiv = document.querySelector("#user-Div");
const form = document.querySelector("#first-form");


form.addEventListener("submit", (event) => {
  event.preventDefault();

   balance = Number.parseFloat(balance.value);
   username =username.value.toString();
  console.log(username,balance)

  span.innerHTML =  balance;

  form.style.display="none";
  userDiv.innerHTML =  "<h2>" + "Welcome: " + username + "</h2>";



});