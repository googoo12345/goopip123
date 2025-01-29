document.getElementById("start the game-btn").addEventListener(`click`, startGame);

function startGame(){
    document.getElementById(`intro.screen`).styles.display = `none`;
    document.getElementById(`game.screen`).styles.display = `block`;

}