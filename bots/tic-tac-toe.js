function takeTurn(game) {
    const randomIndex = Math.floor(Math.random() * game.emptySquares.length);
    const randomSquare = game.emptySquares[randomIndex];
    game.submitTurn(randomSquare);
}