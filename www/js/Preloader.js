Growth.Preloader = function (game) {
    this.ready = false;
};

Growth.Preloader.prototype = {
    preload: function () {
        this.load.image('logo', 'img/logo.png');
    },

    create: function () {
        var self = this;

        var logo = self.game.add.sprite(self.game.world.centerX, self.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
        // this.state.start('MainMenu');
    },

    update: function () {

    }

};
