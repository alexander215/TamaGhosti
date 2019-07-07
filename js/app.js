let petName;
$('.bars').hide();

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
age (){
    // const ageCounter = 
    setInterval(() => {
        petName.age +=1;
        // const age = document.querySelector("#ageTracker")
        // age.innerText = "Age: " + petName.age
        $('#ageTracker').text(`Age: ${petName.age}`)
    }, 2000)

},
hunger (){
    setInterval(() => {
        petName.hunger +=1;
        $('#hungerTracker').text(`Hunger: ${petName.hunger}`);

    }, 2000)

},

sleepiness (){
    setInterval(() => {
        petName.sleepiness +=1;
        $('#sleepinessTracker').text(`Sleepiness: ${petName.sleepiness}`);

    }, 2000)
},

boredom (){
    setInterval(() => {
        petName.boredom +=1;
        $('#boredomTracker').text(`Boredom: ${petName.sleepiness}`);

    }, 2000)
}

}

$('.buttons').on('mousedown', e => {
    $(e.target).css('background-color', 'white');
    $(e.target).css('color', 'black');
})

$('.buttons').on('mouseup', e => {
    $(e.target).css('background-color', 'black');
    $(e.target).css('color', 'white');
})