class Tamagotchi {
    constructor(petName){
        this.name = petName;
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
        this.age = 0;

    }
    initPet(){
        const $div = $('<div/>');
        const $name = $('name');
        // const $h1 = $
        const $stats =  $(`<div class="stats"><h2>Hunger:</h2><p>0</p></div><div class="stats"><h2>Sleepiness:</h2><p>0</p></div><div class="stats"><h2>Boredom:</h2><p>0</p>`);

        $('#bars').append($stats);
    }
    


}