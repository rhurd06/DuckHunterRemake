import phaser from "phaser";
import logo from "../assets/logo.png";
import Game from './Game'

var config = {
  type: phaser.AUTO,
  parent: "phaser-example",
  backgroundColor: "#8FD9F6",
  width: 800,
  height: 600,
  scene: [Game]
};

let game = new phaser.Game(config);

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
