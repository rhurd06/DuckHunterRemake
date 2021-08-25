import phaser from "phaser";
import logo from "../assets/logo.png";
import duck from '../assets/duckHuntBird.png'

var config = {
  type: phaser.AUTO,
  parent: "phaser-example",
  width: 1800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

let game = new phaser.Game(config);

function preload() {
  this.load.image("duck", duck);
}

function create() {
  const logo = this.add.image(1000, 300, "duck");

  this.tweens.add({
    targets: logo,
    x: 450,
    duration: 2000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });
}

export { game };
