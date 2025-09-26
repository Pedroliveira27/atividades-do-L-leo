function adicionarTarefa() {
  //let mensagem = "Tarefa adicionada com sucesso"
  let inputarefa = document.getElementById("inputtarefas")
  let tarefa = inputtarefa.value
  if (tarefa == "") {
    let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
    mensagem.textContent = mensagemErro
  } else {
    let mensagem = "Tarefa adicionada com sucesso!";
    document.getElementById("mensagem").textContent = mensagem;

    document.getElementById("mensagem").textContent = mensagem

    let listatarefas = document.getElementById("listastarefas")
    let novatarefa = document.createElement("li")

    novatarefa.textContent = tarefa

    listatarefas.appendChild(novatarefa)
  }




  inputtarefa.value = ""
}