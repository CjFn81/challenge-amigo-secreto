let amigos = [];
let listaDeAmigos = [];

console.log(amigos);
function agregarAmigo() {
    if (document.getElementById("amigo").value == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(document.getElementById("amigo").value);
        document.getElementById("amigo").value = "";
        console.log(amigos);
        lista();
    }
    return;
}

function lista() {
    listaDeAmigos = document.getElementById("listaAmigos");
    listaDeAmigos.innerHTML = "";
    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaDeAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("No hay amigos en la lista para sortear.");
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        document.getElementById("resultado").innerHTML = "El amigo secreto sorteado es: " + amigoSorteado;
        document.getElementById("listaAmigos").style.display = "none";
    }
}

