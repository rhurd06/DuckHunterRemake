import Phaser from "phaser";

export default class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScene' })
  }
  preload(){
    this.load.image('Robyn', 'assets/Robyn.jpg');
    this.load.image('John', 'assets/John.jpeg');
    this.load.image('linkedin', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg');
    this.load.image('github', 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg');

  }
  create(){
    this.add.text(300, 50, 'Duck Hunter', { fill: '#000000', fontSize: '30px' });
    const style = { fontSize: '20px', fontFamily: 'Arial', fill: '#000000', align: 'left', wordWrap: {width: 400}}
    this.add.text(100, 100, `Duck Hunter is a remake of the classic childhood favorite Duck Hunt. The object of the game is to shoot the birds as the fly by clicking on them with the mouse. There's a score keeper to track how many ducks you've killed and a Missed Ducks to let you know how many more you can miss before it's game over.`, style);
    let start = this.add.text(550, 100, 'Click here to start!', {fill: '#000000', fontSize: '35px', align: 'center', wordWrap: {width: 20}}).setInteractive();
    start.on('pointerdown', ()=> {
        this.scene.stop('startScene')
        this.scene.start('scene')
    })

    this.add.text(100, 300, 'Meet the Engineers:', {fill: '#000000', fontSize: '25px'})
    const style1 = {fontSize: '15px', fontFamily: 'Arial', fill: '#000000', align: 'left', wordWrap: {width: 200}}
    this.add.image(250, 400, 'Robyn').setScale(.07);
    this.add.text(150, 475, 'Robyn is a retail manager turned Full Stack Developer who loves to tackle challenges and learn new programs', style1)
    let robynsLinkedIn = this.add.image(100, 475, 'linkedin').setScale(.25).setInteractive();
    let robynsGitHub = this.add.image(100, 525, 'github').setScale(.25).setInteractive();
    this.add.image(520, 400, 'John').setScale(.3);
    this.add.text(450, 475, 'John is a Full Stack Developer who is always looking to learn something new', style1)
    let johnsLinkedIn = this.add.image(675, 475, 'linkedin').setScale(.25).setInteractive();
    let johnsGithub = this.add.image(675, 525, 'github').setScale(.25).setInteractive();
    
    let robynsLI = 'https://www.linkedin.com/in/robynnoble/'
    let robynsGH = 'https://github.com/rhurd06'
    let johnsLI = 'https://www.linkedin.com/in/johnturner4004';
    let johnsGH = 'https://www.github.com/johnturner4004'
    
    robynsLinkedIn.on('pointerup', linkedInRobyn, this);
    robynsGitHub.on('pointerup', githubRobyn, this);

    johnsLinkedIn.on('pointerup', linkedInJohn, this);
    johnsGithub.on('pointerup', githubJohn, this);

    function linkedInJohn() {
      externalURL(johnsLI)
    }
    function githubJohn() {
      externalURL(johnsGH)
    }
    function linkedInRobyn() {
      externalURL(robynsLI)
    }
    function githubRobyn() {
      externalURL(robynsGH)
    }

    function externalURL(link) {
      let s = window.open(link, '_blank');

      if(s && s.focus) {
        s.focus();
      } else if (!s) {
        window.location.href = link;
      }
    }
  }
}