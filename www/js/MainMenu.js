Growth.MainMenu = function (game) {
    this.music = null;
};

Growth.MainMenu.prototype = {

    create: function () {
        this.game.stage.backgroundColor = "#5F6369";
        this.input.onDown.addOnce(this.startGame, this);
    },

    update: function () {

    },

    startGame: function () {
        this.state.start('Game');
    }

};
