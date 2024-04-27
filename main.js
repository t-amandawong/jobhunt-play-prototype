import { Boot } from './scenes/boot.js'
import { MainMenu } from './scenes/mainmenu.js' 
import { Preloader } from './scenes/preloader.js';

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: 'game-container',
    backgroundColor: '#a8d1f0',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        Boot,
        Preloader,
        MainMenu
    ]
};

new Phaser.Game(config);