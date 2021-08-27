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
    // gameState.duck = this.add.sprite(100, 100, 'duck').setScale(3);
    
    gameState.duck = this.physics.add.group();

    function duckGen() {
      const xCoord = Math.random() * 800;
      gameState.duck.create(xCoord, 400, 'duck');
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
    // gameState.duck.anims.play('fly', true);
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
  // scene: {
  //   preload,
  //   create
  // }
};



const game = new Phaser.Game(config);


// function preload() {
//   this.load.image("logo", logo);
// }

// function create() {
//   const logo = this.add.image(400, 150, "logo");

//   this.tweens.add({
//     targets: logo,
//     y: 450,
//     duration: 2000,
//     ease: "Power2",
//     yoyo: true,
//     loop: -1
//   });
// }

export { game };
