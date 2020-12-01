let miImage = document.querySelector('img'); // sempre posar 'img'

miImage.onclick = function(){
    let miSrc = miImage.getAttribute('src'); //'src' = atribut a una imatge
    if (miSrc == 'joel.jpg'){ 
        miImage.setAttribute('src', 'joel2.jpg');
    }//si la imatge es la primera la canvia per la segona
    else{
        miImage.setAttribute('src', 'joel.jpg');
    }//Sino deixa la primera imatge
}