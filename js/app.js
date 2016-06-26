// Enemies our player must avoid

var player;
var gem;
var score = 0;
var hide = false;
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // set the speed of the enemy
    this.speed = speed;
    this.x = x
    this.y = y;
   
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
   // this.x = this.x + 1;
    //this.x*dt;
    this.y*dt;
};




// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function(x,y,speed) {

  this.sprite = 'images/char-boy.png';

    // set the speed of the enemy
    this.speed = speed;
    this.x = x;
    this.y = y;
    this.playerWidth = 100;
    this.playerHeight =100;
    
};





Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x * dt;
    this.y * dt;
};

Player.prototype.setScore = function(sco) {

score = sco;

}

Player.prototype.getScore = function() {
  return score;
}





Player.prototype.render = function() {


    console.log("playerx :" + player.x);
      console.log("playery :" + player.y);
      

if(this.x < 0) {

    console.log("player and side collision x direction");
    this.x = 0;
}

if(this.x > canvas.width - 110) {
    console.log("player side collison x direction ");
   this.x = canvas.width - 110;
}



if(this.y < 0) {
   this.y = 0;
   console.log("hit detection for y top");
}

if(this.y >= canvas.height - 210) {
   this.y = canvas.height - 210;
   console.log("hit detection for y top");
}











    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



var Gems = function(x,y,color) {

    switch(color) {

      case "orange" :
      this.sprite = 'images/gem-orange.png';
      break;
      case "green" :
      this.sprite = 'images/gem-green.png';
      break;
      case "blue" :
      this.sprite = 'images/gem-blue.png';
      break;



    }

    this.gemWidth = 100;
    this.gemHeight =100;

    
      this.x = x;
    this.y = y;
}
// get the x and y coordinate of the gem
Gems.prototype.render = function(x,y) {

  // show or hide the particular gem that is removed 
 // create a boolean switch so if the hit detection has been reached then 
 // set the hide clause to true
   // alert(hide);

      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }




    var Items = function(x,y,item) {

      switch(item) {
      case "key" :
       this.sprite = 'images/key.png';
      break;
        case "rock" :
       this.sprite = 'images/rock.png';
      break;


      }

        this.x = x;
    this.y = y;

    }

    Items.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    }








// This class requires an update(), render() and
// a handleInput() method.

var allEnemies = [];
// create an array to store the gems
var allGems = [];
// create array of object instances
var allItems = [];

player = new Player(10,400);
gem = new Gems(10,200,"green");
gem2 = new Gems(200,100,"orange");
gem3 = new Gems(300,200,"blue");
var myenemy = new Enemy(100,50);
var myenemy2 = new Enemy(100,150);
var myenemy3 = new Enemy(100,250);


// Now instantiate your objects.
items = new Items(100,300, "key");
var gameitems = [items];


// set the score



//alert("return a score" + player.setScore(25));


for(var i=0; i<gameitems.length; i++) {

allItems.push(gameitems[i]);

}






Player.prototype.handleInput = function(keys) {

switch(keys) {

    case 'left':
    this.x =  (this.x - 10);
    break;
       case 'up':
    this.y = this.y - 10;
  
    break;
       case 'right':
    this.x = this.x + 10;
    break;
       case 'down':
     this.y = this.y + 10;
    break;
}

}



// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// 0 will be the edge of the canvas





// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


var checkGemCollisions = function() {


  var gemitems = [gem,gem2,gem3];

  //alert(objectinst[0]);
for(var i=0; i <gemitems.length; i++) {

allGems.push(gemitems[i]);

gems = gemitems[i];



//alert("element" + (i + 1) + " "+ gems.x);
//alert(gems.y);

 if(player.x < allGems[i].x + allGems[i].gemWidth && player.x + player.playerWidth > allGems[i].x
  && player.y < allGems[i].y + allGems[i].gemHeight && player.playerHeight + player.y > allGems[i].y) {
     
    //alert("gem has been hit");
     score = 20;
     
    console.log("gem collison detected");

  //  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);rect1.height + rect1.y > rect2.y

    }
  




}



}

var checkCollisions = function() {

   console.log("x value of the player" + player.x);
     console.log("y value of the player" + player.y);

  var objectinst = [myenemy, myenemy2,myenemy3];
for(var i=0; i <objectinst.length; i++)
{



allEnemies.push(objectinst[i]); 
/*
if(this.x > objectinst[i].x + 0 && this.x < objectinst[i].x + 200) {
    console.log("collision detected");
}
*/
enemy = allEnemies[i];

//alert(enemy);

/*
alert(((this.x > objectinst[i].x + 0 && this.x < objectinst[i].x + 400) 
    && (this.y > objectinst[i].y + 0 && this.y < objectisnt[i].y + 400)));

*/


   if(player.x >= enemy.x + 0 && player.x < enemy.x + 50 && player.y >= enemy.y + 0 && player.y < enemy.y + 50) {
     
    console.log("enemy has been hit");

    }


  

}

     //alert("x value of the enemy" + enemy.x);
    // alert("y value of the enemy" + enemy.y);


   



   
 
 

}

var scoreUpdate = function() {

    ctx.font = "20px Ariel";
    ctx.strokeText("Player score  " + player.getScore(), 20,30);
    ctx.clearRect(0, 0, 200, 100);
     ctx.strokeText("Player score  " + player.getScore(), 20,30);
     ctx.fillText("Lives score" + 20, 200,30);
    ctx.fillText("Health" + 20, 400,30);

}


