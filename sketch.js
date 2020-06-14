var database;

var form,player,game,playerCount;
var gameState = 0;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
}
function draw(){
   game = new Game();
   game.getState();
   game.Start();
}