function trocarfoto(testeimagem){

    imgpequena = document.querySelector("#"+testeimagem).src;
    imggrande = document.querySelector("#img0").src;
    document.querySelector("#img0").src = imgpequena;
    document.querySelector("#"+testeimagem).src =imggrande;
    
}