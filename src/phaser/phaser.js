import phaser from "phaser";
import logo from "../assets/logo.png";
import sky2 from '../assets/sky2.jpeg';
import duckHuntBird from '../assets/duckHuntBird.png';

  // constructor() {
  //   super('scene')
  // };

  function preload() {
    this.load.image('sky', sky2);
    this.load.spritesheet('duck', '../assets/duckspritesheet.png',
      { frameWidth: 500, frameHeight: 700 });
    this.load.image('duck2', duckHuntBird)
  }

  function create() {
    this.add.image(500, 700, 'sky').setOrigin(0, 0);
    this.add.sprite(100, 100, 'duck');
    this.add.sprite(200, 100, 'duck2').setScale(.2);
  }


var config = {
  type: phaser.AUTO,
  backgroundColor: "#8FD9F6",
  width: 800,
  height: 600,
  scene: {
    preload,
    create
  }
};



const game = new phaser.Game(config);


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
