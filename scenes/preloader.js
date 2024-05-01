export class Preloader extends Phaser.Scene {
    constructor() {
        super('preloader');
    }

    preload() {
        //  Load the assets for the game
        this.load.setPath('../assets/');
        this.load.image("map", "jobhunt_map.png");
        this.load.image("battle1", "battle1.png");
        this.load.image("settings", "TEMPsettings.png");
        this.load.image("star", "TEMPstar.png")
    }

    create ()
    {   
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        let titleScreen = this.add.image(0, 0, 'titleScreen');
        titleScreen.setOrigin(0, 0);
        titleScreen.setScale(this.sys.game.config.width / titleScreen.width);
        this.scale.displaySize.setAspectRatio(this.sys.game.config.width/this.sys.game.config.height);
        this.scale.refresh();

        let loading = this.add.image(this.sys.game.config.width * 0.315, this.sys.game.config.height * 0.87, 'loading')
        loading.setScale(0.25)
        this.tweens.add({
            targets: loading,
            angle: 360,
            duration: 1500,
            ease: 'Cubic.easeInOut',
            repeat: 1
        });


        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.time.delayedCall(2600, ()=> {
            this.scene.transition({
                target: 'mainmenu',
                duration: 1000,
                moveBelow: true,
                data: {transitionEffect: { duration: 2000 }},
                onUpdate: this.transitionOut,
            });
        });
    }

    transitionOut(progress) {
        this.cameras.main.setAlpha(1 - progress);
    }
}