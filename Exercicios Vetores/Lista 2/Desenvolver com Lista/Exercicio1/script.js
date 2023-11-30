function Incluir() {
    let adicionar = document.getElementById("add").value;
    let ul = document.getElementById("exibi");
    let li = document.createElement("li");

    li.setAttribute("id", adicionar)
    li.innerHTML = adicionar;
    ul.appendChild(li);

}

function Remover() {
    let remover = document.getElementById("remove").value;
    let ul = document.getElementById("exibi");
    let li  = document.getElementById(remover);

    ul.removeChild(li);


}
