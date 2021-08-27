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
    // this.load.image('duck2', duckHuntBird)
  }

  create() {
    this.add.image(500, 350, 'sky');
    gameState.duck = this.add.sprite(100, 100, 'duck').setScale(3);
    this.anims.create({
      key: 'fly',
      frames: this.anims.generateFrameNumbers('duck', { start: 0, end: 3 }), 
      frameRate: 10, 
      repeat: -1
    })
    // this.add.sprite(200, 100, 'duck2').setScale(.2);
    this.add.image(400, 400, 'grass');
  }

  update() {
    gameState.duck.anims.play('fly', true);
  }
}

var config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  backgroundColor: "#8FD9F6",
  width: 800,
  height: 600,
  scene: Game
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
