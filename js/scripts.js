// back end
var turnTotal = 0;
var player1Score = 0;
var player2Score = 0;
var player1Name;
var player2Name;
var random;
var dieCount;


function Player (name, score, turn) {
  this.name = name;
  this.score = score;
  this.turn = turn;
}

function getRandomNumber(lower,upper) {
  return Math.floor(Math.random()*(upper-lower + 1)) + lower;
  return dieCount;
}



// document.getElementById("player1Score").innerHTML = player1Score;



// front end
$(function() {
  $("form#intake").submit(function(event) {
    event.preventDefault();

    var inputtedFirstPlayer = $("input#p1").val();
    var inputtedSecondPlayer = $("input#p2").val();
    var newPlayer1 = new Player(inputtedFirstPlayer, 0, true);
    var newPlayer2 = new Player(inputtedSecondPlayer, 0, false);

    $("#intake").hide();
    $(".playField").show();
    $(".playField2").show();

      $("#player1name").text(newPlayer1.name);
      $("#player2name").text(newPlayer2.name);
      $("#player1score").text(newPlayer1.score);
      $("#player2score").text(newPlayer2.score);

      if (newPlayer1.turn === true) {

      $("button#roll1").click(function(event) {
        event.preventDefault();
        random = getRandomNumber(1,6);
        if (random === 1) {
          turnTotal = 0;
          newPlayer1.turn = false;
          newPlayer2.turn = true;
          alert(turnTotal);
        } else if (random > 1) {
          turnTotal += random;
          alert(turnTotal);
        }
      $("button#hold1").click(function(event) {
        event.preventDefault();
        alert("hi");
        newPlayer1.turn = false;
        newPlayer2.turn = true;
        newPlayer1.score += turnTotal;
        turnTotal = 0;
      });
    });
    } else if (newPlayer2.turn === true) {
        $("button#roll2").click(function(event) {
          event.preventDefault();
          random = getRandomNumber(1,6);
          if (random === 1) {
            turnTotal = 0;
            newPlayer1.turn = true;
            newPlayer2.turn = false;
            alert(turnTotal);
          } else if (random > 1) {
            turnTotal += random;
            alert(turnTotal);
          }
          $("button#hold2").click(function(event) {
            newPlayer1.turn = true;
            newPlayer2.turn = false;
            newPlayer2.score += turnTotal;
            turnTotal = 0;
      });
    });
}

});
});
// });
// $(function() {







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
