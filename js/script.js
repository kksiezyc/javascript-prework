function getMoveName(argMoveId){
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
      return 'papier';
  } else if (argMoveId == 3) {
      return 'nozyce';
  } else if (argMoveId != 3) {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
/*
if (randomNumber == 1) {
  computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'papier';
} else if (randomNumber == 3) {
    computerMove = 'nożyce';
*/
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);

/*
if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else if (playerInput == '3') {
    playerMove = 'nożyce';
}
*/
printMessage('Twój ruch to: ' + playerMove);
printMessage('Ruch komputera to: ' + computerMove);

if ( computerMove == 'kamień' && playerMove == 'papier') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
    printMessage('Komputer wygral!');
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'papier') {
    printMessage('Komputer wygral!');
} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
    printMessage('Ty wygrales!');
} else if (computerMove == 'papier' && playerMove == 'kamień') {
    printMessage('Komputer wygral!');
} else if (computerMove ===  playerMove) {
    printMessage('Remis');
}
if (playerMove == 'nieznany ruch') {
    printMessage('=======');
    printMessage('Blad!!!');
    printMessage('=======');
}