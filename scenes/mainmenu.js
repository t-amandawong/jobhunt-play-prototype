export class MainMenu extends Phaser.Scene {
    constructor() {
        super("mainmenu");
    }

    preload() {
        this.load.path = "../assets/";
        this.load.image("titleScreen","jobhunt_map.png");
    }
    create() {
        // add background image
        let titleScreen = this.add.image(0, 0, 'titleScreen');
        titleScreen.setOrigin(0, 0);
        titleScreen.setScale(this.sys.game.config.width / titleScreen.width);

        // add graphics
        let graphics = this.add.graphics();

        // style and draw rectangle
        graphics.fillStyle(0xeb8881, 1);
        graphics.lineStyle(10, 0xcc3f35);

        graphics.fillRoundedRect(0.25 * this.sys.game.config.width, 0.7 * this.sys.game.config.height, 200, 100, 20);
        graphics.strokeRoundedRect(0.25 * this.sys.game.config.width, 0.7 * this.sys.game.config.height, 200, 100, 20);

        // style
    }
}