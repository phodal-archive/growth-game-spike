Growth.Preloader = function (game) {
    this.preloadBar = null;
    this.ready = false;
};

Growth.Preloader.prototype = {
    preload: function () {
        this.preloadBar = this.add.sprite(0, 100, 'preloaderBar');
        this.load.setPreloadSprite(this.preloadBar);

        this.load.image('logo', 'images/logo.png');
        this.load.image('background', 'images/trok.jpg');
    },

    create: function () {
        var self = this;

        this.preloadBar.cropEnabled = false;

        var logo = self.game.add.sprite(self.game.world.centerX, self.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
        this.state.start('MainMenu');
    },

    update: function () {

    }

};
