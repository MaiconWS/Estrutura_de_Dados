let lista = [];

function Incluir(){
    let incluir = document.getElementById("incluindo").value;

    lista.push(incluir);
    Exibir()
    console.log(lista);

}

function Excluir(){
    let remover = document.getElementById("Excluindo").value;
    let index = lista.indexOf(remover);

    lista.splice(index, 1);
    Exibir()
    console.log(lista);   
}

function Exibir(){
    let exibindo = document.querySelector('#lista');
    exibindo.innerHTML = "";

    for(let item of lista){
        let li = document.createElement("li");
        li.innerHTML = item;
        exibindo.appendChild(li);
    }

}