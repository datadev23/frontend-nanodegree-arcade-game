// Enemies our player must avoid
var player;
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    alert(this.sprite);

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
    //this.x = this.x + 1;
    this.x*dt;
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
    this.x = x
    this.y = y;

};


Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x * dt;
    this.y * dt;
};

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








else {
    console.log("no side hit detection");
}



    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};






// This class requires an update(), render() and
// a handleInput() method.

var allEnemies = [];
// create array of object instances
player = new Player(10,400);
var myenemy = new Enemy(100,50);
var myenemy2 = new Enemy(100,150);

var myenemy3 = new Enemy(100,250);

var objectinst = [myenemy, myenemy2,myenemy3];
// Now instantiate your objects.

alert(objectinst[0]);

for(var i=0; i <objectinst.length; i++)
{

alert("enemy x " + objectinst[i].x);
alert("enemy y "+objectinst[i].y);

allEnemies.push(objectinst[i]); 
/*
if(this.x > objectinst[i].x + 0 && this.x < objectinst[i].x + 200) {
    console.log("collision detected");
}
*/
enemy = allEnemies[i];

/*
alert(((this.x > objectinst[i].x + 0 && this.x < objectinst[i].x + 400) 
    && (this.y > objectinst[i].y + 0 && this.y < objectisnt[i].y + 400)));
*/


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


var checkCollisions = function() {

  

    console.log("x value of the player" + player.x);
     console.log("y value of the player" + player.y);

     console.log("x value of the enemy" + enemy.x);
     console.log("y value of the enemy" + enemy.y);

   
 
    if(player.x >= enemy.x + 0 && player.x < enemy.x + 50 && player.y >= enemy.y + 0 && player.y < enemy.y + 50) {
     
    console.log("enemy has been hit");

    }
    else {

        console.log("player has not hit enemey");
        
    }

}




