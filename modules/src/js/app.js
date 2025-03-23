import game, {GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame}  from './game'

console.log('app worked');
let body = document.querySelector('body');
let play = new game();
play.start()