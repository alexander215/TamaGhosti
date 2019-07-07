let petName;
let ageVariable = 5;
let hungerVariable = 3;
let sleepinessVariable = 3;
let boredomVariable = 3;

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
setTimer () {
    setInterval(() => {
        petName.time +=1;
        $('#gameTimer').text(`Time: ${petName.time}`)
        if ((petName.time % ageVariable) === 0){
            petName.age +=1;
            $('#ageTracker').text(`Age: ${petName.age}`)
        }
        if ((petName.time % hungerVariable) === 0){
            petName.hunger +=1;
            $('#hungerTracker').text(`Hunger: ${petName.hunger}`)
        }
        if ((petName.time % sleepinessVariable) === 0){
            petName.sleepiness +=1;
            $('#sleepinessTracker').text(`Sleepiness: ${petName.sleepiness}`)
        } 
        if ((petName.time % boredomVariable) === 0){
            petName.boredom +=1;
            $('#boredomTracker').text(`Boredom: ${petName.boredom}`)
        }
    }, 1000)
},
}

$('.buttons').on('mousedown', e => {
    $(e.target).css('background-color', 'white');
    $(e.target).css('color', 'black');
})

$('.buttons').on('mouseup', e => {
    $(e.target).css('background-color', 'black');
    $(e.target).css('color', 'white');
})