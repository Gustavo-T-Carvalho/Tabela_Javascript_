var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  //Previne o comportamento padrão
  event.preventDefault();
  var form = document.querySelector("#form-adiciona");
  // Ao capturar um form é possivel acessar os inputs pelo name.value

  var paciente = obtemPacienteDoFormulario(form);
  // var pacienteTr = montaTr(paciente);
  var erros = validaPaciente(paciente);

  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  }
  adicionaPacienteNaTabela(paciente);

  //limpaFormulario(form);
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
  form.reset();

  // O próprio form apresenta a função reset() que zera os campos
  //   function limpaFormulario(form) {
  //       console.log(form);
  //       form.nome.value = "";
  //       form.peso.value = "";
  //       form.altura.value = "";
  //       form.gordura.value = "";

  //   }
});

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };

  return paciente;
}

function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function validaPaciente(paciente) {
  var erros = [];
  var alturaTexto = "";
  if (!validaPeso(paciente.peso)) {
    erros.push("Peso é inválido");
  }
  if (!validaAltura(paciente.altura)) {
    erros.push("A altura é inválida");
  }
  if (paciente.nome.length == 0) {
    erros.push("O nome não pode ser em branco");
  }
  if (paciente.gordura.length == 0) {
    erros.push("Porcentagem de gordura não pode ser em branco");
  }
  if (paciente.peso.length == 0) {
    erros.push("Peso não pode ser em branco");
  }
  if (paciente.altura.length == 0) {
    erros.push("Altura não pode ser em branco");
  }
  return erros;
}

function exibeMensagensDeErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
  erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function adicionaPacienteNaTabela(paciente) {
  
  var pacienteTr = montaTr(paciente);
  var tbody = document.querySelector("#tabela-pacientes");
  tbody.appendChild(pacienteTr);
}
