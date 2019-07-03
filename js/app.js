let petName;

$('#startButton').on('click', (e) => {
    game.startGame();
}
)
const game = {
startGame () {
    petName = prompt('What do you want to name your pet?', '');
    // Tamagotchi(namePrompt);
    console.log(petName);
    $('#startButton').hide();
    petName = new Tamagotchi(petName);
    console.log(petName.name);
    // petName.initPet();
    // console.log(Tamagotchi.name);
}
feed (){
        
}


}