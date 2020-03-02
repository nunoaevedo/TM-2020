function lerInput() {
    var texto = document.getElementById("numero").value;

    if (!texto.length) {
        alert("Sem conteudo no input!");
    } else {
        alert(texto);
    }

    document.getElementById("texto").innerText = texto;
}