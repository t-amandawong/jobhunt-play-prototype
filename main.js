import { Boot } from './scenes/boot.js'
import { MainMenu } from './scenes/mainmenu.js' 
import { Preloader } from './scenes/preloader.js';
import { Interview } from './scenes/interview.js'

const config = {
    type: Phaser.AUTO,
    width: 1920, //window.innerWidth,
    height: 1080, //window.innerHeight,
    parent: 'game-container',
    backgroundColor: '#a8d1f0',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        Boot,
        Preloader,
        MainMenu,
        Interview
    ]
};

new Phaser.Game(config);