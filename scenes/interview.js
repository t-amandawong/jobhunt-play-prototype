export class Interview extends Phaser.Scene {
    constructor() {
        super("interview");
    }

    create(data) {
        this.cameras.main.setAlpha(0);

        let mapCenterX = this.game.config.width * 0.6
        let mapCenterY = this.game.config.height * 0.5
        let mapScale = 0.7
        let map = this.add.image(mapCenterX, mapCenterY, 'battle1').setOrigin(0.5).setScale(mapScale)

        // fade in from last transition
        if (data.transitionEffect) {
            this.tweens.add({
                targets: this.cameras.main,
                alpha: 1,
                duration: data.transitionEffect.duration,
                ease: 'Linear'
            });
        }
    }
}