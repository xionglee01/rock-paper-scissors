var player_score = 0;
var ai_score = 0;
var round = 1;

function getComputerChoice()
{
    let num = Math.floor(Math.random() * 3); //Returns a random number from 0 - 3
    
    let str = "";

    if(num === 0)
    {
        str = "Rock";
    }
    else if(num === 1)
    {
        str = "Paper";
    }
    else
    {
        str = "Scissor";
    }
    // is going to return a random choice
    return str;
}

function play(playerSelection, aiSelection)
{
    let player = playerSelection.toLowerCase();
    let ai = aiSelection.toLowerCase();
    let rock = "rock";
    let scissor = "scissor";
    let paper = "paper";

    if(player === ai)
    {
        round += 1;
        return "TIE!";
    }
    //Win conditions for player
    else if(player === rock && ai === scissor || player === paper && ai === rock || player === scissor && ai === paper)
    {
        round += 1;
        player_score += 1;
        return "PLAYER WINS!";
    }
    else
    {
        round += 1;
        ai_score += 1;
        return "AI WINS!";
    }
}

function updateUI(playerSelection, aiSelection)
{
    const round_header = document.querySelector('.round');
    round_header.innerText = `Round ${round}`;

    const current_plays = document.querySelector('.current_plays');
    current_plays.innerText = `${playerSelection} vs ${aiSelection}`;

    const ply_score = document.querySelector('.player_score');
    ply_score.innerText = `${player_score}`;

    const ai_scr = document.querySelector('.ai_score');
    ai_scr.innerText = `${ai_score}`;

    if(player_score >= 5)
        round_header.innerText = "PLAYER WINS!!!";
    else if(ai_score >= 5)
        round_header.innerText = "AI WINS!!!";
}




const button = document.querySelectorAll('button');
button.forEach(btn => btn.addEventListener('click', () => {
    let aiPlays = getComputerChoice();
    console.log(play(btn.id, aiPlays));
    const capitlize_letter = btn.id.charAt(0).toUpperCase();
    const word = capitlize_letter + btn.id.slice(1);
    updateUI(word, aiPlays);
}));

