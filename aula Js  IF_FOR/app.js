for (n = 0; n < 100; n++) {

    document.querySelector("#moldura").innerHTML += `<div class="pixel" onclick="pintar(this);"></div>`;

}

function pintar(pixel) {

    cordopixel = pixel.style.backgroundColor;
        
        if(!cordopixel || cordopixel== "white"){

            pixel.style.backgroundColor = "black";

        }else{

            pixel.style.backgroundColor = "white";

        }

}