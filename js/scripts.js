// back end
var counter = 0;
var player1Score = 0;
var player2Score = 0;
var player1Name;
var player2Name;
var random;
var dieCount;


function getRandomNumber(lower,upper) {
  return Math.floor(Math.random()*(upper-lower + 1)) + lower;
  return dieCount;
}

if (random === 1) {
  counter = 0;
} else if (random >1) {
  counter += random;
}



// front end
$(function() {
  $("form#intake").submit(function(event) {
    event.preventDefault();

    $(".player1Name").text($("input#p1").val());
    $(".player2Name").text($("input#p2").val());
    $("#intake").hide();
    $(".playField").show();
  });
});


$(function() {
  $("button#roll").click(function(event) {
    event.preventDefault();

    random = getRandomNumber(1,6);
  });
});






// hide the #intake div


// NOTES:
//
// 1a. if number is not 1, add to a counter variable of some sort
// if "1" then drop score to 0 for round, switch players
//
// if hold
// add total of variable to player 1 or 2, switch player
//
// if either player total hits 100, declare game winner and offer a 'start over' buttons




// Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":
//
// If the player rolls a 1, they score nothing and it becomes the next player's turn.
// If the player rolls any other number, it is added to their turn total and the player's turn continues.
// If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
// The first player to score 100 or more points wins.
//
// // For example, the first player, Ann, begins a turn with a roll of 5. Ann could hold and score 5 points, but chooses to roll again. Ann rolls a 2, and could hold with a turn total of 7 points, but chooses to roll again. Ann rolls a 1, and must end her turn without scoring. The next player, Bob, rolls the sequence 4-5-3-5-5, after which he chooses to hold, and adds his turn total of 22 points to his score.
