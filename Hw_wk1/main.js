// Homework
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
console.log(dog_names)
let findWords = function(){
    for(let i = 0; i < dog_names.length; i++){
            let dogName = dog_names[i].toLowerCase();
            
            if(dog_string.toLowerCase().includes(dogName)){
                console.log(`Matched ${dog_names[i]}`);
            } else {
                console.log('No matches was found');
            }
    };
};


findWords()


let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// arr.splice(0, 1, 'even index')
// arr.splice(2, 1, 'even index')
// arr.splice(4, 1, 'even index')
// console.log(arr)
function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            arr.splice(i, 1, 'even index');
        }
    }
    return arr;
}

console.log(replaceEvens(arr))






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


// No idea if we are supposed to post the codewar problems but 

// function greet() {
//     return "hello world!"
//   }
  
//   greet();

// function createPhoneNumber(numbers){
//     let pNum = numbers.length
//     if(pNum == 10){
//     return(`(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`)} 
// }


// function filter_list(l) {
//     let results = [];
//     for (let i = 0; i < l.length; i++) {
//       if (typeof l[i] !== 'string') {
//         results.push(l[i]);
//       }
//      }
//     return results
//   }


// var countBits = n => (n.toString(2).match(/1/g)||"").length
