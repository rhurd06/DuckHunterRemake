import Phaser from "phaser";


class Game extends Phaser.Scene {
  constructor() {
    super('scene')
  }


  preload() {
    this.load.image('sky', 'assets/sky2.jpeg');
    this.load.spritesheet('duck', 'assets/duckspritesheet.png', { frameWidth: 32, frameHeight: 32 });
    // this.load.image('duck2', duckHuntBird)
  }

  create() {
    this.add.image(500, 350, 'sky');
    this.add.sprite(100, 100, 'duck');
    // this.add.sprite(200, 100, 'duck2').setScale(.2);
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
