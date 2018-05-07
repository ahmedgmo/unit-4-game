var wins = 0;
var losses = 0;
var gameStart = false;
var currentScore = 0;

function startGame() {
    gameStart = true;

    var randomNum = Math.floor(Math.random() * 120) + 19;
    console.log(randomNum);

    //ES6 stackoverflow researched solutions
    var crystalValues = Array.from({length: 4}, () => Math.floor(Math.random() * 12) + 1);
    console.log(crystalValues);

    for(var i = 0; i < crystalValues; i++) {
        var imageCrystal = $("<p>");
        imageCrystal.addClass("crystal-values");
        // imageCrystal.attr("src", "assets/images/" + crystalValues[i] + ".png");
        imageCrystal.attr("data-crystalValue", crystalValues[i])
        $('#crystals').append(imageCrystal);
    }

    $('#targetScore').text(randomNum);

}

$(function(){
    $('#startButton').click(startGame());
  })