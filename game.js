var dino = document.getElementById("character");
var rock = document.getElementById("block");
var rock2 = document.getElementById("block2");
// var gamediv

function jump(){
    if(dino.classList != "animation"){
        dino.classList.add("animation");
    }
    setTimeout(function(){
        dino.classList.remove("animation")
    }, 500);
}
var checkHits = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue("left"));
    if(rockLeft < 20 && rockLeft > -20  && characterTop >= 130){
        alert('Game over');
    }
}, 10);