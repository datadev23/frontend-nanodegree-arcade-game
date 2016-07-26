// Enemies our player must avoid
 "use strict";
var player;
var gem;
var score = 0;
var speed = 0;
var health = 100;
var allGems;
 var gemitems;
 var allItems;
 var itemsArray;


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
        this.speed = Math.floor(Math.random() * (this.speed - 1)) + 1;
        this.x += this.speed * dt * 0.2;
 
     //alert(this.speed);
     
    if (this.x > 500){

         this.x = -100;
         this.x += this.speed * dt * 0.2;
        
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




Player.prototype.hitdetect = function() {


    console.log("playerx :" + this.x);
    console.log("playery :" + this.y);


    if (this.x < this.playerWidth) {

        console.log("player left side collision");
        this.x = 60;

    }





    if (this.x > 415 - this.playerWidth) {
        console.log("player side collison x direction right ");
        this.x = 415 - 40;
    }


/*
    if (this.y < 50) {
        this.y = 50;
        console.log("hit detection for y top");
    }
*/


    if (this.y > 440) {
      this.y = 440;
      console.log("hit detection for y bottom")
    }



    if ((this.x > 0 && this.x < 420) && (this.y > 10 && this.y < 70)) {

        alert("You win the game");
        this.resetGame();
    }




    
};

Player.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    };





var Gems = function(x, y, color) {

    this.color = color;

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
allGems = [];
// create array of object instances
allItems = [];

player = new Player(124, 450);
gem = new Gems(10, 200, "green");
var gem2 = new Gems(200, 100, "orange");
var gem3 = new Gems(300, 200, "blue");
var myenemy = new Enemy(20, 150, 1);
var myenemy2 = new Enemy(20, 250, 1);
var myenemy3 = new Enemy(20, 350, 1);
var key = new Items(300,400, "key");



// Now instantiate your objects.
//items = new Items(100, 300, "key");
//var gameitems = [items];



Player.prototype.handleInput = function(keys) {

    switch (keys) {

        case 'left':
        player.hitdetect();
            this.x = (this.x - 40);
            break;
        case 'up':
          player.hitdetect();
            this.y = this.y - 50;
            break;
        case 'right':
          player.hitdetect();
            this.x = this.x + 40;
            break;
        case 'down':
          player.hitdetect();
            this.y = this.y + 50 ;
            break;
    }

}

Player.prototype.resetGame = function() {

    score = 0;
    

    player.scoreUpdate();

player = new Player(124, 450);
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


    gemitems = [gem, gem2, gem3];

    //alert(objectinst[0]);
    for (var i = 0; i < gemitems.length; i++) {
        
      
        allGems.push(gemitems[i]);
        //console.log(gemitems[i].color);
        //console.log(gemitems[i]);
    



    }



}

var gemlogic = function() {
 for (var i = 0; i < allGems.length; i++) {

        if (player.x < allGems[i].x + allGems[i].gemWidth && player.x + player.playerWidth > allGems[i].x && player.y < allGems[i].y + allGems[i].gemHeight && player.playerHeight + player.y > allGems[i].y) {

           // console.log(gemitems[i].color);
            allGems.splice(i, 1);
             
            // alert("gem removed" + i)

            score +=100;



        
        

        }
       // console.log(allGems[i].color);
}





}

var itemlogic = function() {

itemsArray = [key];

    for (var i = 0; i < itemsArray.length; i++) {
        
      
        allItems.push(itemsArray[i]);
        //console.log(gemitems[i].color);
        //console.log(gemitems[i]);
    



    }



}





var checkCollisions = function() {

    //console.log("x value of the player" + player.x);
    //console.log("y value of the player" + player.y);

    var objectinst = [myenemy, myenemy2, myenemy3];
    for (var i = 0; i < objectinst.length; i++) {
        allEnemies.push(objectinst[i]);
      



        if (player.x < allEnemies[i].x + allEnemies[i].enemyWidth && player.x + player.playerWidth > allEnemies[i].x && player.y < allEnemies[i].y + allEnemies[i].enemyHeight && player.playerHeight + player.y > allEnemies[i].y) {
          
          alert("You lose");
            player.resetGame();

        }




    }


}

Player.prototype.scoreUpdate = function() {
    ctx.font = "20px Ariel";
    ctx.strokeText("Player score  " + this.getScore(), 20, 30);
    ctx.clearRect(0, 0, 200, 100);
    ctx.strokeText("Player score  " + this.getScore(), 20, 30);
    ctx.fillText("Lives score" + 20, 200, 30);
    ctx.clearRect(200, 200, 300, 200);
    ctx.fillText("Lives score" + 20, 200, 30);
    ctx.fillText("Health" + health, 400, 30);

}




var gameState = function() {

    endgame = true;

 


    if (win === true)  {

        ctx.font = "20px Ariel";
        ctx.strokeText("Player score  " + this.getScore(), 20, 30);

    } else  {
        ctx.font = "20px Ariel";
        ctx.strokeText("Player score  " + this.getScore(), 20, 30);
    }




}