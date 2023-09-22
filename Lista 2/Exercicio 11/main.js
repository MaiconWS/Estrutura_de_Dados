let button = document.querySelector("button")

button.addEventListener('click', () => {

    let num = Number(document.getElementById("num").value);
    let h2 = document.querySelector("h2");

    let saldo = 0;

    if (num >= 0 && num <= 200)
        h2.innerHTML = `Nenhum crédito`
    else if (num >= 201 && num <= 400) {
        saldo = (num * 20) / 100;
        h2.innerHTML = saldo;
    }
    else if (num >= 401 && num <= 600) {
        saldo = (num * 30) / 100;
        h2.innerHTML = saldo;
    }

    else if (num >= 601) {
        saldo = (num * 30) / 100;
        h2.innerHTML = saldo;
    }

})