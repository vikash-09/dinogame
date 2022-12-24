var dino = document.getElementById("dino");
var block = document.getElementById("block");
var result = document.getElementById("result");
var score = document.getElementById("score");
var game = document.getElementById("game");
var count = 0;
var sound = document.getElementById("sound");

//jump

function jump()
{
    dino.style.top = "90px";
    setTimeout(
        function()
        {
            dino.style.top = "160px";
        }
    ,400)
    count++;
    sound.play();
}

window.addEventListener("keydown", jump);

//gameOver

setInterval( function gameover()
{
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    if((blockLeft < 70) && (dinoTop > 90)){
        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `score: ${count}`
    }
} , 10)