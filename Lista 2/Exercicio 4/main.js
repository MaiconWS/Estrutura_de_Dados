let button = document.querySelector("button")

button.addEventListener('click', () => {

    let ano = Number(document.getElementById("num").value);
    let h2 = document.querySelector("h2");

    if (ano % 4 == 0)
        h2.innerHTML = `É bissexto`
    else
        h2.innerHTML = `É não é bissexto`

})