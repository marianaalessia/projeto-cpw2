// Este arquivo "jogo.js" possui os códigos em js para o arquivo "jogo.html"
const jogadordaVez = document.querySelector(".jogador");
let selecionado;
// inicia o jogo com o jogador "X"
let joga = "X"

// matriz com as posições possíveis para ter um ganhador 
let ganhador = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7], // linha vertical 
    [2, 5, 8], // linha vertical 
    [3, 6, 9], // linha vertical
    [1, 5, 9], // diagonal principal
    [3, 5, 7], // diagonal secundária
];

function inicia(){
    selecionado = [];
    jogadordaVez.innerHTML = `Jogador: ${jogador}`;

    document.querySelectorAll(".divisaoJogo").forEach((item)=>{
        item.innerHTML = "";
        item.addEventListener('click', novaJogada);

    });
}

inicia();

// função recebe o evento
function novaJogada(e){
    const index = e.target.getAttribute("data-i");
    e.target.innerHTML = jogador;
    e.target.removeEventListener('click', novaJogada);
    selecionado[index] = jogador;

    setTimeout(() => {
        check();
    }, [100]);

    jogador = jogador === "X" ? "O" : "X";
    jogadordaVez.innerHTML = `Jogador: ${jogador}`;
}

function check(){
    let ultimoJogador = jogador === "X" ? "O" : "X";

    const itens = selecionado
        .map((item, i) => [item, i])
        .filter((item) => item[0] === ultimoJogador)
        .map((item) => item[1]);

    for(pos of ganhador){
        if(pos.every((item) => itens.includes(item))){
            alert("o jogador " + ultimoJogador + "ganhou");
            inicia();
            return; 
        }
    }
    if(selecionado.filter((item) => item).length == 9){
        alert("empate");
        inicia();
        return;
    }

}
