// game configuration object
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Menu2, Menu3, Play, Player2],
}

// main game object
let game = new Phaser.Game(config);

//reserve keyboard vars
let keyUP, keyLEFT, keyRIGHT,keyF;
let keyD, keyA, keyW;

// define game settings
game.settings = {
    spaceshipSpeed: 3,
    gameTimer: 60000    
}
