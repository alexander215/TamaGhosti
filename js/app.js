// This is the name of the character that the user will input
let petName;

// This is how many seconds will pass before each stat will increase by 1
let ageVariable = 5;
let hungerVariable = 4;
let sleepinessVariable = 5;
let boredomVariable = 6;

// These are how much the buttons will reduce each stat
let hungerReduceVariable = 3;
let sleepinessReduceVariable = 3;
let boredomReduceVariable = 3;

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
    const timer = setInterval(() => {
        console.log(`Game timer: ${petName.time}`);
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
        if (petName.hunger >= 10) {
            clearTimeout(timer);
            this.gameOver('hungry');
        }
        if (petName.sleepiness >= 10) {
            clearTimeout(timer);
            this.gameOver('sleepy');
        }
        if (petName.boredom >= 10) {
            clearTimeout(timer);
            this.gameOver('bored');
        }
    }, 1000)
},
hungerReduce () {
    if ((petName.hunger > 0) && ((petName.hunger - hungerReduceVariable) >= 0)) {
        petName.hunger -= hungerReduceVariable;
        $('#hungerTracker').text(`Hunger: ${petName.hunger}`);
    } else {
        petName.hunger = 0;
        $('#hungerTracker').text(`Hunger: ${petName.hunger}`);
    }
    
},

sleepinessReduce () {
    if ((petName.sleepiness > 0) && ((petName.sleepiness - sleepinessReduceVariable) >= 0)){
        petName.sleepiness -= sleepinessReduceVariable;
        $('#sleepinessTracker').text(`Sleepiness: ${petName.sleepiness}`)
    } else {
        petName.sleepiness = 0;
        $('#sleepinessTracker').text(`Sleepiness: ${petName.sleepiness}`)
    }
    $('.pet').css('background-color', 'black');
    $('.pet').css('color', 'white').delay(600);
    
},

boredomReduce () {
    if ((petName.boredom > 0) && ((petName.boredom - boredomReduceVariable) >= 0)) {
        petName.boredom -= boredomReduceVariable;
        $('#boredomTracker').text(`Boredom: ${petName.boredom}`)
    } else {
        petName.boredom = 0;
        $('#boredomTracker').text(`Boredom: ${petName.boredom}`)
    }
},

gameOver (reason) {
    $('.pet').css('color', 'red').append(`<h1>Oh no! <u>${petName.name}</u> became too ${reason} and left for another dimension!</h1>`);
    $('#ghost').attr('src', 'images/angry-ghost.svg');
    // clearTimeout(game);
    // clearInterval(game);

},

lightsOut() {
    console.log("game lights out")
    $('.pet').toggleClass('pet pet2');
    const delay = setTimeout(() => {
    // $('.pet').css('background-color', 'yellow');
    $('.pet2').toggleClass('pet2 pet');

}, 5000)
    
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

$("#feed").on('click', () => {
    console.log("feed clicked");
    game.hungerReduce();
})

$("#lights").on('click', () => {
    console.log("lights clicked");
    game.lightsOut();
    game.sleepinessReduce();
})

$("#play").on('click', () => {
    console.log("play clicked");
    game.boredomReduce();
})

