var wins = 0;
var losses = 0;
var gameStart = false;
var currentScore = 0;
var crystals = [
    redCrystal = {
        index: 0,
        color: "red",
        img: "redGem.png"
    },
    blueCrystal = {
        index: 1,
        color: "blue",
        img: "blueGem.png"
    },

    purpleCrystal = {
        index: 2,
        color: "blue",
        img: "purpleGem.png"
    },

    orangeCrystal = {
        index: 3,
        color: "blue",
        img: "orangeGem.png"
    },
]

$(function () {
    $('#startButton').click(function () {
        startGame();
    });
    function startGame() {
        gameStart = true;

        var randomNum = Math.floor(Math.random() * 120) + 19;
        console.log(randomNum);

        //ES6 stackoverflow researched solutions
        var crystalValues = Array.from({ length: 4 }, () => Math.floor(Math.random() * 12) + 1);
        console.log(crystalValues);

        for (var i = 0; i < crystalValues; i++) {
                crystals[i].index = crystalValues[i];
        }

        $('#targetScore').text(randomNum);

    }
});

$(function() {
})

//Pseudo-coding the rest
// create a on click event for each gem that adds the value of the gem to the counter
// display counter under the element ID #currentScore
// create an if conditional that compares currentScore value against targetScore
// if current score is less, continue play.
// if current score is more than targetScore, end game, print "You lose", losses increase by one.
// if current score equals target score, end game, pring "you win", wins increase by one.