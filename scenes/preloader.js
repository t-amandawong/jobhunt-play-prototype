export class Preloader extends Phaser.Scene {
    constructor() {
        super('preloader');
    }

    create ()
    {
        let titleScreen = this.add.image(0, 0, 'titleScreen');
        titleScreen.setOrigin(0, 0);
        titleScreen.setScale(this.sys.game.config.width / titleScreen.width);
        this.scale.displaySize.setAspectRatio(this.sys.game.config.width/this.sys.game.config.height);
        this.scale.refresh();

        let loading = this.add.image(this.sys.game.config.width * 0.32, this.sys.game.config.height * 0.8, 'loading')
        loading.setScale(0.25)
        this.tweens.add({
            targets: loading,
            angle: 360,
            duration: 1500,
            ease: 'Cubic.easeInOut',
            repeat: 1
        });

        this.time.delayedCall(2600, ()=> {
            this.scene.start('mainmenu');
        })
    }
}