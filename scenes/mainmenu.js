export class MainMenu extends Phaser.Scene {
    constructor() {
        super("mainmenu");
    }

    preload() {
        this.load.path = "../assets/";
        this.load.image("titleScreen","jobhuntTitleScreen.png");
    }
    create() {
        // add background image
        let titleScreen = this.add.image(0, 0, 'titleScreen');
        titleScreen.setOrigin(0, 0);
        titleScreen.setScale(this.sys.game.config.width / titleScreen.width);

        // add graphics
        let graphics = this.add.graphics();

        // set fill color, line color, line width
        let fillColor = 0xeb8881;
        let alpha = 1;
        let lineColor = 0xcc3f35;
        let lineWidth = 10;

        graphics.fillStyle(fillColor, alpha);
        graphics.lineStyle(lineWidth, lineColor);
        
        // draw rounded rectangle
        graphics.fillRoundedRect(0.25 * this.sys.game.config.width, 0.65 * this.sys.game.config.height, 200, 100, 20)
        graphics.strokeRoundedRect(0.25 * this.sys.game.config.width, 0.65 * this.sys.game.config.height, 200, 100, 20)
    }
}