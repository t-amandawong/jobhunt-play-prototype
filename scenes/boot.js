export class Boot extends Phaser.Scene {
    constructor() {
        super('Boot');
    }

    preload() {
        this.load.path = "../assets/";
        this.load.image("titleScreen","jobhuntTitleScreen.png");
        this.load.image("loading", "TEMPloading.png");
    }

    create() {
        this.scene.start('preloader');
    }
}