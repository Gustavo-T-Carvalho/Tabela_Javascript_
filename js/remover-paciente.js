var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", function (event) {
  var alvoDoEvento = event.target;
  var paiDoAlvo = alvoDoEvento.parentNode;
  paiDoAlvo.classList.add("fadeOut");
  setTimeout(function () {
    paiDoAlvo.remove();
  }, 500);
  //Set timeout executa uma função após um tempo dado em mili segundos
});

// pacientes.forEach(function(paciente) {
//     paciente.addEventListener("dblclick", function(event){
//         this.remove();
//     });
// });
