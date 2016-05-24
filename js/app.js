// Enemies our player must avoid
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
    this.x*dt;
    this.y*dt;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};







// This class requires an update(), render() and
// a handleInput() method.

var allEnemies = [];

// Now instantiate your objects.
var myenemy = new Enemy(1,2);
var myenemy2 = new Enemy(1,3);

allEnemies.push(myenemy); 




// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player(12,2);
var player2 = new Player(1,3);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});




