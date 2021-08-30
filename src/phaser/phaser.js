import Phaser from "phaser";

const gameState = {};
class Game extends Phaser.Scene {
  constructor() {
    super('scene')
  }


  preload() {
    this.load.image('sky', 'assets/sky2.jpeg');
    this.load.image('grass', 'assets/grassbg.png');
    this.load.spritesheet('duck', 'assets/duckspritesheet.png',
      { frameWidth: 32, frameHeight: 32 });
  }

  create() {
    this.add.image(500, 350, 'sky');
    // gameState.duck = this.add.sprite(Math.random() * 800, 'duck').setScale(3);

    gameState.duck = this.physics.add.group({
      key: 'duck',
      classType: Phaser.GameObjects.Sprite,
    });

    function duckGen() {
      gameState.duck.xCoord = Math.random() * 800;
      gameState.duck.create(gameState.duck.xCoord, 400, 'duck');
      if (gameState.duck.xCoord < 400) {
        gameState.duck.velX = 100;

      } else {
        gameState.duck.velX = -100;
      }
    }

    const duckGenLoop = this.time.addEvent({
      delay: 100,
      callback: duckGen,
      callbackScope: this,
      loop: true
    })

    this.anims.create({
      key: 'fly',
      frames: this.anims.generateFrameNumbers('duck', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
      yoyo: true
    })

    
    this.add.image(400, 400, 'grass');
    
    // gameState.duck.anims.play('fly', true);
      this.input.on('gameobjectdown', function(pointer, gameObject) {
        gameObject.destroy();
        console.log('click', gameObject)
      })
      
      gameState.duck.move = this.tweens.add({
        targets: gameState.duck,
        x: 100,
        ease: 'Linear',
        duration: 1800,
        repeat: -1,
        yoyo: true
      })
    }
    
    update() {
      gameState.children = gameState.duck.getChildren()
      for (let i = 0; i < gameState.children.length; i++) {
        gameState.children[i].setInteractive();
      }
      // if (gameState.duck.xCoord < 400) {
        //   gameState.duck.velX = 100;
        
        // } else {
          //   gameState.duck.velX = -100;
          // }
    gameState.duck.setVelocityY(-100);
    // if ( gameState.duck.velX = -100 ){
    //   gameState.duck.flipX = true;
    // }
  }
}

var config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  backgroundColor: "#8FD9F6",
  width: 800,
  height: 600,
  scene: Game,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      enableBody: true,
    }

  }
};



const game = new Phaser.Game(config);

export { game };
