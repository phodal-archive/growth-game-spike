var button;
Growth.MainMenu = function (game) {
    this.music = null;
};

Growth.MainMenu.prototype = {

    create: function () {
        this.game.stage.backgroundColor = "#5F6369";

        button = this.game.add.button(this.game.world.centerX, this.game.world.centerY, 'button', this.startGame, this, 1, 0, 2);
        button.anchor.setTo(0.5, 0.5);

        button.onInputOver.add(console.log, this);
        button.onInputOut.add(console.log, this);
        button.onInputUp.add(console.log, this);
    },

    update: function () {

    },

    startGame: function () {
        this.state.start('Game');
    }

};
