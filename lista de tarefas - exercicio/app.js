ler();

function htmlfica(item){return item.replace(/[^]/g,function(item){return"&#"+item.charCodeAt(0)+";"})}

function adicionar(){

	tarefa =  htmlfica(document.querySelector("#item").value.trim());
	
	
		if (tarefa) {
			
			document.querySelector("#listadetarefas").innerHTML += `<li onclick="this.remove();salvar();">${tarefa}</li>`;
			console.log("Adicionou...");
		}

	document.querySelector("#item").value="";
	document.querySelector("#item").focus();

	salvar(); 
	
}

	
function checar(event){
	
	
	if(event.keyCode == 13){
			
		adicionar(); 
			
	}
		
}

	
function salvar(){

	console.log ("Salvando...");
	lista = document.querySelector("#listadetarefas").innerText;
	console.log(lista);
	localStorage.setItem("listasalva", lista);

}

	
function ler(){

	console.log("Lendo...");
	document.querySelector("#listadetarefas").innerHTML="";
	lista=localStorage.getItem("listasalva");

		if (lista){
			
			lista=lista.split("\n"); 
				
				for (pos in lista){
					
					console.log(lista[pos]);
					document.querySelector("#listadetarefas").innerHTML += `<li onclick="this.remove();salvar();">${lista[pos]}</li>`;
					
				}
				
		}
		
}

	