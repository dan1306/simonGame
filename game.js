let userClickedPattern = []

let buttonColours = ["red", "blue", "green", "yellow"]

let gamePattern = []


function nextSequence() {
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
})

function animatePress(clr) {
    $("#" + clr).addClass("pressed");
    setTimeout(function() {
      $("#" + clr).removeClass("pressed");
    }, 100);
}