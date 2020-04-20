class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/start.wav');
        this.load.audio('sfx_explosion', './assets/fishsound.wav');
        this.load.audio('sfx_rocket', './assets/rocketshot.wav');
        this.load.audio('sfx_rocket2', './assets/rocket2.wav');
        this.load.audio('sfxexplosion2', './assets/socre2.wav');
        this.load.image('title', './assets/fishhunter.png');
    }

    create() {
        this.title = this.add.sprite(0,0,'title').setOrigin(0,0);
        // menu display
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#0FFFFF',
            color: '#483985',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // show menu text
        let centerX = game.config.width/2;
        let centerY = game.config.height/2+100;
        let textSpacer = 64;

       // this.add.text(centerX, centerY- textSpacer, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        //this.add.text(centerX, centerY, 'Use ←→ arrows to move & (F) to Fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#8462FF';
        menuConfig.color = '#000';
        this.add.text(centerX, centerY, ' PRESS (A) FOR 2 PLAYERS MODE ', menuConfig).setOrigin (0.5);       
        this.add.text(centerX, centerY + textSpacer, ' or PRESS (F) for SINGLE PLAYER MODE ', menuConfig).setOrigin (0.5);

        //define play mode/level difficulty keys
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyA)){
            this.sound.play('sfx_select');
            this.scene.start("menu2Scene");
        }
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            this.sound.play('sfx_select');
            this.scene.start("menu3Scene");
        }
    }
}