const choices = document.querySelectorAll('.choices');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');

const scoreboard = {
    joueur: 0,
    ordinateur: 0
}

//Play Game
function play(e) {
    restart.style.display = "inline-block";
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice)
}

//function Get Winner
function getWinner(p, c){
    if(p === c){
        return 'Match null';
    } else if(p === "pierre"){
        if(c === 'papier') {
            return 'ordinateur';
        } else {
            return 'joueur';
        }
    } else if(p === "papier"){
        if(c === 'ciseau') {
            return 'ordinateur';
        } else {
            return 'joueur';
        }
    } else if(p === "ciseau"){
        if(c === 'pierre') {
            return 'ordinateur';
        } else {
            return 'joueur';
        }
    } 
}

function showWinner(winner, computerChoice){
    if(winner === "joueur"){
        //Increment le score du joueur
        scoreboard.joueur++
        //affiche resultat dans le modal
        result.innerHTML = `
            <h1 class="text-win">Tu as gagné</h1>
            <p>L'ordinateur à choisit <strong>${computerChoice}</strong></p>
        `
    } else if(winner === "ordinateur"){
        //Increment le score de l'ordi
        scoreboard.ordinateur++
        //affiche resultat dans le modal
        result.innerHTML = `
            <h1 class="text-lose">Tu as perdu</h1>
            <p>L'ordinateur à choisit <strong>${computerChoice}</strong></p>
        `
    } else {
        result.innerHTML = `
            <h1>Vous avez choisit la meme chose! Macth null</h1>
            <p>L'ordinateur à choisit <strong>${computerChoice}</strong></p>
        `
    }

    //affichage du score
    score.innerHTML = `
        <p>Joueur : ${scoreboard.joueur}</p>
        <p>Ordinateur : ${scoreboard.ordinateur}</p>
    `;

    modal.style.display = "block";
}


//function Get Computer Choice
function getComputerChoice() {
    const rand = Math.random();

    if(rand < 0.34) {
        return 'pierre';
    } else if(rand <= 0.67) {
        return 'papier'
    } else {
        return 'ciseau'
    }
}

//Recommencer le jeux
function restartGame(){
    scoreboard.joueur = 0;
    scoreboard.ordinateur = 0;
    score.innerHTML = `
        <p>Joueur : 0</p>
        <p>Ordinateur : 0</p>
    `
}

//close modal
function closeModal(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}

//Event Listener
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', closeModal);
restart.addEventListener('click', restartGame);

//Appel a notre service worker
