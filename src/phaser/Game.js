import phaser from 'phaser';

export default class Game extends phaser.Scene{
  constructor() {
    super('game');
  }

  preload() {
    this.load.image('sky', './assets/sky.jpg');
    this.load.spritesheet('duck', './assets/duckspritesheet.png', 
        {frameWidth: 100, frameHeight: 100});
  }

  create() {
    this.add.image(0, 0, 'sky').setOrigin(0, 0);
  }


}