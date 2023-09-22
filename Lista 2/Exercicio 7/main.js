let button = document.querySelector("button")

button.addEventListener('click', () =>{

let a = Number(document.getElementById("a").value);
let b = Number(document.getElementById("b").value);
let c = Number(document.getElementById("c").value);
let h2 = document.querySelector("h2");
let elem_x1 = document.getElementById("x1");
let elem_x2 = document.getElementById("x2");
delta = b**2 - 4*a*c

if (delta < 0)

h2.innerHTML =  `A delta é negativa, não a raíz.`
else {
h2.innerHTML = delta;
x1 = (-b + Math.sqrt(delta))/(2*a);
x2 = (-b - Math.sqrt(delta))/(2*a);

elem_x1.innerHTML = x1;
elem_x2.innerHTML = x2;
}
})