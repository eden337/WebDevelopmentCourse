var gamePattern=[];
var userClickedPattern=[];
var buttonColors=["red", "blue", "green","yellow"]
var level =0;
var started = false;
function playSound(name){
    var colorAudio = new Audio("sounds/"+name+".mp3");
    colorAudio.play();
}

function nextSequence(){
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).animate({opacity:0.5}).animate({opacity:1});
    playSound(randomChosenColor);

   
}



$(".btn").on("click",function(event){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor)
})

function animatePress(currentColor){
    $("."+currentColor).addClass("pressed");
    setTimeout(function(){
        $("."+currentColor).removeClass("pressed");
    },100);
}

$(document).on('keypress',function(){
    if(!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started = true;
        
    }
});
