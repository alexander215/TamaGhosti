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
age (){
    // const ageCounter = 
    setInterval(() => {
        petName.age +=1;
        const age = document.querySelector("#age")
        age.innerText = "Age: " + petName.age
        console.log(petName.age);
    }, 1000)

},
feed (){
        
}
}
// const hunger = () => {
//     setInterval(() => {
//         petName.hunger += 1;
//     }, 10000)
//     console.log(petName.hunger, "<- hunger function");
//     // every 10 seconds increase hunger by 1 point

// }

// const age = () => {
//     setInterval(() => {
//         petName.age += 1;
//     }, 1000)
//     // every 10 seconds increase hunger by 1 point
// }




// let counter = 0;
// const intervalId = setInterval(() => {  
//     console.log(counter);  counter += 1;
// }, 1000)
