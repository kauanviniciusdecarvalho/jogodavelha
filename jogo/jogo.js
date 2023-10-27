const celulas = document.querySelector(".celula");

let checarturno = true;

let turno;

const jogador_x = "x";
const jogador_0 = "0";

let jogoAcabou = false;

document.addEventListener ("click", (event) =>) {
    if (event.target.matches(".celula") && !jogoAcabou) {
       jogador_0(event.target.id); 
    }
};