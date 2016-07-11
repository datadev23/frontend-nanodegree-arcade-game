// Enemies our player must avoid
var player;
var gem;
var score = 0;


// Enemy object
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // set the speed of the enemy
    this.speed = speed;
    this.x = x;
    this.y = y;
    this.enemyWidth = 99;
    this.enemyHeight = 77;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
     this.speed = Math.floor(Math.random() * (speed - 1)) + 1;

    if (this.x > 500){

         this.x = 0;
         this.speed = Math.floor(Math.random() * (speed - 1)) + 1;
    }

    this.y * dt;

};




// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function(x, y) {

    this.sprite = 'images/char-boy.png';

    // set the speed of the enemy
    //this.speed = speed;
    this.x = x;
    this.y = y;
    this.playerWidth = 67;
    this.playerHeight = 88;

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


    console.log("playerx :" + this.x);
    console.log("playery :" + this.y);


    if (this.x < 0) {

        console.log("player and side collision x direction");
        this.x = 0;
    }

    if (this.x > canvas.width - this.playerWidth) {
        console.log("player side collison x direction ");
        this.x = canvas.width - this.playerWidth;
    }



    if (this.y < 0) {
        this.y = 0;
        console.log("hit detection for y top");
    }

    if (this.y >= canvas.height - this.playerHeight - 20) {
        this.y = canvas.height - this.playerHeight - 20;
        console.log("hit detection for y top");
    }


    if ((this.x > 0 && this.x < 420) && (this.y > 10 && this.y < 70)) {

        alert("You win the game");
        this.resetGame();
    }




    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



var Gems = function(x, y, color) {

        switch (color) {

            case "orange":
                this.sprite = 'images/gem-orange.png';
                break;
            case "green":
                this.sprite = 'images/gem-green.png';
                break;
            case "blue":
                this.sprite = 'images/gem-blue.png';
                break;



        }

        this.gemWidth = 60;
        this.gemHeight = 67;


        this.x = x;
        this.y = y;
    }
    // get the x and y coordinate of the gem
Gems.prototype.render = function(x, y) {

    // show or hide the particular gem that is removed 
    // create a boolean switch so if the hit detection has been reached then 
    // set the hide clause to true
    // alert(hide);

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}




var Items = function(x, y, item) {

    switch (item) {
        case "key":
            this.sprite = 'images/key.png';
            break;
        case "rock":
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

player = new Player(300, 500);
gem = new Gems(10, 200, "green");
gem2 = new Gems(200, 100, "orange");
gem3 = new Gems(300, 200, "blue");
var myenemy = new Enemy(20, 150, 1);
var myenemy2 = new Enemy(20, 250, 1);
var myenemy3 = new Enemy(20, 350, 1);



// Now instantiate your objects.
items = new Items(100, 300, "key");
var gameitems = [items];



Player.prototype.handleInput = function(keys) {

    switch (keys) {

        case 'left':
            this.x = (this.x - 10);
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

Player.prototype.resetGame = function() {

    score = 0;
    collide = false;

    scoreUpdate();

player = new Player(300, 500);
gem = new Gems(10, 200, "green");
gem2 = new Gems(200, 100, "orange");
gem3 = new Gems(300, 200, "blue");
var myenemy = new Enemy(20, 150, 1);
var myenemy2 = new Enemy(20, 250, 1);
var myenemy3 = new Enemy(20, 350, 1);

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


    var gemitems = [gem, gem2, gem3];

    //alert(objectinst[0]);
    for (var i = 0; i < gemitems.length; i++) {

        allGems.push(gemitems[i]);

        gems = gemitems[i];



        //alert("element" + (i + 1) + " "+ gems.x);
        //alert(gems.y);

        if (player.x < allGems[i].x + allGems[i].gemWidth && player.x + player.playerWidth > allGems[i].x && player.y < allGems[i].y + allGems[i].gemHeight && player.playerHeight + player.y > allGems[i].y) {

            //alert("gem has been hit");


            console.log("gem collison detected");
            // alert("gem removed" + i)



        
        

        }




    }



}

var checkCollisions = function() {

    console.log("x value of the player" + player.x);
    console.log("y value of the player" + player.y);

    var objectinst = [myenemy, myenemy2, myenemy3];
    for (var i = 0; i < objectinst.length; i++) {
        allEnemies.push(objectinst[i]);
        enemy = allEnemies[i];



        if (player.x < allEnemies[i].x + allEnemies[i].enemyWidth && player.x + player.playerWidth > allEnemies[i].x && player.y < allEnemies[i].y + allEnemies[i].enemyHeight && player.playerHeight + player.y > allEnemies[i].y) {
          
          alert("You lose");
            player.resetGame();

        }




    }


}

var scoreUpdate = function() {
    ctx.font = "20px Ariel";
    ctx.strokeText("Player score  " + player.getScore(), 20, 30);
    ctx.clearRect(0, 0, 200, 100);
    ctx.strokeText("Player score  " + player.getScore(), 20, 30);
    ctx.fillText("Lives score" + 20, 200, 30);
    ctx.clearRect(200, 200, 300, 200);
    ctx.fillText("Lives score" + 20, 200, 30);
    ctx.fillText("Health" + 20, 400, 30);

}




var gameState = function() {

    endgame = true;

 


    if (win == true)

    {

        ctx.font = "20px Ariel";
        ctx.strokeText("Player score  " + player.getScore(), 20, 30);

    } else

    {
        ctx.font = "20px Ariel";
        ctx.strokeText("Player score  " + player.getScore(), 20, 30);
    }




}