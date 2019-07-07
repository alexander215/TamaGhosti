class Tamagotchi {
    constructor(petName){
        this.name = petName;
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
        this.age = 0;
        this.time = 0;

    }
    initPet(){
        // const $stats =  $(`<div class="stats"><h2>Hunger:</h2><p>${petName.hunger}</p></div><div class="stats"><h2>Sleepiness:</h2><p>${petName.sleepiness}</p></div><div class="stats"><h2>Boredom:</h2><p>${petName.boredom}</p><div class="stats"><h2 id="age">Age: ${petName.age}</h2></div>`);
        $('.title').append(`<h1>Boooooo... I'm <u>${petName.name}</u> the Tama-ghost-i...</h1>`);
        // $('.pet').append(`<img id="ghost" src="images/ghost-pet.png"/>`);
        $('.pet').show();
           
        $('.bars').show();
        $('.interactive').toggleClass('interactive interactive2');
        game.setTimer();
    }
    


}