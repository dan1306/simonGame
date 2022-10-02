let userClickedPattern = []

let buttonColours = ["red", "blue", "green", "yellow"]

let gamePattern = []

let started = false

let level = 0

$(document).on('keypress', function(e) {


    if (!started) {
      nextSequence()
      started = true
    }
})
  
function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        if (userClickedPattern.length == gamePattern.length) {

            setTimeout(() => {

                nextSequence()
              }, 1000)
              userClickedPattern = []
        }
    } else {
        playSound('wrong')
        
        $('body').addClass('game-over')

        setTimeout(() => {
    
          $('body').removeClass('game-over')
        }, 1000)
    
        $("h1").text("Game Over, Press Any Key to Restart")
    }
    
}

function nextSequence() {

    level++

    $('h1').text(`Level ${level}`)

    let randomNumber = Math.floor(Math.random() * 4)

    let randomChosenColour = buttonColours[randomNumber]

    gamePattern.push(randomChosenColour)

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour)
}

function playSound(name) {
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}

$('.btn').click(function () {

    let userChosenColour = this.id
    userClickedPattern.push(userChosenColour)
    console.log(userClickedPattern)
    playSound(userChosenColour)
    animatePress(userChosenColour)
    checkAnswer(userClickedPattern.length - 1)
})

function animatePress(clr) {
    $("#" + clr).addClass("pressed");
    setTimeout(function() {
      $("#" + clr).removeClass("pressed");
    }, 100);
}