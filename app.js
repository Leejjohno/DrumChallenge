const audio1 = new Audio("chocobo-wark.mp3");
const audio2 = new Audio("10.mp3");
const audio3 = new Audio("doom-shotgun.mp3");
const audio4 = new Audio("ff7-cursor.mp3");
const audio5 = new Audio("wilhelm.mp3");
let sound1 = document.getElementById('sound1');
let sound2 = document.getElementById('sound2');
let sound3 = document.getElementById('sound3');
let sound4 = document.getElementById('sound4');
let sound5 = document.getElementById('sound5');



document.addEventListener("keydown", (event) => {
    if (event.keyCode == 81) {
        audio1.play();
    } else if (event.keyCode == 87) {
        audio2.play();
    } else if (event.keyCode == 69) {
        audio3.play();
    } else if (event.keyCode == 82) {
        audio4.play();
    } else if (event.keyCode == 84) {
        audio5.play();
    }
})

document.getElementById('sound1button').addEventListener("click", () => {
    audio1.play()
});
document.getElementById('sound2button').addEventListener("click", () => {
    audio2.play()
});
document.getElementById('sound3button').addEventListener("click", () => {
    audio3.play()
});
document.getElementById('sound4button').addEventListener("click", () => {
    audio4.play()
});
document.getElementById('sound5button').addEventListener("click", () => {
    audio5.play()
});