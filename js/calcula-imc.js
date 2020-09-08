// alert("olá mundo");
// console.log("olá mundo");

// desacoplar das tags. Utilizar classes e Ids
var titulo = document.querySelector(".titulo");
// Text Contenr acessa oconteudo entre tags
titulo.textContent = "Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var peso = paciente.querySelector(".info-peso").textContent;
  var altura = paciente.querySelector(".info-altura").textContent;

  var imc = paciente.querySelector(".info-imc");
  if (!validaPeso(peso)) {
    imc.textContent = "Peso Inválido";
    paciente.classList.add("paciente-invalido");
    //Ao modificar atributos com mais de 1 termo deve-se usar camel case
    //  paciente.style.color = "red";
  }

  if (!validaAltura(altura)) {
    imc.textContent = "Altura Inválida";
    paciente.classList.add("paciente-invalido");
  }

  if (validaPeso(peso) && validaAltura(altura)) {
    imc.textContent = calculaImc(peso, altura);
    //To fixed, seleciona a quantidade de números decimais
  }
}

function validaPeso(peso) {
  if (peso >= 0 && peso < 1000) {
    return true;
  }
  return false;
}

function validaAltura(altura) {
  if (altura >= 0 && altura < 3) {
    return true;
  }
  return false;
}

function calculaImc(peso, altura) {
  return (peso / altura / altura).toFixed(2);
}

// function mostraMensagem() {
//     console.log("Fui clicado")
// }
