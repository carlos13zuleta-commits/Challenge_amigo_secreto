// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];


function agregarAmigo() {
const input = document.getElementById("amigo");
const nombre = input.value.trim();


if (nombre === "") {
alert("Por favor ingresa un nombre válido.");
return;
}


nombres.push(nombre);
input.value = "";
mostrarLista();
}


function mostrarLista() {
const lista = document.getElementById("listaAmigos");
lista.innerHTML = "";


nombres.forEach(n => {
const li = document.createElement("li");
li.textContent = n;
lista.appendChild(li);
});
}


function sortearAmigo() {
if (nombres.length === 0) {
alert("Agrega al menos un nombre antes de sortear.");
return;
}


const indiceAleatorio = Math.floor(Math.random() * nombres.length);
const amigoSorteado = nombres[indiceAleatorio];


const resultado = document.getElementById("resultado");
resultado.innerHTML = `🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong> 🎉`;


// Reiniciar lista y array
nombres = [];
document.getElementById("listaAmigos").innerHTML = "";
}