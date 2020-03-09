function getInfo(){
    var linkvar= document.getElementById("link");
    var lista= document.getElementById("info");

    lista.innerHTML =
        "ID : " + linkvar.id + "<br> " +
        "Target : " + linkvar.target + "<br> " +
        "type : " + linkvar.type + "<br> " +
        "Href : " + linkvar.href + "<br> ";



}



function changeColorToRed(){

    var titulos = document.getElementsByClassName("titulo");

    for(let elem of titulos){

        elem.style.color="red";

    }
}


function clickOnCell(cell) {

    cell.innerText = prompt("Novo valor?");
    cell.style.backgroundColor = "lightGreen" ;

}

function setClickOnEachTD() {

    var cells = document.getElementsByTagName("td");

    for(let cell of cells){

        cell.onclick = function () {
            clickOnCell(cell);

        }

    }

}


setClickOnEachTD()