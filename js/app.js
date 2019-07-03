let petName;

$('#startButton').on('click', (e) => {
    game.startGame();
}
)
const game = {
startGame () {
    petName = prompt('What do you want to name your pet?', '');
    $('#startButton').hide();
    // petName = new Tamagotchi(petName);
    petName = new Tamagotchi(petName);

    petName.initPet();
},
feed (){
        
}


}
const hunger = () => {
    setInterval(() => {
        this.hunger += 1;
    }, 10000)
    // every 10 seconds increase hunger by 1 point
}