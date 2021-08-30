import Phaser from "phaser";

const gameState = {
  score: 0,
  max: 3, 
  onScreen: 0,
  missedDucks: 5,
};
class Game extends Phaser.Scene {
  constructor() {
    super('scene')
  }


  preload() {
    this.load.image('sky', 'assets/sky2.jpeg');
    this.load.image('grass', 'assets/grassbg.png');
    this.load.spritesheet('duck', 'assets/duckspritesheet2.png',
      { frameWidth: 128, frameHeight: 128 });
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
      if (gameState.onScreen < gameState.max) {
        gameState.duck.create(gameState.duck.xCoord, 400, 'duck');
          if(gameState.duck.xCoord < 400) {
          gameState.duck.velX = 100;
        } else {
          gameState.duck.velX = -100;
        }
        gameState.onScreen += 1;
      }
    }

    const duckGenLoop = this.time.addEvent({
      delay: 100,
      callback: duckGen,
      callbackScope: this,
      loop: true
    })




    this.add.image(400, 400, 'grass');

    gameState.scoreText = this.add.text(350, 550, "Score: 0, Health: 5", { fontSize: '25px', fill: '#ffffff' });

    this.input.on('gameobjectdown', function (pointer, gameObject) {
      gameObject.destroy();
      gameState.score += 1;
      gameState.scoreText.setText(`Score: ${gameState.score}, Health: ${gameState.missedDucks}`);
      console.log('click', gameObject)
      gameState.onScreen -= 1;
    })
    
    
    // gameState.duck.move = this.tweens.add({
      //   targets: gameState.duck,
      //   x: 100,
      //   ease: 'Linear',
      //   duration: 1800,
      //   repeat: -1,
      //   yoyo: true
      // })
      this.anims.create({
        key: 'fly',
        frames: this.anims.generateFrameNumbers('duck', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
        yoyo: true
      })
    }
    
    update() {
      
      gameState.children = gameState.duck.getChildren()
      
      for (let i = 0; i < gameState.children.length; i++) {
        gameState.children[i].setInteractive();
        gameState.children[i].anims.play('fly', true);
        if (gameState.children[i].y > 395) {
          if (gameState.children[i].x < 400) {
            gameState.children[i].direction = 'flyRight';
          } else {
            gameState.children[i].direction = 'flyLeft';
          }
        }
        if (gameState.children[i].direction === 'flyRight') {
          gameState.children[i].x += 2;
        } else if (gameState.children[i].direction === 'flyLeft') {
          gameState.children[i].x -= 2;
        } 
        if (gameState.children[i].y < -128 || gameState.children[i].x > 928 || gameState.children.x < -128) {
          console.log('hello');
          gameState.children[i].destroy();
          gameState.missedDucks -= 1;
          gameState.onScreen -=1;
          gameState.scoreText.setText(`Score: ${gameState.score}, Health: ${gameState.missedDucks}`);
        }
    }


    // gameState.duck.anims.play('fly', true);
    // if (gameState.duck.xCoord < 400) {
    //   gameState.duck.velX = 100;

    // } else {
    //   gameState.duck.velX = -100;
    // }
    gameState.duck.setVelocity(0, -100);
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
