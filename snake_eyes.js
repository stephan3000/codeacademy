var players = [];

function Player(blah){
    this.name = blah;
    var score = 0;
    this.addToScore = function(add){
        score += add;
    };
    this.getScore = function(){
        return score;
    };
}

function rollSingleDice()
{
    return Math.floor(Math.random()*6+1);
}
var snakeEyes = false;

//Make the rollDice function roll dice, 
//check for doubles, and return the 
//total score achieved by all rolls
function rollDice(player)
{
    var roll1 = rollSingleDice();
    var roll2 = rollSingleDice();
    player.addToScore(roll1 + roll2);
    console.log("Die 1: " + roll1 + " Die 2: " + roll2 + " Score: " + player.getScore());
    if(roll1 === 1 && roll2 ===1)
    {
        console.log("Snake Eyes!");
        snakeEyes = true;
        return true;
    }
    if(roll1 === roll2)
      console.log("Congratulations Double Thrown!");
    
    return false;
}

var i;
for(i=0; i<4; i++)
{
    temp = prompt("Enter player name");
    players.push(new Player(temp));
}

var turn = 1;
while(!snakeEyes){
  console.log("Turn " + turn);
  for(i=0; i<players.length; i++)
  {
    rollDice(players[i]);
  }
  turn++;
}
for(i=0; i<players.length; i++)
  console.log(players[i].name + " scored " + players[i].getScore());
var highScore = 0;
for(i=0; i<players.length; i++)
{
   if(players[i].getScore() > highScore)
     highScore = players[i].getScore();
}
console.log("high score is: " + highScore);
var winners = [];
for(i=0; i<players.length; i++)
{
    if(players[i].getScore() === highScore)
      winners.push(players[i].name);
}
if(winners.length > 1)
{
    console.log("Congratulations " + winners[0]);
    for(i=1; i<winners.length; i++)
      console.log(" and " + winners[i]);
    console.log(" you have won!");
}else
{
    console.log("Congratulations " + winners[0] + " you have won!");
}