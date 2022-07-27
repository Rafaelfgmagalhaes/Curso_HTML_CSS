function adicionar() {
	
	tarefa = document.querySelector("#item").value;
	document.querySelector("#listadetarefas").innerHTML += `<li onclick="this.remove();">${tarefa}</li>`;
	document.querySelector("#item").value="";
	document.querySelector("#item").focus();
}

