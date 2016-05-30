Growth.MainMenu = function (game) {

    this.music = null;

};

Growth.MainMenu.prototype = {

    create: function () {
        this.startGame();
    },

    update: function () {

    },

    startGame: function () {
        this.state.start('Game');
    }

};
