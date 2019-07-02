$('#startButton').on('click', (e) => {
    startGame();
}
)

startGame = () => {
    const namePrompt= prompt('What do you want to name your pet?', '');
    $('header').append('Hello ', namePrompt);
}