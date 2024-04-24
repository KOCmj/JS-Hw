let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


// function displayFood(){
//     for(let i = 0; i < Object.keys(person3).length; i++){
//         if(Array.isArray(Object.values(person3)[i])){
//             console.log(Object.values(person3)[i]);
//         };
//     }
// }


// displayFood()
console.log('test')



function displayFood1() {
    for(let i = 0; i < Object.keys(person3).length; i++){
        if(Array.isArray(Object.values(person3)[i])){
            console.log(Object.values(person3)[i])
        } else if (Object.keys(person3[i] === 'shakes')){
            console.log((Object.values(person3)[i]))
        }
    }
}

displayFood1()

function displayFavoriteFoods() {
    for (const key in person3) {
        if (key === 'shakes') {
            console.log('Shakes:');
            const shakesObj = person3[key][0];
            for (const sName in shakesObj) {
                console.log(`  -${sName}: ${shakesObj[sName]}`);
            }
        } else {
            console.log(`${key}:`);
            if (Array.isArray(person3[key])) {
                person3[key].forEach(item => console.log(`  -${item}`));
            } else {
                console.log(`  -${person3[key]}`);
            }
        }
    }
}

displayFavoriteFoods();




function Person(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        return `This is human name is: ${this.name} and is ${this.age} years old.`;

    };

    this.addAge = (addToAge) => {
        this.age += addToAge;
        console.log(`${this.name} is now ${this.age} times qoes quick`);
    };
        
};

let human = new Person('Muffy', 19);

let human2 = new Person('Moon', 25);

human.addAge(3);

human2.addAge(3);


console.log(human.printInfo());

console.log(human2.printInfo());






const isWordBig = (word) => {
    return new Promise((resolve, reject) => {
        if (word.length >= 10){
            resolve(`The word: ${word} has more than 10 letters`)
        } else {
            reject(`The word: ${word} doesn't have 10 letters`)
        };
    });
}

isWordBig('Appreciates')
.then( (result) => {
    console.log(result);
})

.catch( (error) => {
    console.log(error);
});

















function playAudio() {
    var audio = document.getElementById('audio_player');
    if (audio.paused) {
        audio.play();
    }
}

function stopAudio() {
    var audio = document.getElementById('audio_player');
    if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
    }
}
