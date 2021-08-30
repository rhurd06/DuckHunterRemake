import Phaser from "phaser";

export default class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScene' })
  }
  preload(){
    this.load.image('Robyn', 'assets/Robyn.jpg');
    this.load.image('John', 'assets/John.jpeg');

  }
  create(){
    this.add.text(300, 50, 'Duck Hunter', { fill: '#000000', fontSize: '30px' });
    const style = { fontSize: '20px', fontFamily: 'Arial', fill: '#000000', align: 'left', wordWrap: {width: 400}}
    this.add.text(100, 100, `Duck Hunter is a remake of the classic childhood favorite Duck Hunt. The object of the game is to shoot the birds as the fly by clicking on them with the mouse. There's a score keeper to track how many ducks you've killed and a Missed Ducks to let you know how many more you can miss before it's game over.`, style);
    this.add.text(550, 100, 'Click to start!', {fill: '#000000', fontSize: '35px', align: 'center', wordWrap: {width: 20}})
    this.input.on('pointerdown', ()=> {
        this.scene.stop('startScene')
        this.scene.start('scene')
    })

    this.add.text(100, 300, 'Meet the Engineers:', {fill: '#000000', fontSize: '25px'})
    const style1 = {fontSize: '15px', fontFamily: 'Arial', fill: '#000000', align: 'left', wordWrap: {width: 200}}
    this.add.image(250, 400, 'Robyn').setScale(.07);
    this.add.text(180, 475, 'Robyn is a retail manager turned Full Stack Developer who loves to tackle challenges and learn new programs', style1)
    this.add.image(450, 400, 'John').setScale(.3);

  }
}