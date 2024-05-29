let computerScore = 0;
let humanScore = 0; 

function getComputedChoise(){
    let numeroAleatorio = Math.floor((Math.random()*3) + 1);
    
    switch(numeroAleatorio){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper"
            break;
        default:
            return "scissors"
    }
}

function getHumanChoice(){
    let humanChoise = prompt("Ingresa una opcion 'rock', 'paper', 'scissors'");
    return humanChoise;
}


function showScore(){
    console.log("El marcador es maquina: "+computerScore+" jugador: "+humanScore);
}

function playRound(){
    let computedChoise = getComputedChoise();
    let humanChoise = getHumanChoice();
    if(computedChoise === "rock"){
        switch(humanChoise){
            case "rock":
                console.log("Empate");
                break;
            case "paper":
                console.log("Ganaste jugador, el papel vence a la roca");
                humanScore++;
                showScore();
                break;
            case "scissors":
                console.log("Gana la maquina, la roca vence a las tijeras");
                computerScore++;
                showScore();
                break;
        }
    }
    else if( computedChoise === "paper" ){
        switch(humanChoise){
            case "rock":
                console.log("Gana la maquina, el papel vence a la roca");
                computerScore++;
                showScore();
                break;
            case "paper":
                console.log("Empate");
                break;
            case "scissors":
                console.log("Ganaste jugador, las tijeras vencen a la roca");
                humanScore++;
                showScore();
                break;
        }
    }
    else if( computedChoise === "scissors" ){
        switch(humanChoise){
            case "rock":
                console.log("Ganaste jugador, la roca vence a las tijeras");
                humanScore++;
                showScore();
                break;
            case "paper":
                console.log("Gana la maquina, el papel vence a la roca");
                computerScore++;
                break;
            case "scissors":
                console.log("Empate");
                break;
        }
    }
}


for(let i=1; i <= 5; i++){
    playRound();
}
if(computerScore > humanScore){
    console.log("La computadora ha ganado, es muy maja");
}else {
    console.log("Le ganaste a la computadora");
}