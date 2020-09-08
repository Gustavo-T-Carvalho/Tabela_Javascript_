var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function (event) {
  var pesquisa = this.value;
  var pacientes = document.querySelectorAll(".paciente");

  if (pesquisa.length > 0) {
    pacientes.forEach(function (paciente) {
    
      var expressao = new RegExp(pesquisa, "i");
      var nomePaciente = paciente.querySelector(".info-nome").textContent;
     
      if (!expressao.test(nomePaciente)) {
        paciente.classList.add("paciente-oculto");
      } else {
        paciente.classList.remove("paciente-oculto");
      }
    });
  } else {
    pacientes.forEach(function (paciente) {
      paciente.classList.remove("paciente-oculto");
    });
  }
});
