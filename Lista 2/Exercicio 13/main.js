let button = document.querySelector("button")

button.addEventListener('click', () =>{

let num = Number(document.getElementById("num").value);
let h2 = document.querySelector("h2");

if (num%2 === 0)
h2.innerHTML = `É par`
else
h2.innerHTML = `É impar`

})