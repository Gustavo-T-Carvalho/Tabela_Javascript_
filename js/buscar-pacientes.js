var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function (event) {
  //api-pacientes.herokuapp.com/pacientes

  https: var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
  xhr.addEventListener("load", function () {
    var erroAjax = document.querySelector("#erro-ajax")
    if (xhr.status == 200) {
        erroAjax.classList.add("paciente-oculto");
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
        pacientes.forEach(function (paciente) {
      
      adicionaPacienteNaTabela(paciente);
    });
    }else{

        
        console.log(xhr.status);
        console.loh(xhr.response);
        var erroAjax = document.querySelector("#erro-ajax")
        erroAjax.classList.remove("paciente-oculto");
    }
    
  });
  xhr.send();
});
