var counterImages = 1;

function addImage(){
    var image = document.createElement("img");
    image.src = "https://placeimg.com/250/150/" + counterImages;

    var list = document.getElementById("imagesList");

    list.appendChild(image);

    var counter = document.getElementById("imageCounter");

    counter.innerText = counterImages.toString();

    counterImages++;

}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function removeRandomImage(){
    var list = document.getElementById("imagesList");

    var counter = document.getElementById("imageCounter");

    var inteiro =  getRandomInt(0, counter);

    //list.removeChild(list.childNodes[inteiro]);

    document.removeChild("imagesList");
    list.removeChild(list.childNodes[inteiro]);

    counterImages--;
    counterImages = 1;

}